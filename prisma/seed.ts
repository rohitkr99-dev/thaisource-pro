const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding data...');

  // 1. Categories
  const categories = [
    { name: 'MEP', slug: 'mep', description: 'Mechanical, Electrical, and Plumbing services' },
    { name: 'HVAC', slug: 'hvac', description: 'Heating, Ventilation, and Air Conditioning' },
    { name: 'Electrical', slug: 'electrical', description: 'Electrical installations and maintenance' },
    { name: 'Civil Construction', slug: 'civil-construction', description: 'Building and infrastructure construction' },
    { name: 'Steel Fabrication', slug: 'steel-fabrication', description: 'Custom steel structures and components' },
    { name: 'Automation', slug: 'automation', description: 'Industrial automation and robotics' },
    { name: 'Logistics', slug: 'logistics', description: 'Freight forwarding and supply chain solutions' },
    { name: 'Export Services', slug: 'export-services', description: 'Thai product export and documentation' },
    { name: 'Machinery', slug: 'machinery', description: 'Industrial machines and heavy equipment' },
    { name: 'Manufacturing', slug: 'manufacturing', description: 'General manufacturing and production' },
    { name: 'Industrial Maintenance', slug: 'industrial-maintenance', description: 'Factory maintenance and repair' },
    { name: 'Safety Equipment', slug: 'safety-equipment', description: 'PPE and industrial safety solutions' },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  // 2. Subscription Plans
  const plans = [
    { name: 'Basic', slug: 'basic', price: 0, duration: 'Monthly', features: ['5 RFQ responses/mo', 'Basic Profile'] },
    { name: 'Professional', slug: 'professional', price: 2500, duration: 'Monthly', features: ['Unlimited RFQ responses', 'Featured badge', 'Analytics'] },
    { name: 'Enterprise', slug: 'enterprise', price: 25000, duration: 'Yearly', features: ['Priority Support', 'Account Manager', 'Top Search Results'] },
  ];

  for (const plan of plans) {
    await prisma.subscriptionPlan.upsert({
      where: { slug: plan.slug },
      update: {},
      create: plan,
    });
  }

  // 3. Admin User
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@thaisource.pro' },
    update: {},
    create: {
      email: 'admin@thaisource.pro',
      passwordHash: adminPassword,
      name: 'Main Admin',
      role: 'ADMIN',
      verified: true,
    },
  });

  // 4. Vendors
  const vendorData = [
    { name: 'Siam Engineering Group', email: 'info@siameng.co.th', city: 'Bangkok', province: 'Bangkok', services: ['MEP', 'Electrical'] },
    { name: 'Thai Steel Solutions', email: 'sales@thaisteel.com', city: 'Chonburi', province: 'Chonburi', services: ['Steel Fabrication', 'Manufacturing'] },
    { name: 'Eastern Seaboard Automation', email: 'contact@esauto.th', city: 'Rayong', province: 'Rayong', services: ['Automation', 'Machinery'] },
    { name: 'Bangkok HVAC Experts', email: 'service@bkk-hvac.com', city: 'Bangkok', province: 'Bangkok', services: ['HVAC'] },
    { name: 'Lanna Logistics', email: 'ops@lannalogistics.com', city: 'Chiang Mai', province: 'Chiang Mai', services: ['Logistics', 'Export Services'] },
    { name: 'Phuket Marine Construction', email: 'projects@phuketmarine.co.th', city: 'Phuket', province: 'Phuket', services: ['Civil Construction'] },
    { name: 'Korat Industrial Supply', email: 'admin@koratsupply.com', city: 'Nakhon Ratchasima', province: 'Nakhon Ratchasima', services: ['Safety Equipment', 'Machinery'] },
    { name: 'Ayutthaya Fab Works', email: 'works@ayutthaya-fab.com', city: 'Ayutthaya', province: 'Ayutthaya', services: ['Steel Fabrication', 'Industrial Maintenance'] },
    { name: 'Samut Prakan MEP Services', email: 'contact@spmep.co.th', city: 'Samut Prakan', province: 'Samut Prakan', services: ['MEP', 'Electrical'] },
    { name: 'Global Thai Exports', email: 'export@globalthai.com', city: 'Bangkok', province: 'Bangkok', services: ['Export Services', 'Logistics'] },
  ];

  const vendorInstances = [];
  for (const v of vendorData) {
    const password = await bcrypt.hash('vendor123', 10);
    const user = await prisma.user.create({
      data: {
        email: v.email,
        passwordHash: password,
        name: v.name + ' Representative',
        role: 'VENDOR',
        verified: true,
        vendor: {
          create: {
            companyName: v.name,
            city: v.city,
            province: v.province,
            services: v.services,
            description: `Leading provider of ${v.services.join(' and ')} in ${v.province}.`,
            isApproved: true,
            isFeatured: Math.random() > 0.7,
            rating: 4 + Math.random(),
            reviewCount: Math.floor(Math.random() * 20),
            contactEmail: v.email,
            contactPhone: '02-' + Math.floor(1000000 + Math.random() * 9000000),
          }
        }
      },
      include: { vendor: true }
    });
    vendorInstances.push(user.vendor);
  }

  // 5. Buyers
  const buyerData = [
    { name: 'SCG Projects', email: 'procurement@scg.co.th', industry: 'Construction' },
    { name: 'PTT Maintenance', email: 'ops@ptt.co.th', industry: 'Oil & Gas' },
    { name: 'Thai Airways Catering', email: 'supply@thaiairways.com', industry: 'Aviation' },
    { name: 'CP Group Logistics', email: 'logistics@cp.co.th', industry: 'FMCG' },
    { name: 'Amata City Management', email: 'infra@amata.com', industry: 'Industrial Estate' },
  ];

  const buyerInstances = [];
  for (const b of buyerData) {
    const password = await bcrypt.hash('buyer123', 10);
    const user = await prisma.user.create({
      data: {
        email: b.email,
        passwordHash: password,
        name: b.name + ' Buyer',
        role: 'BUYER',
        verified: true,
        buyer: {
          create: {
            companyName: b.name,
            industry: b.industry,
            province: 'Bangkok',
            city: 'Chatuchak',
          }
        }
      },
      include: { buyer: true }
    });
    buyerInstances.push(user.buyer);
  }

  // 6. RFQs
  const categoryInstances = await prisma.category.findMany();
  const rfqs = [];
  for (let i = 0; i < 15; i++) {
    const buyer = buyerInstances[i % buyerInstances.length];
    const category = categoryInstances[i % categoryInstances.length];
    const rfq = await prisma.rFQ.create({
      data: {
        title: `${category.name} for ${buyer.companyName} project ${i+1}`,
        description: `We are looking for a reliable partner to provide ${category.name} services for our upcoming project. Must be certified and have at least 5 years of experience in Thailand.`,
        categoryId: category.id,
        buyerId: buyer.id,
        quantity: Math.floor(Math.random() * 100) + 1,
        unit: 'Units',
        budget: (Math.floor(Math.random() * 10) + 1) * 100000 + ' THB',
        deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        status: i % 4 === 0 ? 'PENDING' : i % 4 === 1 ? 'SUBMITTED' : i % 4 === 2 ? 'NEGOTIATION' : 'CLOSED',
        province: 'Bangkok',
      }
    });
    rfqs.push(rfq);
  }

  // 7. Quotations
  for (let i = 0; i < 25; i++) {
    const rfq = rfqs[i % rfqs.length];
    const vendor = vendorInstances[Math.floor(Math.random() * vendorInstances.length)];
    await prisma.quotation.create({
      data: {
        rfqId: rfq.id,
        vendorId: vendor.id,
        price: (Math.floor(Math.random() * 100) + 50) * 1000,
        currency: 'THB',
        leadTime: '15-30 days',
        notes: 'Our quote includes all logistics and taxes. Standard warranty applies.',
        status: i % 5 === 0 ? 'ACCEPTED' : i % 5 === 1 ? 'REJECTED' : 'PENDING',
      }
    });
  }

  // 8. Reviews
  for (let i = 0; i < 20; i++) {
    const buyer = buyerInstances[Math.floor(Math.random() * buyerInstances.length)];
    const vendor = vendorInstances[Math.floor(Math.random() * vendorInstances.length)];
    await prisma.review.create({
      data: {
        buyerId: buyer.id,
        vendorId: vendor.id,
        rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars
        comment: 'Great service and professional communication. Highly recommended for industrial projects.',
      }
    });
  }

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

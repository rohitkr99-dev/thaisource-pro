# ThaiSource Pro Backend

This is the backend for ThaiSource Pro, a premium B2B industrial procurement marketplace for Thailand.

## Tech Stack
- **Next.js** (App Router)
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **NextAuth.js**
- **Zod** (Validation)
- **Cloudinary** (Image Uploads)

## Getting Started

### 1. Clone and Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env` and fill in your credentials.
```bash
cp .env.example .env
```

### 3. Database Setup
Ensure you have a PostgreSQL database running and the `DATABASE_URL` is correct in `.env`.
```bash
npx prisma migrate dev --name init
```

### 4. Seed Data
Populate the database with initial categories, plans, vendors, and RFQs.
```bash
npx prisma db seed
```

### 5. Run the Development Server
```bash
npm run dev
```

## API Documentation

### Authentication
- `POST /api/auth/signup`: Register a new user (Role: BUYER or VENDOR)
- `POST /api/auth/signin`: Sign in with credentials
- `GET /api/auth/session`: Get current session

### Vendors
- `GET /api/vendors`: List approved vendors with filters (`category`, `province`, `q`, `featured`)
- `POST /api/vendors`: Create/Update vendor profile (Auth required: VENDOR)
- `GET /api/vendors/[id]`: Get vendor details and reviews
- `PUT /api/vendors/[id]`: Update vendor profile (Auth required: VENDOR/ADMIN)

### RFQs
- `GET /api/rfqs`: List RFQs (Buyers see theirs, Vendors see all)
- `POST /api/rfqs`: Create a new RFQ (Auth required: BUYER)
- `GET /api/rfqs/[id]`: Get RFQ details and quotations
- `PUT /api/rfqs/[id]`: Update RFQ (Auth required: BUYER/ADMIN)

### Quotations
- `GET /api/quotations`: List quotations (Filtered by user role)
- `POST /api/quotations`: Submit a quotation for an RFQ (Auth required: VENDOR)

### Search & Categories
- `GET /api/categories`: List all industrial categories
- `GET /api/search`: Global search for vendors

### Admin
- `GET /api/admin/vendors`: List all vendors for moderation
- `PATCH /api/admin/vendors`: Approve/Feature a vendor
- `GET /api/admin/rfqs`: Monitor all RFQs

### Uploads
- `POST /api/upload`: Get Cloudinary signature for client-side uploads

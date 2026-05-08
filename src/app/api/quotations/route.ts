import { prisma } from "@/lib/prisma";
import { quotationSchema } from "@/lib/validations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    const quotations = await prisma.quotation.findMany({
      where: {
        ...( (session.user as any).role === "VENDOR" ? {
          vendor: { userId: (session.user as any).id }
        } : {
          rfq: { buyer: { userId: (session.user as any).id } }
        })
      },
      include: {
        rfq: true,
        vendor: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(quotations);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== "VENDOR") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const validatedData = quotationSchema.parse(body);

    const vendor = await prisma.vendor.findUnique({
      where: { userId: (session.user as any).id },
    });

    if (!vendor) {
      return new NextResponse("Vendor profile not found", { status: 404 });
    }

    const quotation = await prisma.quotation.create({
      data: {
        ...validatedData,
        vendorId: vendor.id,
      },
    });

    return NextResponse.json(quotation);
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 400 });
    }
    return new NextResponse("Internal Error", { status: 500 });
  }
}

import { prisma } from "@/lib/prisma";
import { rfqSchema } from "@/lib/validations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");
    const status = searchParams.get("status");

    const rfqs = await prisma.rFQ.findMany({
      where: {
        ...(categoryId && { categoryId }),
        ...(status && { status: status as any }),
        // If it's a buyer, they only see their own RFQs unless they are admin
        ...((session?.user as any)?.role === "BUYER" && {
          buyer: { userId: (session.user as any).id },
        }),
      },
      include: {
        category: true,
        buyer: true,
        _count: {
          select: { quotations: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(rfqs);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== "BUYER") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const validatedData = rfqSchema.parse(body);

    const buyer = await prisma.buyer.findUnique({
      where: { userId: (session.user as any).id },
    });

    if (!buyer) {
      return new NextResponse("Buyer profile not found", { status: 404 });
    }

    const rfq = await prisma.rFQ.create({
      data: {
        ...validatedData,
        buyerId: buyer.id,
        deadline: validatedData.deadline ? new Date(validatedData.deadline) : null,
      },
    });

    return NextResponse.json(rfq);
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 400 });
    }
    return new NextResponse("Internal Error", { status: 500 });
  }
}

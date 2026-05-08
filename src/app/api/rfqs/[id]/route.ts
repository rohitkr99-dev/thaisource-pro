import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const rfq = await prisma.rFQ.findUnique({
      where: { id: params.id },
      include: {
        category: true,
        buyer: true,
        quotations: {
          include: {
            vendor: true,
          },
        },
      },
    });

    if (!rfq) {
      return new NextResponse("Not Found", { status: 404 });
    }

    return NextResponse.json(rfq);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json();

    const rfq = await prisma.rFQ.findUnique({
      where: { id: params.id },
      include: { buyer: true },
    });

    if (!rfq) {
      return new NextResponse("Not Found", { status: 404 });
    }

    if (
      (session?.user as any).role !== "ADMIN" &&
      rfq.buyer.userId !== (session?.user as any).id
    ) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedRfq = await prisma.rFQ.update({
      where: { id: params.id },
      data: body,
    });

    return NextResponse.json(updatedRfq);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

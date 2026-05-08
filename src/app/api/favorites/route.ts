import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== "BUYER") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const favorites = await prisma.favorite.findMany({
      where: {
        buyer: { userId: (session.user as any).id }
      },
      include: {
        vendor: true
      }
    });

    return NextResponse.json(favorites);
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
    const { vendorId } = body;

    const buyer = await prisma.buyer.findUnique({
      where: { userId: (session.user as any).id }
    });

    if (!buyer) return new NextResponse("Buyer not found", { status: 404 });

    const favorite = await prisma.favorite.create({
      data: {
        buyerId: buyer.id,
        vendorId
      }
    });

    return NextResponse.json(favorite);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const { searchParams } = new URL(request.url);
    const vendorId = searchParams.get("vendorId");

    if (!session || !vendorId) return new NextResponse("Invalid Request", { status: 400 });

    const buyer = await prisma.buyer.findUnique({
      where: { userId: (session.user as any).id }
    });

    if (!buyer) return new NextResponse("Buyer not found", { status: 404 });

    await prisma.favorite.deleteMany({
      where: {
        buyerId: buyer.id,
        vendorId
      }
    });

    return new NextResponse("Removed", { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

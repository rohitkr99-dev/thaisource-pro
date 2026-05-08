import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if ((session?.user as any)?.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const vendors = await prisma.vendor.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      }
    });

    return NextResponse.json(vendors);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if ((session?.user as any)?.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { id, isApproved, isFeatured } = body;

    const vendor = await prisma.vendor.update({
      where: { id },
      data: {
        ...(isApproved !== undefined && { isApproved }),
        ...(isFeatured !== undefined && { isFeatured }),
      }
    });

    return NextResponse.json(vendor);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

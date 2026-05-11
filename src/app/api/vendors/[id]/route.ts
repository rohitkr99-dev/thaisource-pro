import { prisma } from "@/lib/prisma";
import { vendorSchema } from "@/lib/validations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const vendor = await prisma.vendor.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
        reviews: {
          include: {
            buyer: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!vendor) {
      return new NextResponse("Not Found", { status: 404 });
    }

    return NextResponse.json(vendor);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json();
    const validatedData = vendorSchema.parse(body);
    const { id } = await params;

    const vendor = await prisma.vendor.findUnique({
      where: { id },
    });

    if (!vendor) {
      return new NextResponse("Not Found", { status: 404 });
    }

    if (
      (session?.user as any).role !== "ADMIN" &&
      vendor.userId !== (session?.user as any).id
    ) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedVendor = await prisma.vendor.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(updatedVendor);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    const { id } = await params;

    if ((session?.user as any).role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await prisma.vendor.delete({
      where: { id },
    });

    return new NextResponse("Deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
import { prisma } from "@/lib/prisma";
import { vendorSchema } from "@/lib/validations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const province = searchParams.get("province");
    const query = searchParams.get("q");
    const featured = searchParams.get("featured") === "true";

    const vendors = await prisma.vendor.findMany({
      where: {
        isApproved: true,
        ...(featured && { isFeatured: true }),
        ...(category && {
          services: {
            has: category,
          },
        }),
        ...(province && { province }),
        ...(query && {
          OR: [
            { companyName: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
          ],
        }),
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        rating: "desc",
      },
    });

    return NextResponse.json(vendors);
  } catch (error) {
    console.error("VENDORS_GET", error);
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
    const validatedData = vendorSchema.parse(body);

    const vendor = await prisma.vendor.upsert({
      where: {
        userId: (session.user as any).id,
      },
      update: {
        ...validatedData,
      },
      create: {
        ...validatedData,
        userId: (session.user as any).id,
      },
    });

    return NextResponse.json(vendor);
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 400 });
    }
    return new NextResponse("Internal Error", { status: 500 });
  }
}

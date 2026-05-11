import { prisma } from "@/lib/prisma";
import { reviewSchema } from "@/lib/validations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== "BUYER") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const validatedData = reviewSchema.parse(body);

    const buyer = await prisma.buyer.findUnique({
      where: { userId: (session.user as any).id }
    });

    if (!buyer) return new NextResponse("Buyer not found", { status: 404 });

    const review = await prisma.$transaction(async (tx: any) => {
      const rev = await tx.review.create({
        data: {
          ...validatedData,
          buyerId: buyer.id,
        }
      });

      // Update vendor rating
      const allReviews = await tx.review.findMany({
        where: { vendorId: validatedData.vendorId }
      });

      const avgRating = allReviews.reduce((acc: number, curr: any) => acc + curr.rating, 0) / allReviews.length;

      await tx.vendor.update({
        where: { id: validatedData.vendorId },
        data: {
          rating: avgRating,
          reviewCount: allReviews.length
        }
      });

      return rev;
    });

    return NextResponse.json(review);
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 400 });
    }
    return new NextResponse("Internal Error", { status: 500 });
  }
}
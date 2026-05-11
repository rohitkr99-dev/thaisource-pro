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

    // Use separate queries instead of $transaction with typed tx
    const rev = await prisma.review.create({
      data: {
        ...validatedData,
        buyerId: buyer.id,
      }
    });

    // Update vendor rating
    const allReviews = await prisma.review.findMany({
      where: { vendorId: validatedData.vendorId }
    });

    const avgRating = allReviews.reduce((acc: number, curr: any) => acc + curr.rating, 0) / allReviews.length;

    await prisma.vendor.update({
      where: { id: validatedData.vendorId },
      data: {
        rating: avgRating,
        reviewCount: allReviews.length
      }
    });

    return NextResponse.json(rev);
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 400 });
    }
    return new NextResponse("Internal Error", { status: 500 });
  }
}
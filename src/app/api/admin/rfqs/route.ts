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

    const rfqs = await prisma.rFQ.findMany({
      include: {
        buyer: true,
        category: true,
        _count: {
          select: { quotations: true }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json(rfqs);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

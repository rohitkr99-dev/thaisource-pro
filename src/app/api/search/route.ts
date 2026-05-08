import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";
    const category = searchParams.get("category");
    const province = searchParams.get("province");

    const results = await prisma.vendor.findMany({
      where: {
        isApproved: true,
        OR: [
          { companyName: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
          { services: { has: query } }
        ],
        ...(category && {
           services: {
             has: category
           }
        }),
        ...(province && { province }),
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          }
        }
      }
    });

    return NextResponse.json(results);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

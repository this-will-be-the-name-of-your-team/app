import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
  const data = await prisma.post.findMany({
    take: 5,
  });
  return NextResponse.json({ status: 200, data });
}

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../lib/prisma";
import { isAuthenticated } from "../isAuthenticated";

export async function GET() {
  const data = await prisma.post.findMany();
  return NextResponse.json({ status: 200, data });
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated(req))
    return NextResponse.json({ status: 403, data: "Only Admin Can Access Article" });
  const request = await req.json();
  const verify = z.object({
    title: z.string(),
    image: z.string(),
  });
  const validation = verify.safeParse(request);
  if (!validation.success) return NextResponse.json({ status: 400, data: validation.error.issues });
  const { id } = await prisma.post.create({ data: request });
  return NextResponse.json({ status: 200, id });
}

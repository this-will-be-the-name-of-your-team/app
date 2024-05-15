import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { z } from "zod";
import { isAuthenticated } from "../isAuthenticated";
import { Post } from "@prisma/client";

export async function GET() {
  const data = await prisma.post.findMany();
  const parsedData = data.map((post: Post) => ({ ...post, image: JSON.parse(post.image || "[]") }));
  return NextResponse.json({ status: 200, data: parsedData });
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated(req))
    return NextResponse.json({ status: 403, data: "Only Admin Can Access Article" });
  const request = await req.json();
  const verify = z.object({
    title: z.string(),
    content: z.string(),
    image: z.array(z.string()),
  });
  const validation = verify.safeParse(request);
  if (!validation.success) return NextResponse.json({ status: 400, data: validation.error.issues });
  const data = {
    ...request,
    createdAt: new Date(),
    image: JSON.stringify(request.image),
  };
  const { id } = await prisma.post.create({ data });
  return NextResponse.json({ status: 200, id });
}

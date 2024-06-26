import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../../lib/prisma";
import { isAuthenticated } from "../../isAuthenticated";

export async function PUT(req: NextRequest) {
  if (!isAuthenticated(req))
    return NextResponse.json({ status: 403, data: "Only Admin Can Access Article" });
  const postId = Number(req.nextUrl.pathname.replace("/api/article/", ""));
  if (isNaN(postId)) return NextResponse.json({ status: 400, data: "Parameter Error" });
  const request = await req.json();
  const verify = z.object({
    title: z.string(),
    image: z.string(),
  });
  const validation = verify.safeParse(request);
  if (!validation.success) return NextResponse.json({ status: 400, data: validation.error.issues });
  const { id } = await prisma.post.update({ where: { id: postId }, data: request });
  return NextResponse.json({ status: 200, id });
}

export async function DELETE(req: NextRequest) {
  if (!isAuthenticated(req))
    return NextResponse.json({ status: 403, data: "Only Admin Can Access Article" });
  const id = Number(req.nextUrl.pathname.replace("/api/article/", ""));
  await prisma.post.delete({ where: { id } });
  return NextResponse.json({ status: 200 });
}

export async function GET(req: NextRequest) {
  const id = Number(req.nextUrl.pathname.replace("/api/article/", ""));
  const data = await prisma.post.findUnique({ where: { id } });
  return NextResponse.json({
    status: 200,
    data: {
      ...data,
      image: data?.image?.replaceAll("\\", "/"),
    },
  });
}

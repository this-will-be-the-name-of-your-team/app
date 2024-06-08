import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  if (!file) return NextResponse.json({ status: 400, data: "No files received" });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}_${file.name}`;
  try {
    const pathname = path.join(process.cwd(), "public/database/" + filename);
    const url = path.join("/database/" + filename);
    await writeFile(pathname, buffer);
    return NextResponse.json({ status: 201, url: url.replaceAll("\\", "/") });
  } catch (error) {
    return NextResponse.json({ status: 500, data: error });
  }
}

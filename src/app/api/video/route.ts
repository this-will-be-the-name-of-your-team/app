import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public/landing", "/mainVideo.mp4");

  const fileBuffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();

  let contentType = "application/octet-stream"; // Default binary stream

  if (ext === ".mp4") {
    contentType = "video/mp4";
  } else if (ext === ".webm") {
    contentType = "video/webm";
  } else if (ext === ".ogg") {
    contentType = "video/ogg";
  }

  return new Response(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": contentType,
    },
  });
}

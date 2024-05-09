import { NextRequest } from "next/server";

export const isAuthenticated = (req: NextRequest) => {
  const token = req.headers.get("Authorization");
  if (token === process.env.NEXT_PUBLIC_AUTHENTICATED_ACCESS_TOKEN) return true;
  return false;
};

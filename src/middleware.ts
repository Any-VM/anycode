// TODO: Do an actual homepage
import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/dashboard", req.url));
}
export const config = {
  matcher: "/",
};

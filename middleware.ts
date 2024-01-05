import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL(`/x${request.nextUrl.search}`, request.url));
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|api|__api).*)"],
};

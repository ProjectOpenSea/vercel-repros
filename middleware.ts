import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const persona = "x";
  const locale = 'en'
  const rewritten = `/${locale}/${persona}${request.nextUrl.pathname}${request.nextUrl.search}`;
  return NextResponse.rewrite(new URL(rewritten, request.url));
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|api|__api).*)"],
};

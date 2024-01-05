import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const persona = "x";
  const locale = 'en'
  request.nextUrl.pathname = `/${locale}/${persona}${request.nextUrl.pathname}`
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|api|__api).*)"],
};
	
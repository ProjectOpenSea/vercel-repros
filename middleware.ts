import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  const persona = "x";
  const locale = "en";
  let pathname = request.nextUrl.pathname;
  if (pathname === "/headers-redirect") {
    request.nextUrl.pathname = "/headers";
    return NextResponse.redirect(request.nextUrl);
  }

  if (pathname === "/") {
    pathname = "/discover";
  }
  request.nextUrl.pathname = `/${locale}/${persona}${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|api|__api).*)"],
};

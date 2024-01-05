import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const persona = "x";
  return NextResponse.rewrite(
    new URL(
      `/${persona}${request.nextUrl.pathname}${request.nextUrl.search}`,
      request.url
    )
  );
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|api|__api).*)"],
};

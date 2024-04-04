import { NextResponse, type NextRequest } from "next/server";
import { createCSP } from "./contentSecurityPolicy";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/_ping") {
    return new NextResponse("OK");
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const requestHeaders = new Headers(request.headers);

  const csp = createCSP({ nonce });

  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  return response;
}

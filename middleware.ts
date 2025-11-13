import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({ headers: request.headers });
}

export const config = {
  matcher: ["/dashboard/client", "/dashboard/admin"],
};
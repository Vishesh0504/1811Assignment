import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    // console.log(code);
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    await supabase.auth.exchangeCodeForSession(code);
    const user = await supabase.auth.getUser();
    // console.log(user);
    return NextResponse.redirect(`${requestUrl.origin}/dashboard`, {
      headers: {
        "Set-Cookie": `user=${JSON.stringify(user)}; Path=/; Secure`,
      },
    });
  }

}

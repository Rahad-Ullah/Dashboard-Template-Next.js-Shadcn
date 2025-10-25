# Dashboard Template for Next.js with Shadcn UI

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/Rahad-Ullah/Dashboard-Template-Next.js-Shadcn.git
```

Second, install packages:

```bash
npm install
# or
yarn install
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

### Create the `.env.local` file and set environment variables following these:

```javascript
BASE_URL = "http://10.0.70.50:5003/api/v1";
NEXT_PUBLIC_SERVER_URL = "http://10.0.70.50:5003";
```

## Protect your routes by middleware after backend integration

```javascript
import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import { myFetch } from "./utils/myFetch";

const authRoutes = [
  "/login",
  "/forgot-password",
  "/reset-password",
  "/otp-verify",
];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;
  if (!accessToken) {
    // Allow unauthenticated access to auth routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      // Redirect unauthenticated users to login
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  // Get the current user from server
  const userRes = await myFetch("/client", { tags: ["profile"] });
  const profile = userRes.data;

  if (!profile) {
    // Allow unauthenticated access to auth routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      // Redirect unauthenticated users to login
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  // Allow only users with ADMIN or SUPER_ADMIN role
  if (!(profile.role === "ADMIN" || profile.role === "SUPER_ADMIN")) {
    (await request.cookies).delete("accessToken");
    (await request.cookies).delete("refreshToken");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Don't allow authorized users to access auth routes
  if (authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/users/:path*",
    "/categories/:path*",
    "/bookings/:path*",
    "/verification/:path*",
    "/support/:path*",
    "/terms-and-conditions/:path*",
    "/privacy-policy/:path*",
    "/profile/:path*",
    "/login",
    "/reset-password",
    "/forgot-password",
    "/otp-verify",
  ],
};

```

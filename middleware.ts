import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

// Paths that require authentication
const protectedPaths = ['/profile', '/dashboard', '/settings'];

// Paths that are public
const publicPaths = ['/', '/login', '/signup', '/about', '/contact'];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Check if the path is one that requires authentication
  const isProtectedPath = protectedPaths.some(pp => path.startsWith(pp));
  
  // Check if the path is public and doesn't require authentication
  const isPublicPath = publicPaths.some(pp => path === pp || path.startsWith('/api/') || path.startsWith('/_next/'));
  
  // If the path is neither protected nor public, we'll treat it as protected
  // This is a catch-all for any routes not explicitly listed
  const requiresAuth = isProtectedPath || !isPublicPath;
  
  // Get the token from the request
  const token = await getToken({ req: request });
  
  // If no token and the path requires auth, redirect to login
  if (!token && requiresAuth) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', path);
    return NextResponse.redirect(loginUrl);
  }
  
  // If has token and is on a login/signup page, redirect to homepage
  if (token && (path === '/login' || path === '/signup')) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // Otherwise, continue
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/auth|_next/static|_next/image|favicon.ico).*)'],
};
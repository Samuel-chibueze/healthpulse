import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/dist/server/api-utils';




export function middleware(request: Request) {


    const headersList = headers();

  // Store current request url in a custom header, which you can read later
  const fullUrl = headersList.get('referer') || "";
  const urlParts = fullUrl.split('/');
    const path  = '/' + urlParts.slice(3).join('/');
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', path);
 const session = cookies().get('session')?.value || null
  
  if(session){
    return NextResponse.next({
      request: {
        // Apply new request headers
        headers: requestHeaders,
      }
    });
  }else{
    return NextResponse.redirect(new URL('/accounts/sign-in', request.url))
  }

  
}

export const config = {
  matcher: ['/dashboard/','/dashboard/profile']
}
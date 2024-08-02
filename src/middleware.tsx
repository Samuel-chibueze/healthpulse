import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/dist/server/api-utils';
import logoutroute from "@/app/serveractions"




export async function middleware(request: Request) {

 const session = cookies().get('session')?.value || null
 const userid = cookies().get('user_id')?.value || null
  
  if(session){
    return NextResponse.next({
      request: {
        // Apply new request headers
      
      }
    });
  }else{
      
    return NextResponse.redirect(new URL('/accounts/sign-in', request.url))
  }

  
}

export const config = {
  matcher: ['/dashboard/','/dashboard/profile']
}
import { NextResponse, NextRequest } from 'next/server'
import config from '../next.config'

export async function middleware(request = NextRequest) {
    // /* get cookie from request */
    // let cookies = request.cookies
    // /* get base_url of this route */
    // const base_url = request.nextUrl.clone()
    // /* if have cookie */
    // if(cookies){
    //     /* if have access_token */
    //     if(cookies.access_token){
    //         const access_url = `${config.apiPath}/checkTokenExpire/${cookies.access_token}`
    //         const res = await fetch(access_url)
    //         const result = await res.json()
    //         /* if result status is not true */
    //         if(result.status){
    //             return NextResponse.next()
    //         } else if(cookies.refresh_token){
    //             /* send refresh_token to generate new access_token */
    //             const refresh_url = `${config.apiPath}/generateToken/${cookies.refresh_token}`
    //             const res = await fetch(refresh_url)
    //             const result = await res.json()
    //             if(result.status){
    //                 /* return false with set new access_token in cookie */
    //                 return NextResponse.next().cookie("access_token", result.data)
    //             }
    //         }
    //     }
    // }{
    //     /* if path not /login will redirect to /login */
    //     if(base_url.pathname != '/login'){
    //         base_url.pathname = '/login'
    //         return NextResponse.redirect(base_url)
    //     }
    // }
}
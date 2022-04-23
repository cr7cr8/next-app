

import { NextResponse } from 'next/server'



export function middleware(req, ...props) {

    return NextResponse.next()
}
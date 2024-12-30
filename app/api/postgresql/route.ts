import { NextRequest, NextResponse } from "@/node_modules/next/server";
// import { NextResponse, NextRequest } from 'next/server'
import seedUsers  from "./postData"

export async function POST(request: NextRequest) {
    seedUsers()
}



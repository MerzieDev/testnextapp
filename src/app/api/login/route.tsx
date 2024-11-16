
import auth from "@/lib/firebase/firebaseAuth";
import { verifyIdToken } from "@/lib/firebase/utils/firebase.admin";
import { log } from "console";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    const authorization = (await headers().then(res => res)).get("Authorization");
    if (authorization?.startsWith("Bearer ")) {
        const token = authorization.split(" ")[1];
        const decodedtoken = await verifyIdToken(token);
        log(decodedtoken);
    }
    return NextResponse.json({ message: "Success" }, { status: 200 })
}


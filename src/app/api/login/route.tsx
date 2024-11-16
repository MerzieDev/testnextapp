
import { verifyIdToken } from "@/lib/firebase/utils/firebase.admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const authorization = req.headers.get("Authorization");
    if (authorization?.startsWith("Bearer ")) {
        const token = authorization.split(" ")[1];
        const decodedtoken = await verifyIdToken(token);
    }
    return NextResponse.json({ message: "Success" }, { status: 200 })
}


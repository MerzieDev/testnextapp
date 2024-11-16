import app from "@/lib/firebase/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
    return NextResponse.json({message: "Success"}, {status: 200})
}
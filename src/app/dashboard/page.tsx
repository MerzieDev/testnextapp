"use client"

import app from "@/lib/firebase/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";

const Page = () => {
    const auth = getAuth(app);

    const handleClick = async () => {
        await signInWithPopup(auth, new GoogleAuthProvider()).then(async (res) => {
            if (res) {
                return fetch("/api/login", { method: "POST", headers: { Authorization: `Bearer ${await res.user.getIdToken()}` } });
            }
        });
    }
    return (<div>
        <button onClick={handleClick}>Pobierz</button>
    </div>);
}

export default Page;
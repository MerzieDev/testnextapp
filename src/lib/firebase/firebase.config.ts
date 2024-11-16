import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  
    authDomain: "merziedev.firebaseapp.com",
  
    projectId: "merziedev",
  
    storageBucket: "merziedev.firebasestorage.app",
  
    messagingSenderId: "345203168477",
  
    appId: "1:345203168477:web:63d6d2b0a5e42030267734"
  
  };
  
  

const app = initializeApp(firebaseConfig);

export default app;

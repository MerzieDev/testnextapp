import admin from "firebase-admin";

let serviceAccount;
if(process.env.FIREBASE_ADMIN){
    serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      
      if (!admin.apps.length) {
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
      }
}
else{
    
}

export const verifyIdToken = (token: string) => admin.auth().verifyIdToken(token);



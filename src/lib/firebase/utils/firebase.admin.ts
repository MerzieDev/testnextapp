import admin from "firebase-admin";

var serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN!);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const verifyIdToken = (token: any) => admin.auth().verifyIdToken(token);

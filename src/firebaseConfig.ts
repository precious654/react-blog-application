import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD02-IRIXgQ2e3d1BlVgaOPefWkehqT0RU",
  authDomain: "blog-application-react-632a6.firebaseapp.com",
  projectId: "blog-application-react-632a6",
  storageBucket: "blog-application-react-632a6.appspot.com",
  messagingSenderId: "175255212633",
  appId: "1:175255212633:web:26dd8505941a9c62021748",
  measurementId: "G-DDMLY4H1Q6"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);


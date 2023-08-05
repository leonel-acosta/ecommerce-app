import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuEhgyl3oemkgfBFx-jnGaMcKvydFJgkA",
  authDomain: "ecommerce-app-coderhouse.firebaseapp.com",
  projectId: "ecommerce-app-coderhouse",
  storageBucket: "ecommerce-app-coderhouse.appspot.com",
  messagingSenderId: "155698472821",
  appId: "1:155698472821:web:3c30618731881ab3eed53c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

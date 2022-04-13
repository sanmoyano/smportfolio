import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRmPDRGaLuMtLpD7yjunYH1KVN8zRpB_s",
    authDomain: "sm-portfolio-4c746.firebaseapp.com",
    projectId: "sm-portfolio-4c746",
    storageBucket: "sm-portfolio-4c746.appspot.com",
    messagingSenderId: "327559606473",
    appId: "1:327559606473:web:a7ad6be3d7b03d7cf1dd18",
    measurementId: "G-VCNJL6P0YW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

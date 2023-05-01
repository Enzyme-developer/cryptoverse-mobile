import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzvlMkVyqCKCkYVoZsS1o10OQjiaWreIw",
  authDomain: "jobify-35917.firebaseapp.com",
  projectId: "jobify-35917",
  storageBucket: "jobify-35917.appspot.com",
  messagingSenderId: "80489344574",
  appId: "1:80489344574:web:47ca790ca767ca3c61eb6f",
  measurementId: "G-F2QWRK8T3J",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore();

export { auth };
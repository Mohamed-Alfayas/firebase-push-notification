
import { initializeApp } from "firebase/app";
import { getMessaging} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCMTGrMFU27X8jgV3J4qyxuVwIPPb9_fo0",
  authDomain: "push-notification-68d9b.firebaseapp.com",
  projectId: "push-notification-68d9b",
  storageBucket: "push-notification-68d9b.firebasestorage.app",
  messagingSenderId: "767412132973",
  appId: "1:767412132973:web:26bfb530dffdb25072b364",
  measurementId: "G-Z4XS016NEC"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 콘솔에서 복사한 설정값 (내 프로젝트 값으로 교체)
const firebaseConfig = {
  apiKey: "AIzaSyDk7EU7pCkQHMHZ-oh2CS5HimpNsAKAi54",
  authDomain: "reactfirebaseapp-fd75d.firebaseapp.com",
  projectId: "reactfirebaseapp-fd75d",
  storageBucket: "reactfirebaseapp-fd75d.firebasestorage.app",
  messagingSenderId: "989312916469",
  appId: "1:989312916469:web:2548dd0a15f5622bd61ebc",
  measurementId: "G-C7YGTG7JHL",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 가져오기
export const db = getFirestore(app);

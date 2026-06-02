import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Keep real values in .env (VITE_* variables); these defaults are safe public config.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDtlFssjnGm79cBjOUENwm4G5k2eg2n1aY',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'chrty-web.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'chrty-web',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'chrty-web.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '593549818788',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:593549818788:web:eb3736d0d139e46d095f31',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-WXBSJFZE5S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;

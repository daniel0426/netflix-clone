import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAeBpafOXBhL6fokkA5HE2KhhwPAHT-gaM',
  authDomain: 'netflix-clone-216fb.firebaseapp.com',
  projectId: 'netflix-clone-216fb',
  storageBucket: 'netflix-clone-216fb.appspot.com',
  messagingSenderId: '165253441622',
  appId: '1:165253441622:web:4970ccac8287825dab73f7',
  measurementId: 'G-FEXQYPQRSW',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };

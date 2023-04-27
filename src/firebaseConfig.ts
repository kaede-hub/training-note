import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:"AIzaSyD1k0aalq5eXZ7yhTjm05TLMx1G35SnFe0",
  authDomain: "fir-772a9.firebaseapp.com",
  projectId: "fir-772a9",
  storageBucket: "fir-772a9.appspot.com",
  messagingSenderId: "1090041027925",
  appId: "1:1090041027925:web:2a587f7ae5304bf78ae3dc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

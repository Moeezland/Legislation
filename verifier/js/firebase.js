import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCB8M1uMShs_zPZ50qHxuGYlWYJJt8n6Yw",
    authDomain: "legislation-ba06a.firebaseapp.com",
    projectId: "legislation-ba06a",
    storageBucket: "legislation-ba06a.firebasestorage.app",
    messagingSenderId: "96739996336",
    appId: "1:96739996336:web:f9821273536aa7a1168175"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnC0qVNXjCz0KOIBwp8qelp7hG0nzkOvo",
    authDomain: "acessocar-ea0b8.firebaseapp.com",
    projectId: "acessocar-ea0b8",
    storageBucket: "acessocar-ea0b8.firebasestorage.app",
    messagingSenderId: "1004134701220",
    appId: "1:1004134701220:web:f240a49b974a425fa36e31"
};

// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully");
} catch (error) {
    console.error("Firebase initialization error:", error);
}

// Export services
const auth = firebase.auth();
const db = firebase.firestore();

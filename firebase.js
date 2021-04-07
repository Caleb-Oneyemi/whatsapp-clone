import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCtQ-Ied_-OLqSg5wenhf84KV629TEj8TU",
    authDomain: "whatsapp-clone-14db1.firebaseapp.com",
    projectId: "whatsapp-clone-14db1",
    storageBucket: "whatsapp-clone-14db1.appspot.com",
    messagingSenderId: "74997633683",
    appId: "1:74997633683:web:65b7bf01bbd1ff912e3366"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();


const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTpwrzCWuYmKseSc2fHy0hOwYpEU46mM8",
  authDomain: "mianistore-react.firebaseapp.com",
  projectId: "mianistore-react",
  storageBucket: "mianistore-react.appspot.com",
  messagingSenderId: "975085935510",
  appId: "1:975085935510:web:30ca67871e400c2a1c9bb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
 
     return app
}
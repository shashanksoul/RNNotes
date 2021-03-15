import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6kBc31w-nK-oI4P5YrBSBU03wPTwL78w",
    authDomain: "rnnotes-9dd4a.firebaseapp.com",
    projectId: "rnnotes-9dd4a",
    storageBucket: "rnnotes-9dd4a.appspot.com",
    messagingSenderId: "78516228712",
    appId: "1:78516228712:web:e5d7e9c95f642a612ea1dd",
    measurementId: "G-7L8RH6VK9R"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase ;
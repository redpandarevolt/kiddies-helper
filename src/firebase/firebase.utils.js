import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBLAViunVGLPCKRjsdjjMs6Iljy0BxUqlo",
    authDomain: "kiddies-helper-db.firebaseapp.com",
    projectId: "kiddies-helper-db",
    storageBucket: "kiddies-helper-db.appspot.com",
    messagingSenderId: "800452674263",
    appId: "1:800452674263:web:d5dff59c1e76008d956692"
};

firebase.initializeApp(config);

export  const auth =  firebase.auth();
export  const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
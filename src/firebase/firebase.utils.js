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

export const createUserProfileDocument = async ( userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date() ;
        try {
            await  userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log( 'error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export  const auth =  firebase.auth();
export  const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword ,getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDNwE7S7G4qe-FqqrPOomkVBpoOUboe_bE",
  authDomain: "netflix-clone-7888c.firebaseapp.com",
  projectId: "netflix-clone-7888c",
  storageBucket: "netflix-clone-7888c.firebasestorage.app",
  messagingSenderId: "332479504421",
  appId: "1:332479504421:web:e56f76d678f0dc991e5fcc"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name , email, password )=>{
try {
   const res =   await createUserWithEmailAndPassword(auth, email, password);

    const user = res.user;
    await addDoc(collection(db, "users"), {
        uid: user.uid,
        name ,
        AuthProvider : "local" ,
        email ,
        });
} catch(error) {

    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join( " "));
}


}

const login = async (email, password) => {
    try{
      await  signInWithEmailAndPassword(auth, email, password)
    }  catch (error) {
        console.log(error);
           toast.error(error.code.split('/')[1].split('-').join( " "));
}

}
const logout = () => {
   signOut(auth);

}


export {auth , db , login , signup,logout }; 
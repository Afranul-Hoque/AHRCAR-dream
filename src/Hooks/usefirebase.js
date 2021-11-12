import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import initializeFirebase from "../Pages/Firebase/Firebase.init";


initializeFirebase();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isloding, setIsloding] = useState(true);
    const [authError, setAuthError] = useState('');


    const registerUser = (email, password, name, location, history) => {
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {

                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    // logout funtcion

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }



    // signin athentication

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }





    // observed user situation

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {


                setUser(user);

            } else {
                setUser({});
            }
        });
        return () => unsubscribe;

    }, [])



    return {
        user,
        registerUser,
        logOut,
        loginUser
    }

}

export default useFirebase;
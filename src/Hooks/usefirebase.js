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
        setIsloding(true);
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsloding(false));
    }

    // logout funtcion

    const logOut = () => {
        setIsloding(true);
        signOut(auth).then(() => {
        }).catch((error) => {

        })
            .finally(() => setIsloding(false));
    }



    // signin athentication

    const loginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsloding(false));
    }





    // observed user situation

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {


                setUser(user);

            } else {
                setUser({});
            }
            setIsloding(false)
        });
        return () => unsubscribe;

    }, [])



    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isloding,
        authError,
    }

}

export default useFirebase;
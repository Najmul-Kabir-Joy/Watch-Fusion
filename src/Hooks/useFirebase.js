import firebaseInit from "../Firebase/firebase.init"
import { getAuth, getIdToken, updateProfile, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import Swal from 'sweetalert2';
firebaseInit();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const successAlert = () => {
        Swal.fire({
            title: 'SUCCESSFULL',
            text: 'Thank you for joing with us.',
            icon: 'success'
        });
    }
    const logOutAlert = () => {
        Swal.fire({
            title: 'SUCCESSFULL',
            text: 'Successfully logged out.',
            icon: 'success'
        });
    }
    const failAlert = () => {
        Swal.fire({
            title: 'FAILED',
            text: 'Please try again later.',
            icon: 'error'
        });
    }
    const googleProvider = new GoogleAuthProvider();

    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }
    const registerUser = (email, pass, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                setUserName(name)
                //SAVE USER IN MONGODB
                // saveUser(email, name, 'POST')
                history.replace('/');
                if (userCredential.user.email) {
                    successAlert();
                } else {
                    failAlert();
                }


            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }
    const logIn = (email, pass, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
                if (userCredential.user.email) {
                    successAlert();
                } else {
                    failAlert();
                }
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))

    }
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // saveUser(user.email, user.displayName, 'PUT');
                if (user.email) {
                    successAlert();
                } else {
                    failAlert()
                }
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);

            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    //OBSERVER FOR AUTH CHANGE
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])



    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { logOutAlert(); })
            .catch((error) => { setError(error.message) })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        isLoading,
        registerUser,
        signInWithGoogle,
        logOut,
        logIn
    }



}

export default useFirebase;
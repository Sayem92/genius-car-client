import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/Firebase.confiq';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // crete user account------------------------
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login----------------------------
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    // logout-----------
    const logout =() =>{
        setLoading(true)
        localStorage.removeItem('genius-token')
        return signOut(auth)
    }

    // googleSignIn-----------
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logout,
        googleSignIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
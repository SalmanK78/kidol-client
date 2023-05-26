import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider,  createUserWithEmailAndPassword,  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext =createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    console.log(user)
    const [loading, setLoading] = useState(true);
    // const [myToys,setMyToys] = useState([]);
    const [products,setProducts] = useState([]);

    const createUser = (email, password)=>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = ()=>{
        setLoading(false)
        return signInWithPopup(auth,googleProvider)
    }
    
    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, CurrentUser =>{
            setUser(CurrentUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])
    
    const updateUser = (user,name,photo)=>{
        updateProfile(user,{
            displayName:name,
            photoURL:photo
        })
    }

    
    useEffect(()=>{
        fetch(`https://toy-marketplace-server-xi-seven.vercel.app/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    // useEffect(()=>{
    //     fetch(`https://toy-marketplace-server-xi-seven.vercel.app/mytoys`)
    //     .then(res => res.json())
    //     .then(data => setMyToys(data))
    // },[])
    
    console.log(user)
    
    const authInfo = {
        user,
        products,
        // myToys,
        loading,
        setProducts,
        signIn,
        createUser,
        updateUser,
        googleSignIn,
        logOut,
        
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';
import { getAuth,signOut ,GithubAuthProvider ,updateProfile,onAuthStateChanged, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider , signInWithEmailAndPassword  } from "firebase/auth";
 
 
 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();
export const autcontext =  createContext()

const Contextprovider = ({children}) => {
    
    

    const [user, setuser] = useState();
    const [error, seterror] = useState();
    const [success, setsuccess] = useState()
    const [loader, setloader] = useState(true);


    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser)
            setloader(false)
        })

        return () => {
            unsubscribe()
        }
    }, []);
 
    // crate user 
    const createUser = (email, password) => {

       return createUserWithEmailAndPassword(auth, email, password)
    //     .then(res =>{
    //         setuser(res.user)      
            
    //         setsuccess("user create succesfully")
           
    //         seterror(null)


    // })       
    //     .catch((err => {
    //         setsuccess(null)
    //         seterror(err.message)
    //     }))
    
    }


    const updateuserphotoURl = (name, photo) => {

        updateProfile(auth.currentUser, {
            displayName : name , 
            photoURL : photo
        }).then(()=>{
            console.log('photo add ')
        }).catch(err=> console.log(err))

    }

    // login user 
    const loginUser = (email, password) => {
    
      return  signInWithEmailAndPassword(auth, email, password) 
        

    }

   
    const Googlelogin = () => {

        signInWithPopup(auth, provider)
         .then(res => {
            setuser(res.user)
            setsuccess("login success")
        })       
        .catch((err => {
            setsuccess(null)
            seterror(err.message)
        }))

    }

  
    const githubLogin = ( ) => {

        signInWithPopup(auth, gitprovider)
        .then(res => {
            setuser(res.user)
            setsuccess("login success")
        })       
        .catch((err => {
            setsuccess(null)
            seterror(err.message)
        }))

    }

    const singoutuser = () => {

        signOut(auth)
        setuser(null)
        setsuccess(null)


    }


    
    const contextvalue = {
        createUser,
        loginUser,
        user,
        error,
        seterror,
        success,
        setloader,
        setsuccess,
        Googlelogin,       
        githubLogin,
        singoutuser,
        loader,
        updateuserphotoURl
    }


    return (
        <autcontext.Provider value={contextvalue}>
            {children}
        </autcontext.Provider>
    );
};

export default Contextprovider;
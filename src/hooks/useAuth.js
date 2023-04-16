import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut, updateProfile } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { doc, getDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCGxRP_BBL9sQkjJbomCJ1c-kLPftIGexI",
    authDomain: "kaban-99cc3.firebaseapp.com",
    projectId: "kaban-99cc3",
    storageBucket: "kaban-99cc3.appspot.com",
    messagingSenderId: "973927865825",
    appId: "1:973927865825:web:d5fe19f7a5b216009986a0"
}; 

export let app = initializeApp(firebaseConfig);
export const storage = getStorage()
export const auth = getAuth(app)
const AuthContext = createContext({})


export const AuthProvider = ({children}) => {
  const db =  getFirestore()
  const [user, setUser] = useState(null)
  const [startUser, setStartUser] = useState(false)
  const [loadingInitial, setLoadingInitial] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [ref, setRef] = useState('null')
  
  const navigation = useNavigation()

  useEffect(() =>   
    onAuthStateChanged(auth, async (user) => {

      if(user){
        const getUserData = async () => {
          console.log(user, 'uuu')
          const usersRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(usersRef);
          if (docSnap.data()?.name) {
            setUser(docSnap.data())
            setStartUser(false)
            if(docSnap.data().projects.length>0){
              navigation.navigate('DrawerRoot')
            }
            else {
              navigation.navigate('CreateBoard')
            }
          } else {
            console.log("No such document!");
            setUser({
              name:user.displayName,
              email:user.email,
              profileImage:user.photoURL,
              uid:user.uid,
              projects:[]
             })
             setStartUser(true)
            navigation.navigate('EditUser')
          }
        }
        getUserData()
        setUser(user)
      }
      else {
        setUser(null)
      }
      setLoadingInitial(false)
    }
  ), [ref])
  
    const memoedValue = useMemo(() => ({
      user,
      setUser,
      setRef,
      loading,
      error,
      startUser
    }), [user, loading, error, ref])

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider> 
  )
}
export default function useAuth() {
    return useContext(AuthContext)
}   

export const db = getFirestore(app)
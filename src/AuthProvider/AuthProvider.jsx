import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth"
import app from "../../firebase.config"
import { createContext, useEffect, useState } from "react"
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  //create user with email password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //login with email and password
  const loginWithEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  //login with google=======================
  const googlLogin = ()=>{
    return signInWithPopup(auth,provider)
  }
  //user signOut========
  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }
  //ON AUTH STATE CHANGE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  const authInfo = {
    createUser,
    user,
    setUser,
    loginWithEmail,
    loading,
    setLoading,
    logout,
    googlLogin
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

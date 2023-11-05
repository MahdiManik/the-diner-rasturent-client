import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../Config/firebase.config.js";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  getAuth,
} from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      console.log("current", currentUser);
      setIsLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);



  const values = {
    user,
    isLoading,
    createUser,
    Login,
    googleLogin,
    logOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;

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
  updateProfile,
} from "firebase/auth";
import axios from "axios";

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

  const profileUpdate = (name, email, photo) => {
    console.log(name, email, photo);
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
      email: email,
    });
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      console.log("current", currentUser);
      setIsLoading(false);
      if (!currentUser) {
        axios.post(
          "https://the-diner-server-site.vercel.app/logout",
          loggedUser,
          {
            withCredentials: true,
          }
        );
      }
    });

    return () => {
      return unsubscribe();
    };
  }, [user?.email]);

  const values = {
    user,
    isLoading,
    createUser,
    Login,
    googleLogin,
    profileUpdate,
    logOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;

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

  const profileUpdate = (name, photo) => {
    console.log(name, photo);
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log("current User", currentUser);
      setIsLoading(false);
      if (currentUser) {
        axios
          .post("http://localhost:7000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response in auth provider", res.data);
          });
      } else {
        axios
          .post("http://localhost:7000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("logout api", res.data);
          });
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

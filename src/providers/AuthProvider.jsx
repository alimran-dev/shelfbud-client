import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };
  const updatePass = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const loggedUser = auth.currentUser?.email || user?.email;
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(auth.currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
        axios.post("https://shelfbud-server.vercel.app/logout",loggedUser,{withCredentials:true})
          .then(res => {
            console.log(res.data);
        })
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const AuthInfo = {
    user,
    setUser,
    loading,
    googleLogin,
    signUp,
    auth,
    updateUser,
    updatePass,
    loginUser,
    logOut,
    setLoading,
  };
  return (
    <>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};

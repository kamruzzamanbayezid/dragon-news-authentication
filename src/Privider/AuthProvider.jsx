import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../FirebaseConfig/Firebase.Config";
import PropTypes from 'prop-types';


export const AuthContent = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
      const [user, setUser] = useState({});
      const [loading, setLoading] = useState(true);

      // Log in with Google
      const googleLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider)
      }

      // Log in with git hub
      const githubLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, githubProvider);
      }

      // Sign Up | Register | Create user
      const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // update profile
      const profileUpdate = (name, photo_url) => {
            setLoading(true);
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo_url

            })
      }

      // Login 
      const LogIn = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
      }

      // Sign Out
      const Logout = () => {
            setLoading(true);
            return signOut(auth);
      }

      // observer
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  setLoading(false);
            });

            return () => {
                  unSubscribe();
            }
      }, [])

      const authentication = {
            user,
            googleLogin,
            githubLogin,
            createUser,
            profileUpdate,
            LogIn,
            loading,
            Logout
      }

      return (
            <AuthContent.Provider value={authentication}>
                  {children}
            </AuthContent.Provider>
      );
};

export default AuthProvider;

AuthProvider.propTypes = {
      children: PropTypes.node
}
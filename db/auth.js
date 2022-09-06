import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

//? This function is for creating a new user with email and password
const signUpWithEmail = async (email, password, fname, lname) => {
  event.preventDefault();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: `${fname} ${lname}`,
    });
    console.log(userCredential.user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};

//? This function is for signing in with email
const signInWithEmail = async (email, password) => {
  event.preventDefault();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};

//? This function is for signing out
const logout = async () => {
  await signOut(auth);
};

export { signUpWithEmail, signInWithEmail, logout };

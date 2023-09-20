import { auth } from "@config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";
import { IUser } from "@context/AuthContext";

export const userSignupWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const userSession = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userSession;
};

export const userLoginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const userSession = await signInWithEmailAndPassword(auth, email, password);
  return userSession;
};

// current user and it will be null if user isn't signed in
export const authUser = auth.currentUser;

export const onAuthChanged = (changeFunc: (user: IUser | null) => void) => {
  onAuthStateChanged(auth, (user) => changeFunc(user));
};

export const logOut = async () => {
  await signOut(auth);
};

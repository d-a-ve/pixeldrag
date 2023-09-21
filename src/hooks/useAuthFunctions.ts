import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuthApi from "@hooks/useAuthSetter";
import getValidFormData from "@utils/getValidFormData";
import { toastError, toastSuccess } from "@utils/toastNotifs";
import {
  logOut,
  userLoginWithEmailAndPassword,
  userSignupWithEmailAndPassword,
} from "@utils/userSessions";
import getFirebaseErrorMessage from "@utils/getFirebaseErrorMessage";

const useAuthFunctions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setCurrentUser = useAuthApi();
  const navigate = useNavigate();

  const signup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData, isFormValid } = getValidFormData(e);
    const [emailField, passwordField] = formData;

    try {
      if (isFormValid) {
        setIsLoading(true);
        const session = await userSignupWithEmailAndPassword(
          emailField[1] as string,
          passwordField[1] as string
        );

        setCurrentUser(session.user);
        setIsLoading(false);
        navigate(`/`);
      } else {
        toastError(
          "Form submission failed. Please review the highlighted fields for errors and try again."
        );
      }
    } catch (error: any) {
      setIsLoading(false);
      const errorMessage = getFirebaseErrorMessage(
        error.code,
        "Something went wrong. Please try again later!"
      );
      toastError(errorMessage);
    }
  };

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData, isFormValid } = getValidFormData(e);
    const [emailField, passwordField] = formData;

    try {
      if (isFormValid) {
        setIsLoading(true);
        const session = await userLoginWithEmailAndPassword(
          emailField[1] as string,
          passwordField[1] as string
        );

        setCurrentUser(session.user);
        setIsLoading(false);
        navigate(`/`);
      } else {
        toastError(
          "Form submission failed. Please review the highlighted fields for errors and try again."
        );
      }
    } catch (error: any) {
      setIsLoading(false);
      const errorMessage = getFirebaseErrorMessage(
        error.code,
        "Something went wrong. Please try again later!"
      );
      toastError(errorMessage);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await logOut();
      setIsLoading(false);
      setCurrentUser(null);
      toastSuccess("You have successfully logged out");
    } catch (error: any) {
      setIsLoading(false);
      const errorMessage = getFirebaseErrorMessage(
        error.code,
        "Cannot logout now. Please try again later!"
      );
      toastError(errorMessage);
    }
  };

  return {
    isLoading,
    login,
    signup,
    logout,
  };
};

export default useAuthFunctions;

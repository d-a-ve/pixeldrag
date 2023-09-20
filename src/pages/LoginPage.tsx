import PrimaryButton from "@components/Button/PrimaryButton";
import Form from "@components/Form/Form";
import Input from "@components/Input/Input";
import useAuthApi from "@hooks/useAuthSetter";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import getValidFormData from "@utils/getValidFormData";
import { toastError } from "@utils/toastNotifs";
import { createUserSession, getSession } from "@utils/userSessions";
import Loader from "@components/Loader/Loader";
import Logo from "@components/Logo/Logo";
import { errorCodes } from "@constants";
import getAppwriteErrorMessage from "@utils/getAppwriteErrorMessage";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setCurrentUser = useAuthApi();
  const navigate = useNavigate();

  const submitFunction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData, isFormValid } = getValidFormData(e);
    const [emailField, passwordField] = formData;

    try {
      if (isFormValid) {
        setIsLoading(true);
        await createUserSession(
          emailField[1] as string,
          passwordField[1] as string
        );
        const userSession = await getSession();

        setCurrentUser(userSession);
        setIsLoading(false);
        navigate(`/gallery`);
      } else {
        toastError(
          "Form submission failed. Please review the highlighted fields for errors and try again."
        );
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      const errorMessage = getAppwriteErrorMessage(
        error,
        "Something went wrong. Please try again later!"
      );
      toastError(errorMessage);
    }
  };

  return (
    <main className="min-h-screen">
      <div className="mx-auto h-full max-w-2xl px-4">
        <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-8">
          <div>
            <Logo />

            <h2 className="mb-2 mt-8 text-fs-1 font-semibold text-black">
              Login to view gallery
            </h2>
          </div>

          <Form submitFunction={submitFunction}>
            <Input
              labelFor="email"
              labelText="Email"
              inputType="email"
              required={true}
              placeholder="example@info.com"
            />
            <Input
              labelFor="password"
              labelText="Password"
              inputType="password"
              required={true}
            />
            <PrimaryButton buttonType="submit">
              {isLoading ? <Loader dimensions="w-5 h-5" /> : "Login"}
            </PrimaryButton>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;

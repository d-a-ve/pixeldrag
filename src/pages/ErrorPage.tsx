import PrimaryButton from "@components/Button/PrimaryButton";
import Logo from "@components/Logo/Logo";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 p-4">
      <Logo />
      <div className="mx-auto flex max-w-xs flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-fs-3 font-bold">404</h2>
        <p className="mb-2">
          Oops! The page you&apos;re looking for couldn&apos;t be found. Please
          check the URL or return to the previous page.
        </p>
        <PrimaryButton buttonType="button" clickFunction={back}>
          Go back
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ErrorPage;

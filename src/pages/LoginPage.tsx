import PrimaryButton from "@components/Button/PrimaryButton";
import Form from "@components/Form/Form";
import Input from "@components/Input/Input";
import Loader from "@components/Loader/Loader";
import Logo from "@components/Logo/Logo";
import AuthLayout from "@components/Layout/AuthLayout";
import useAuthFunctions from "@hooks/useAuthFunctions";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { login, isLoading } = useAuthFunctions();

  return (
    <AuthLayout>
      <div>
        <Logo />

        <h2 className="mb-2 mt-8 text-fs-1 font-semibold text-black">
          Login to view gallery
        </h2>
        <p>
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-primary-500 transition duration-200 hover:text-primary-700"
          >
            Sign up here
          </Link>
        </p>
      </div>

      <Form submitFunction={login}>
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
    </AuthLayout>
  );
};

export default LoginPage;

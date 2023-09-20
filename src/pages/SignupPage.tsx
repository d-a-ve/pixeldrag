import PrimaryButton from "@components/Button/PrimaryButton";
import Form from "@components/Form/Form";
import Input from "@components/Input/Input";
import AuthLayout from "@components/Layout/AuthLayout";
import Loader from "@components/Loader/Loader";
import Logo from "@components/Logo/Logo";
import useAuthFunctions from "@hooks/useAuthFunctions";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const { signup, isLoading } = useAuthFunctions();

  return (
    <AuthLayout>
      <div>
        <Logo />

        <h2 className="mb-2 mt-8 text-fs-1 font-semibold text-black">
          Get Started with Us
        </h2>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-primary-500 hover:text-primary-700 transition duration-200">
            Login here
          </Link>
        </p>
      </div>

      <Form submitFunction={signup}>
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
          {isLoading ? <Loader dimensions="w-5 h-5" /> : "Signup"}
        </PrimaryButton>
      </Form>
    </AuthLayout>
  );
};

export default SignupPage;

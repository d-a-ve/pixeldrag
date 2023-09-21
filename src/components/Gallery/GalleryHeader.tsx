import PrimaryButton from "@components/Button/PrimaryButton";
import Loader from "@components/Loader/Loader";
import Logo from "@components/Logo/Logo";
import useAuth from "@hooks/useAuth";
import useAuthFunctions from "@hooks/useAuthFunctions";
import { Link } from "react-router-dom";

const GalleryHeader = () => {
  const currentUser = useAuth();
  const { logout, isLoading } = useAuthFunctions();

  return (
    <section className="mx-auto mb-8 w-full">
      <div className="mb-8 flex items-center justify-between sm:mb-4">
        <Logo />
        {currentUser ? (
          <PrimaryButton clickFunction={logout} buttonType="button"
classname="sm:text-fs--1">
            {isLoading ? <Loader dimensions="w-5 h-5" /> : "Logout"}
          </PrimaryButton>
        ) : (
          <Link to="/login" className="btn-primary sm:text-fs--1">
            Login
          </Link>
        )}
      </div>
      <div className="text-center">
        <h2 className="mb-2 text-fs-2 font-semibold">Our Gallery</h2>
        <p className="mx-auto max-w-[50ch] text-center leading-snug">
          Explore our stunning picture collection. If you&apos;d like to
          rearrange them, simply drag and drop to arrange them as you wish.
        </p>
      </div>
    </section>
  );
};

export default GalleryHeader;

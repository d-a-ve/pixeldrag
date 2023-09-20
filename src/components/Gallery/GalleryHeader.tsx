import PrimaryButton from "@components/Button/PrimaryButton";
import Loader from "@components/Loader/Loader";
import Logo from "@components/Logo/Logo";
import useAuth from "@hooks/useAuth";
import useAuthApi from "@hooks/useAuthSetter";
import { toastSuccess } from "@utils/toastNotifs";
import { deleteSession } from "@utils/userSessions";
import { useState } from "react";
import { Link } from "react-router-dom";

const GalleryHeader = () => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const setCurrentUser = useAuthApi();

  const logoutFunc = async () => {
    setLoading(true);
    await deleteSession();
    setLoading(false);
    setCurrentUser(undefined);
    toastSuccess("You have successfully logged out");
  };

  return (
    <section className="mx-auto mb-8 w-full">
      <div className="mb-8 flex items-center justify-between sm:mb-4">
        <Logo />
        {currentUser ? (
          <PrimaryButton clickFunction={logoutFunc} buttonType="button">
            {loading ? <Loader dimensions="w-5 h-5" /> : "Logout"}
          </PrimaryButton>
        ) : (
          <Link to="/" className="btn-primary">
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

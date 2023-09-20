import GalleryBody from "@components/Gallery/GalleryBody";
import GalleryHeader from "@components/Gallery/GalleryHeader";
import useAuthApi from "@hooks/useAuthSetter";
import useImageGalleryApi from "@hooks/useImageGalleryApi";
import getAppwriteErrorMessage from "@utils/getAppwriteErrorMessage";
import { toastError } from "@utils/toastNotifs";
import { getSession } from "@utils/userSessions";
import { data } from "data";
import { useEffect } from "react";

const GalleryPage = () => {
  const setCurrentUser = useAuthApi();
  const setImages = useImageGalleryApi();

  useEffect(() => {
    const userSession = async () => {
      try {
        const session = await getSession();
        setCurrentUser(session);
      } catch (error) {
        const errorMessage = getAppwriteErrorMessage(
          error,
          "Unable to retrieve your current session. Please try again later!"
        );
        toastError(errorMessage);
      }
    };
    setImages(data);
    userSession();
    console.log("Gallery page use Effect ran");
  }, [setCurrentUser, setImages]);

  return (
    <main className=" mx-auto w-auto max-w-5xl px-4 pt-8">
      <GalleryHeader />
      <GalleryBody />
    </main>
  );
};

export default GalleryPage;

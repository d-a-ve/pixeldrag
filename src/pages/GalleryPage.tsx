import GalleryBody from "@components/Gallery/GalleryBody";
import GalleryHeader from "@components/Gallery/GalleryHeader";
import useAuthFunctions from "@hooks/useAuthFunctions";
import useImageGalleryApi from "@hooks/useImageGalleryApi";
import { data } from "data";
import { useEffect } from "react";

const GalleryPage = () => {
  const { changeAuthState } = useAuthFunctions();
  const setImages = useImageGalleryApi();

  useEffect(() => {
    setImages(data);
    changeAuthState();
  }, [setImages]);

  return (
    <main className=" mx-auto w-auto max-w-5xl px-4 py-8">
      <GalleryHeader />
      <GalleryBody />
      <p className="mt-8 text-center">
        Built by Dave for HNG X Zuri Stage 3 Task.
      </p>
    </main>
  );
};

export default GalleryPage;

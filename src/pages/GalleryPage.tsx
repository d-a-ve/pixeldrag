import GalleryBody from "@components/Gallery/GalleryBody";
import GalleryHeader from "@components/Gallery/GalleryHeader";
import useImageGalleryApi from "@hooks/useImageGalleryApi";
import { data } from "data";
import { useEffect } from "react";

const GalleryPage = () => {
  const setImages = useImageGalleryApi();

  useEffect(() => {
    setImages(data);
  }, [setImages]);

  return (
    <main className=" mx-auto w-auto max-w-5xl px-4 py-8">
      <GalleryHeader />
      <GalleryBody />
      <p className="mt-8 text-center">
        Built by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/d-a-ve/"
          className="text-primary-500 transition duration-200 hover:text-primary-700"
        >
          Dave
        </a>{" "}
        for HNG X Zuri Stage 3 Task.
      </p>
    </main>
  );
};

export default GalleryPage;

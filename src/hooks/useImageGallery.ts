import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";

const useImageGallery = () => {
  const images = useContext(GalleryContext);

  return images;
};

export default useImageGallery;

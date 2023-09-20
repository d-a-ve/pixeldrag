import { useContext } from "react";
import { GallerySetterContext } from "../context/GalleryContext";

const useImageGalleryApi = () => {
  const setImages = useContext(GallerySetterContext);

  return setImages;
};

export default useImageGalleryApi;

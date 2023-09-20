import { useContext } from "react";
import { FilteredGalleryContext } from "@context/FilteredGalleryContext";

const useFilteredImageGallery = () => {
  const filteredImages = useContext(FilteredGalleryContext);

  return filteredImages;
};

export default useFilteredImageGallery;

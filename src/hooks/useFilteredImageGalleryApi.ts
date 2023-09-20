import { useContext } from "react";
import { FilteredGallerySetterContext } from "@context/FilteredGalleryContext";

const useFilteredImageGalleryApi = () => {
  const filteredImages = useContext(FilteredGallerySetterContext);

  return filteredImages;
};

export default useFilteredImageGalleryApi;

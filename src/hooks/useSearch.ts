import useDebounce from "@hooks/useDebounce";
import { useEffect, useState } from "react";
import useImageGallery from "@hooks/useImageGallery";
import { ChangeEvent } from "react";
import useFilteredImageGalleryApi from "./useFilteredImageGalleryApi";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const debouncedValue = useDebounce(searchValue);
  const images = useImageGallery();
  const setFilteredImages = useFilteredImageGalleryApi();

  useEffect(() => {
    const searchForImages = () => {
      // making sure debounced value is not empty
      if (debouncedValue.length > 0) {
        setIsSearchLoading(true);
        const filteredImages = images?.filter((image) => {
          if (image.tag.toLowerCase().includes(debouncedValue.toLowerCase())) {
            return image;
          }
        });
        setIsSearchLoading(false);
        setFilteredImages(filteredImages);
      }
    };
    searchForImages();
  }, [debouncedValue, images, setFilteredImages]);

  useEffect(() => {
    if (searchValue.length === 0) {
      setFilteredImages(undefined);
    }
  }, [searchValue, setFilteredImages]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const clearSearchInput = () => {
    setSearchValue("");
    setFilteredImages(undefined);
  };

  return {
    isSearchLoading,
    searchValue,
    debouncedValue,
    handleChange,
    clearSearchInput,
  };
};

export default useSearch;

import useImageGallery from "@hooks/useImageGallery";
import Loader from "@components/Loader/Loader";
import useSearch from "@hooks/useSearch";
import useFilteredImageGallery from "@hooks/useFilteredImageGallery";
import DnDSortableGalleryGrid from "./DnDSortableGalleryGrid";
import { useImageGalleryApi } from "@context/GalleryContext";
import useFilteredImageGalleryApi from "@hooks/useFilteredImageGalleryApi";

const Gallery = () => {
  const images = useImageGallery();
  const setImages = useImageGalleryApi();
  const filteredImages = useFilteredImageGallery();
  const setFilteredImages = useFilteredImageGalleryApi();
  const { isSearchLoading } = useSearch();

  if (!images) return <Loader dimensions="w-6 h-6" />;

  if (isSearchLoading) return <Loader dimensions="w-6 h-6" />;

  // check if we are done searching and the filteredImages array is empty
  if (!isSearchLoading && filteredImages && !(filteredImages.length > 0))
    return (
      <p className="mx-auto max-w-[30ch] text-center leading-snug">
        Apologies, we couldn&apos;t find any pictures in our collection that
        match your search.
      </p>
    );

  return (
    <>
      {filteredImages ? (
        <DnDSortableGalleryGrid
          images={filteredImages}
          setImages={setFilteredImages}
        />
      ) : (
        <DnDSortableGalleryGrid images={images} setImages={setImages} />
      )}
    </>
  );
};

export default Gallery;

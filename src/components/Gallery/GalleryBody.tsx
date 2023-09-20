import GallerySearch from "@components/Gallery/GallerySearch";
import Gallery from "@components/Gallery/Gallery";
import FilteredGalleryContextProvider from "@context/FilteredGalleryContext";

const GalleryBody = () => {
  return (
    <FilteredGalleryContextProvider>
      <GallerySearch />
      <Gallery />
    </FilteredGalleryContextProvider>
  );
};

export default GalleryBody;

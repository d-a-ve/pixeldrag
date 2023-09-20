import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { TImage } from "@myTypes/TImages";

export const FilteredGalleryContext = createContext({} as TImage[] | undefined);
export const FilteredGallerySetterContext = createContext<
  Dispatch<SetStateAction<TImage[] | undefined>>
>(undefined as unknown as Dispatch<SetStateAction<TImage[] | undefined>>);

const FilteredGalleryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [filteredImages, setFilteredImages] = useState<TImage[]>();

  return (
    <FilteredGalleryContext.Provider value={filteredImages}>
      <FilteredGallerySetterContext.Provider value={setFilteredImages}>
        {children}
      </FilteredGallerySetterContext.Provider>
    </FilteredGalleryContext.Provider>
  );
};

export default FilteredGalleryContextProvider;

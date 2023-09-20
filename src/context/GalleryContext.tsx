import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { TImage } from "@myTypes/TImages";

export const GalleryContext = createContext({} as TImage[] | undefined);
export const GallerySetterContext = createContext<
  Dispatch<SetStateAction<TImage[] | undefined>>
>(undefined as unknown as Dispatch<SetStateAction<TImage[] | undefined>>);

const GalleryContextProvider = ({ children }: { children: ReactNode }) => {
  const [images, setImages] = useState<TImage[]>();

  return (
    <GalleryContext.Provider value={images}>
      <GallerySetterContext.Provider value={setImages}>
        {children}
      </GallerySetterContext.Provider>
    </GalleryContext.Provider>
  );
};

export const useImageGallery = () => {
  const images = useContext(GalleryContext);

  return images;
};

export const useImageGalleryApi = () => {
  const setImages = useContext(GallerySetterContext);

  return setImages;
};

export default GalleryContextProvider;

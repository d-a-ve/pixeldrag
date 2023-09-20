import { DragEndEvent } from "@dnd-kit/core";
import useAuth from "@hooks/useAuth";
import { TImage } from "@myTypes/TImages";
import setImagesState from "@utils/setImagesState";
import { Dispatch, SetStateAction } from "react";

const useDragAndDrop = (
  setImages: Dispatch<SetStateAction<TImage[] | undefined>>,
  openModal: () => void
) => {
  const currentUser = useAuth();

  const handleDragEnd = (event: DragEndEvent) => {
    console.log("End ran");
    const { active, over } = event;

    if (over && active.id !== over.id) {
      // this is a setter function which will be passed as args
      setImages((prev) => {
        const newState = setImagesState(prev, active, over);
        return newState;
      });
    }
  };

  const handleCancelDrag = () => {
    // remember to change this back later!
    if (currentUser) {
      openModal();
      return true;
    }
    return false;
  };

  return { handleDragEnd, handleCancelDrag };
};

export default useDragAndDrop;

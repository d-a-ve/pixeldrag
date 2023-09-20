import { Active, Over } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { TImage } from "@myTypes/TImages";

const setImagesState = (
  prev: TImage[] | undefined,
  active: Active,
  over: Over | null
) => {
  if (over) {
    if (prev) {
      const oldImagePosition = prev.findIndex((item) => active.id === item.id);
      const newImagePosition = prev.findIndex((item) => over.id === item.id);
      
      return arrayMove(prev, oldImagePosition, newImagePosition);
    }
    return prev;
  }
};

export default setImagesState;

import { Dispatch, SetStateAction, useState } from "react";
import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import GalleryItem from "./GalleryItem";
import ModalLayout from "@components/Modal/ModalLayout";
import Modal from "@components/Modal/Modal";
import useDragAndDrop from "@hooks/useDragAndDrop";
import { TImage } from "@myTypes/TImages";

type TDnDSortableGalleryGrid = {
  images: TImage[];
  setImages: Dispatch<SetStateAction<TImage[] | undefined>>;
};

const DnDSortableGalleryGrid = ({
  images,
  setImages,
}: TDnDSortableGalleryGrid) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const { handleCancelDrag, handleDragEnd } = useDragAndDrop(
    setImages,
    openModal
  );
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      }
    })
  )

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
      cancelDrop={handleCancelDrag}
    >
      {images && (
        <SortableContext items={images}>
          <div className="grid grid-cols-4 gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {images.map((item) => (
              <GalleryItem
                key={item.id}
                id={item.id}
                src={item.url}
                alt={item.alt}
                tag={item.tag}
              />
            ))}
          </div>
        </SortableContext>
      )}
      {isModalOpen && (
        <ModalLayout>
          <Modal setIsModalOpen={setIsModalOpen} />
        </ModalLayout>
      )}
    </DndContext>
  );
};

export default DnDSortableGalleryGrid;

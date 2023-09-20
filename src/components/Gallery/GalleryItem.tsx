import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type TGalleryItem = {
  id: number;
  src: string;
  alt: string;
  tag: string;
};

const GalleryItem = ({ src, alt, tag, id }: TGalleryItem) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="relative touch-none"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <img
        className="h-60 w-full object-cover"
        src={`/assets/images/${src}`}
        alt={alt}
        loading="lazy"
      />
      <div className="absolute left-2 top-2 rounded-full bg-primary-100 px-3 py-1 text-fs--2 uppercase text-black backdrop-blur-3xl">
        <p>{tag}</p>
      </div>
    </div>
  );
};

export default GalleryItem;

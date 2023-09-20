import SecondaryButton from "@components/Button/SecondaryButton";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

type TModalProps = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ setIsModalOpen }: TModalProps) => {
  return (
    <div className="mx-4 max-w-sm rounded-lg bg-white p-8 sm:px-4">
      <div className="flex flex-col gap-4">
        <p className="text-fs-0">
          Oops, sorry you cannot use the drag and drop feature when not logged
          in.
        </p>
        <p className="text-fs-0">Please log in.</p>
        <div className="flex items-center gap-2 sm:mt-2 sm:flex-col sm:items-start">
          <Link to="/" className="btn-primary w-full text-center">
            Login
          </Link>
          <SecondaryButton
            buttonType="button"
            classname="w-full text-center"
            clickFunction={() => {
              console.log("Back to gallery");
              setIsModalOpen(false);
            }}
          >
            Back to Gallery
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;

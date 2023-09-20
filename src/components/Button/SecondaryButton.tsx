import { TButtonProps } from "@myTypes/TButton";

const SecondaryButton = ({
  buttonType,
  classname,
  clickFunction,
  children,
}: TButtonProps) => {
  return (
    <button
      type={buttonType}
      className={`btn-secondary ${classname}`}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;

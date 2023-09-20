import { TButtonProps } from "@myTypes/TButton";

const PrimaryButton = ({
  buttonType,
  classname,
  clickFunction,
  children,
}: TButtonProps) => {
  return (
    <button
      type={buttonType}
      className={`btn-primary ${classname}`}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

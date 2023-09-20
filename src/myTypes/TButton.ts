import { ReactNode } from "react";

export type TButtonProps = {
  buttonType: "button" | "submit" | "reset" | undefined;
  classname?: string;
  clickFunction?: () => void;
  children: ReactNode;
};

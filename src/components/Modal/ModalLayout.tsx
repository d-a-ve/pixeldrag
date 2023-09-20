import { ReactNode } from "react";

type TModalLayout = { children: ReactNode };

const ModalLayout = ({ children }: TModalLayout) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black/60">
      {children}
    </div>
  );
};

export default ModalLayout;

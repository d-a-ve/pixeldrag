import { ReactNode } from "react";

const LoadingPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      {children}
    </div>
  );
};

export default LoadingPageLayout;

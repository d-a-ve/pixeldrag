import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen">
      <div className="mx-auto h-full max-w-2xl px-4">
        <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-8">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;

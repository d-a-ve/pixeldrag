import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import { User } from "@firebase/auth";

export type IUser = User;

export const AuthContext = createContext({} as IUser | null);
export const AuthSetterContext = createContext<
  Dispatch<SetStateAction<IUser | null>>
>(undefined as unknown as Dispatch<SetStateAction<IUser | null>>);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={currentUser}>
      <AuthSetterContext.Provider value={setCurrentUser}>
        {children}
      </AuthSetterContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

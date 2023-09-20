import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Models } from "appwrite";

type IUser = Models.Session;

export const AuthContext = createContext({} as IUser | undefined);
export const AuthSetterContext = createContext<
  Dispatch<SetStateAction<IUser | undefined>>
>(undefined as unknown as Dispatch<SetStateAction<IUser | undefined>>);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUser>();

  return (
    <AuthContext.Provider value={currentUser}>
      <AuthSetterContext.Provider value={setCurrentUser}>
        {children}
      </AuthSetterContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

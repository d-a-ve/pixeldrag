import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const currentUser = useContext(AuthContext);

  return currentUser;
};

export default useAuth;

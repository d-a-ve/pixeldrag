import { useContext } from "react";
import { AuthSetterContext } from "../context/AuthContext";

const useAuthApi = () => {
  const setCurrentUser = useContext(AuthSetterContext);

  return setCurrentUser;
};

export default useAuthApi;

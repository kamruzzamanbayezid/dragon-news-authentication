import { useContext } from "react";
import { AuthContent } from "../Privider/AuthProvider";

const UseAuth = () => {
      const all = useContext(AuthContent);

      return all;
};

export default UseAuth;
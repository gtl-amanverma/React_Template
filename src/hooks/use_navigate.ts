import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/cookies";

const useCustomNavigate = () => {
  const navigate = useNavigate();
  const getLang = getCookie("lang");
  const getToken = getCookie("deviceToken");

  const goTo = (path: string, replace: boolean = false) => {
    navigate(`${path}?lang=${getLang}&token=${getToken}`, { replace });
  };

  return goTo;
};

export default useCustomNavigate;

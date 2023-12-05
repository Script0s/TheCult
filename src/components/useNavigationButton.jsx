import { useNavigate } from "react-router-dom";

const useNavigationButton = (route) => {
  const navigate = useNavigate();

  return () => {
    navigate(route);
    window.scrollTo(0, 0);
  };
};

export default useNavigationButton;

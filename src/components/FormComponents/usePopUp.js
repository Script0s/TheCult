import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const usePopup = (timeoutDuration = 2000, redirectPath = "/thecult/none") => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (isPopupVisible) {
      timer = setTimeout(() => {
        setIsPopupVisible(false);
        navigate(redirectPath);
        window.scrollTo(0, 0); // Remonter en haut après la redirection
      }, timeoutDuration);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isPopupVisible, timeoutDuration, navigate, redirectPath]);

  const showPopup = () => setIsPopupVisible(true);
  const hidePopup = () => {
    setIsPopupVisible(false);
    navigate(redirectPath); // Redirige également si la popup est fermée manuellement
  };

  return { isPopupVisible, showPopup, hidePopup };
};

export default usePopup;

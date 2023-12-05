import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const usePopup = (timeoutDuration = 2000, redirectPath = "/none") => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    let timer;
    if (isPopupVisible) {
      timer = setTimeout(() => {
        setIsPopupVisible(false);
        navigate(redirectPath); // Redirige après la fermeture de la popup
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

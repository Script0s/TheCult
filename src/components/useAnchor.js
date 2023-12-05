import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    // On attend que le rendu de la page soit terminé
    // et que les images/autres ressources soient chargées.
    // Cela peut être ajusté en fonction des besoins.
    const timer = setTimeout(() => {
      if (location.hash) {
        const anchorId = location.hash.replace("#", "");
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100); // Le délai peut être ajusté si nécessaire

    return () => clearTimeout(timer);
  }, [location.hash]); // Se déclenche uniquement lorsque le hash change
};

export default useAnchor;

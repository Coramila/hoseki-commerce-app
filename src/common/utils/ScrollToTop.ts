import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola para o topo sempre que a rota mudar
    window.scrollTo(0, 0);

    const handlePopState = () => {
      // Força o scroll para o topo ao navegar com "voltar" ou "avançar"
      window.scrollTo(0, 0);
      console.log("Entrouuuuuuuu");
    };

    // Ouve as mudanças no histórico
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;

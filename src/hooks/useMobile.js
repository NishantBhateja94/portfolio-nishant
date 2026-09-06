import { useEffect, useState } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth <= 768);

    updateMobile();

    window.addEventListener("resize", updateMobile);
    
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  return { isMobile };
};

export default useMobile;

import { useEffect, useRef } from "react";
import mobBg from "../../public/mobBg.jpg";
const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (window.VANTA) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 100,
        minWidth: 100,
        scale: 1,
        scaleMobile: 0.3,
        color: 0xff3f81,
        backgroundColor: 0x0d0d0d,
      });

      return () => {
        if (effect && effect.destroy) effect.destroy();
      };
    }
  }, []);

  return (
    <>
      <div
        id="vantaBg"
        ref={vantaRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 1,
        }}
      />
      <img
        id="mobBg"
        src={mobBg}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 1,
        }}
      />
    </>
  );
};

export default VantaBackground;

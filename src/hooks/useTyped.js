import { useEffect, useRef } from "react";
import Typed from "typed.js";
const useTyped = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null); // store the instance to clean it up later

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          "Hi I am Nishant",
          "Hi I am a Developer",
          "Hi I am a Coder",
          "Hi I am an Engineer",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
    }

    return () => {
      typedInstance.current?.destroy(); // clean up
    };
  }, []);
  return typedRef;
};

export default useTyped;

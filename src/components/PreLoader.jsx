import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function PreLoader() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      await animate(
        [
          [scope.current, { x: 0, width: "100%" }],
          [scope.current, { x: "80%", width: "0%" }, { delay: 0.6 }]
        ],
        {
          duration: 2,
          repeat: Infinity,
          repeatDelay: 0.8
        }
      );
    };
    animateLoader();
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <motion.div ref={scope} className="absolute h-full bg-black" />
      <h1 className="m-5 font-sans text-4xl font-bold text-white uppercase whitespace-nowrap mix-blend-difference">
        Counter
      </h1>
    </div>
  );
}

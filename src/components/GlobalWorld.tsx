import { globeConfig, sampleArcs } from "@/constants/constants";
import { World } from "./globe";
import { motion } from "framer-motion";

export const GlobalWorld = () => {
  return (
    <div className="h-full dark:bg-grid-white/[0.2] bg-grid-black/[0.1] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />

      <div className="absolute w-full -bottom-5 h-52 md:h-[30rem] md:top-12 z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            Explore the World with AI Web
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            Embark on a journey across the globe through our interactive and
            customizable platform.
          </p>
        </motion.div>
        <World data={sampleArcs} globeConfig={globeConfig} />;
      </div>
    </div>
  );
};

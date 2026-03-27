"use client";

import { motion } from "framer-motion";
import { useBackgroundMode } from "./BackgroundProvider";

const backgrounds = [
  {
    mode: "morning",
    src: "/background/morning.png",
    label: "MORNING",
    imageClass: "forest-image forest-image-morning",
    overlayClass:
      "bg-[linear-gradient(180deg,rgba(255,248,218,0.14)_0%,rgba(255,251,240,0.04)_42%,rgba(20,16,10,0.18)_100%)]",
  },
  {
    mode: "evening",
    src: "/background/evening.png",
    label: "EVENING",
    imageClass: "forest-image forest-image-evening",
    overlayClass:
      "bg-[linear-gradient(180deg,rgba(255,205,146,0.18)_0%,rgba(164,74,24,0.06)_46%,rgba(15,8,4,0.28)_100%)]",
  },
  {
    mode: "night",
    src: "/background/night.png",
    label: "NIGHT",
    imageClass: "forest-image forest-image-night",
    overlayClass:
      "bg-[linear-gradient(180deg,rgba(8,20,52,0.1)_0%,rgba(5,14,32,0.18)_44%,rgba(2,6,16,0.44)_100%)]",
  },
] as const;

export default function ForestBackground() {
  const { resolvedMode, selectedMode } = useBackgroundMode();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-stone-950">
      {backgrounds.map((background) => {
        const isActive = resolvedMode === background.mode;

        return (
          <motion.div
            key={background.mode}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div
              className={`absolute inset-0 bg-cover bg-no-repeat ${background.imageClass}`}
              style={{ backgroundImage: `url('${background.src}')` }}
            />
            <div className={`absolute inset-0 ${background.overlayClass}`} />
          </motion.div>
        );
      })}

      <div className="absolute right-4 top-24 rounded-full border border-white/35 bg-black/18 px-3 py-2 text-[10px] font-semibold tracking-[0.28em] text-white shadow-[0_10px_32px_rgba(0,0,0,0.25)] sm:right-6 sm:top-6 sm:px-4 sm:text-xs">
        {selectedMode === "auto"
          ? backgrounds.find((background) => background.mode === resolvedMode)?.label
          : resolvedMode.toUpperCase()}
      </div>
    </div>
  );
}

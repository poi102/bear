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
      "bg-[linear-gradient(180deg,rgba(255,248,218,0.2)_0%,rgba(255,251,240,0.08)_42%,rgba(20,16,10,0.14)_100%)]",
  },
  {
    mode: "day",
    src: "/background/evening.png",
    label: "Evening",
    imageClass: "forest-image forest-image-day",
    overlayClass:
      "bg-[linear-gradient(180deg,rgba(255,205,146,0.18)_0%,rgba(164,74,24,0.06)_46%,rgba(15,8,4,0.28)_100%)]",
  },
  {
    mode: "night",
    src: "/background/night.png",
    label: "NIGHT",
    imageClass: "forest-image forest-image-night",
    overlayClass:
      "bg-[linear-gradient(180deg,rgba(18,34,72,0.08)_0%,rgba(10,20,42,0.14)_44%,rgba(4,10,22,0.32)_100%)]",
  },
] as const;

const morningMistLayers = [
  { top: "48%", height: "9rem", opacity: [0.08, 0.18, 0.1], x: ["-3%", "3.5%", "-2%"], duration: 19 },
  { top: "57%", height: "7rem", opacity: [0.12, 0.26, 0.14], x: ["4%", "-3%", "3%"], duration: 16 },
  { top: "66%", height: "8rem", opacity: [0.08, 0.2, 0.1], x: ["-4%", "4%", "-3%"], duration: 21 },
];

const dayMistLayers = [
  { top: "54%", height: "8rem", opacity: [0.05, 0.12, 0.07], x: ["-2%", "2%", "-1%"], duration: 22 },
  { top: "62%", height: "9rem", opacity: [0.08, 0.17, 0.09], x: ["3%", "-2.5%", "2%"], duration: 19 },
  { top: "71%", height: "7rem", opacity: [0.04, 0.1, 0.06], x: ["-2.5%", "2%", "-2%"], duration: 25 },
];

const nightMistLayers = [
  { top: "50%", height: "8rem", opacity: [0.04, 0.1, 0.05], x: ["-2%", "1.5%", "-1.5%"], duration: 22 },
  { top: "60%", height: "10rem", opacity: [0.06, 0.15, 0.08], x: ["2.5%", "-2%", "2%"], duration: 20 },
  { top: "72%", height: "8rem", opacity: [0.03, 0.08, 0.04], x: ["-2%", "2.5%", "-2%"], duration: 26 },
];

function MorningEffects() {
  const lightSpecks = [
    { left: "8%", top: "22%", size: 8, delay: 0, duration: 9.2 },
    { left: "16%", top: "38%", size: 12, delay: 1.2, duration: 11.1 },
    { left: "28%", top: "18%", size: 10, delay: 2.3, duration: 10.4 },
    { left: "40%", top: "32%", size: 7, delay: 0.8, duration: 8.8 },
    { left: "52%", top: "26%", size: 9, delay: 2.7, duration: 10.9 },
    { left: "64%", top: "18%", size: 10, delay: 1.1, duration: 9.7 },
    { left: "74%", top: "34%", size: 11, delay: 1.6, duration: 10.2 },
    { left: "84%", top: "22%", size: 8, delay: 3.1, duration: 11.5 },
    { left: "90%", top: "40%", size: 6, delay: 2.2, duration: 8.6 },
  ];

  return (
    <>
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={`morning-wind-trail-${index}`}
          className="absolute h-0.5 rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,248,224,0.48),transparent)] blur-[1px]"
          style={{
            left: `${4 + index * 22}%`,
            top: `${24 + index * 9}%`,
            width: `${72 + index * 10}px`,
          }}
          animate={{
            x: [0, 32, 64],
            y: [0, -3, 2],
            opacity: [0, 0.34, 0],
            scaleX: [0.9, 1.08, 1.18],
          }}
          transition={{
            duration: 4.8 + index * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.7,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-x-[-18%] top-[18%] h-[14%] rotate-[-8deg] bg-[linear-gradient(90deg,transparent,rgba(255,250,232,0.06),rgba(255,245,214,0.16),rgba(255,250,232,0.08),transparent)] blur-2xl"
        animate={{ x: ["-10%", "16%", "24%", "-8%"], opacity: [0.04, 0.14, 0.22, 0.06], scaleX: [0.94, 1, 1.06, 0.96] }}
        transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-x-[-20%] top-[36%] h-[12%] rotate-[4deg] bg-[linear-gradient(90deg,transparent,rgba(255,247,222,0.04),rgba(255,241,198,0.14),rgba(255,247,222,0.06),transparent)] blur-2xl"
        animate={{ x: ["-16%", "12%", "20%", "-10%"], opacity: [0.02, 0.1, 0.18, 0.04], scaleX: [0.92, 1.02, 1.08, 0.94] }}
        transition={{ duration: 13, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.4 }}
      />

      <motion.div
        className="absolute inset-x-[-8%] top-[-6%] h-[42%] bg-[radial-gradient(circle_at_18%_22%,rgba(255,250,218,0.34),transparent_40%),radial-gradient(circle_at_38%_8%,rgba(255,241,190,0.24),transparent_32%),radial-gradient(circle_at_70%_16%,rgba(255,247,225,0.22),transparent_30%)] blur-2xl"
        animate={{ opacity: [0.4, 0.68, 0.86, 0.54], scale: [1, 1.04, 1.08, 1], x: ["-2%", "0.8%", "2.8%", "-1.2%"], y: ["0%", "1.2%", "-0.8%", "0%"] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[-16%] top-[8%] h-[32%] w-[72%] -rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,247,214,0.08),rgba(255,247,214,0.22),rgba(255,250,236,0.12),transparent)] blur-3xl"
        animate={{ x: ["-8%", "12%", "22%", "-5%"], opacity: [0.12, 0.24, 0.42, 0.16], scaleX: [0.94, 1.02, 1.08, 0.98] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-x-[6%] top-[14%] h-[26%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,251,235,0.2),rgba(255,245,210,0.08)_42%,transparent_72%)] blur-3xl"
        animate={{ opacity: [0.12, 0.24, 0.18], scale: [0.94, 1.06, 0.98], x: ["-1.5%", "1.5%", "0%"], y: ["0%", "2%", "0%"] }}
        transition={{ duration: 17, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {[0, 1, 2].map((index) => (
        <motion.div
          key={`morning-breeze-${index}`}
          className="absolute h-10 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,247,220,0.18),transparent_72%)] blur-xl"
          style={{
            left: `${10 + index * 26}%`,
            top: `${26 + index * 8}%`,
          }}
          animate={{
            x: [0, 24, 48],
            y: [0, -4, 2],
            opacity: [0, 0.18, 0],
            scaleX: [0.8, 1.16, 1.32],
            scaleY: [0.9, 1, 0.92],
          }}
          transition={{
            duration: 6.4 + index * 0.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 1.2,
          }}
        />
      ))}

      {[0, 1, 2].map((index) => (
        <motion.div
          key={`morning-leaf-${index}`}
          className="absolute h-3 w-2 rounded-[100%_0_100%_0] bg-[linear-gradient(180deg,rgba(199,164,82,0.7),rgba(143,118,56,0.54))] shadow-[0_0_8px_rgba(180,150,80,0.18)]"
          style={{
            left: `${14 + index * 24}%`,
            top: `${20 + index * 10}%`,
          }}
          animate={{
            x: [0, 34, 62],
            y: [0, -6, 10],
            rotate: [-12, 18, 42],
            opacity: [0, 0.72, 0],
            scale: [0.84, 1, 0.92],
          }}
          transition={{
            duration: 7.2 + index * 0.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.9 + index * 1.6,
          }}
        />
      ))}

      {morningMistLayers.map((layer, index) => (
        <motion.div
          key={`morning-mist-${index}`}
          className="absolute left-[-12%] right-[-12%] rounded-full bg-white/12 blur-3xl"
          style={{ top: layer.top, height: layer.height }}
          animate={{
            x: layer.x,
            opacity: layer.opacity,
            scaleX: [1, 1.06, 1.14, 1],
            scaleY: [1, 1.04, 0.98, 1],
          }}
          transition={{
            duration: layer.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {lightSpecks.map((speck) => (
        <motion.div
          key={`${speck.left}-${speck.top}`}
          className="absolute rounded-full bg-amber-50/80 shadow-[0_0_24px_rgba(255,245,212,0.58)]"
          style={{
            left: speck.left,
            top: speck.top,
            width: speck.size,
            height: speck.size,
          }}
          animate={{
            y: [0, -22, -38, 6, 0],
            x: [0, 10, -7, 4, 0],
            opacity: [0, 0.56, 1, 0.38, 0],
            scale: [0.84, 1.08, 1.34, 0.98, 0.9],
          }}
          transition={{
            duration: speck.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: speck.delay,
          }}
        />
      ))}
    </>
  );
}

function DayEffects() {
  const leaves = [
    { left: "10%", delay: 0, duration: 13, rotate: -18 },
    { left: "22%", delay: 2.6, duration: 15, rotate: 14 },
    { left: "38%", delay: 1.2, duration: 14, rotate: -10 },
    { left: "54%", delay: 3.8, duration: 16, rotate: 12 },
    { left: "70%", delay: 2.1, duration: 12.5, rotate: -14 },
    { left: "86%", delay: 4.4, duration: 15.5, rotate: 10 },
  ];

  return (
    <>
      <motion.div
        className="absolute inset-x-[-6%] top-[8%] h-[34%] bg-[radial-gradient(circle_at_22%_30%,rgba(255,185,120,0.28),transparent_34%),radial-gradient(circle_at_64%_18%,rgba(255,163,92,0.24),transparent_30%),radial-gradient(circle_at_80%_42%,rgba(255,214,168,0.16),transparent_28%)] blur-3xl"
        animate={{ opacity: [0.26, 0.48, 0.66, 0.34], scale: [1, 1.02, 1.05, 1], x: ["-1.5%", "1%", "2.5%", "-1%"], y: ["0%", "1%", "-0.5%", "0%"] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-x-[-12%] top-[18%] h-[24%] bg-[linear-gradient(90deg,transparent,rgba(255,164,96,0.08),rgba(255,214,168,0.24),rgba(255,156,88,0.14),transparent)] blur-3xl"
        animate={{ x: ["-8%", "10%", "16%", "-6%"], opacity: [0.08, 0.18, 0.34, 0.1], scaleX: [0.95, 1.01, 1.04, 0.98] }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[10%] left-[8%] h-[22%] w-[54%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,176,108,0.12),rgba(255,138,78,0.07)_46%,transparent_72%)] blur-3xl"
        animate={{ opacity: [0.06, 0.14, 0.09], scale: [0.96, 1.04, 0.98], x: ["-1%", "1%", "0%"] }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {dayMistLayers.map((layer, index) => (
        <motion.div
          key={`day-mist-${index}`}
          className="absolute left-[-12%] right-[-12%] rounded-full bg-[rgba(255,185,145,0.1)] blur-3xl"
          style={{ top: layer.top, height: layer.height }}
          animate={{
            x: layer.x,
            opacity: layer.opacity,
            scaleX: [1, 1.05, 1.1, 1],
            scaleY: [1, 1.02, 0.98, 1],
          }}
          transition={{
            duration: layer.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {leaves.map((leaf) => (
        <motion.div
          key={leaf.left}
          className="absolute h-4 w-3 rounded-[100%_0_100%_0] bg-[linear-gradient(180deg,rgba(224,126,60,0.76),rgba(168,82,34,0.64))] shadow-[0_0_12px_rgba(179,96,41,0.18)]"
          style={{ left: leaf.left, top: "-6%" }}
          animate={{
            y: ["0vh", "112vh"],
            x: [0, 16, -10, 12, -4],
            rotate: [leaf.rotate, leaf.rotate + 26, leaf.rotate - 14, leaf.rotate + 18, leaf.rotate + 8],
            opacity: [0, 0.72, 0.88, 0.48, 0],
            scale: [0.94, 1.03, 1.06, 0.96, 0.9],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: leaf.delay,
          }}
        />
      ))}
    </>
  );
}

function NightEffects() {
  const fireflies = [
    { left: "12%", top: "22%", delay: 0.2, size: 7, duration: 9.4 },
    { left: "22%", top: "52%", delay: 1.8, size: 6, duration: 7.8 },
    { left: "34%", top: "34%", delay: 0.9, size: 8, duration: 10.3 },
    { left: "46%", top: "64%", delay: 2.7, size: 7, duration: 8.9 },
    { left: "58%", top: "26%", delay: 1.4, size: 6, duration: 7.4 },
    { left: "68%", top: "56%", delay: 3.1, size: 8, duration: 10.8 },
    { left: "80%", top: "42%", delay: 2.1, size: 6, duration: 8.1 },
    { left: "90%", top: "28%", delay: 4.2, size: 7, duration: 9.7 },
  ];

  return (
    <>
      <motion.div
        className="absolute right-[8%] top-[4%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(240,247,255,0.42),rgba(198,222,255,0.2)_42%,transparent_74%)] blur-2xl"
        animate={{ opacity: [0.24, 0.42, 0.3], scale: [0.96, 1.06, 0.99] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[2%] top-[8%] h-[50%] w-[54%] rotate-18 bg-[linear-gradient(180deg,rgba(226,238,255,0.24),rgba(174,208,255,0.12),transparent_80%)] blur-3xl"
        animate={{ opacity: [0.1, 0.24, 0.14], x: ["1%", "-1%", "0%"], y: ["0%", "2%", "0%"] }}
        transition={{ duration: 17, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-x-[-10%] top-[10%] h-[38%] bg-[radial-gradient(circle_at_24%_30%,rgba(108,176,255,0.2),transparent_32%),radial-gradient(circle_at_72%_22%,rgba(177,220,255,0.18),transparent_28%),radial-gradient(circle_at_54%_48%,rgba(113,170,255,0.14),transparent_26%)] blur-3xl"
        animate={{ opacity: [0.18, 0.3, 0.48, 0.22], scale: [1, 1.02, 1.05, 1], x: ["-1%", "0.5%", "1.8%", "-0.8%"], y: ["0%", "1%", "-0.5%", "0%"] }}
        transition={{ duration: 19, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-x-[4%] top-[14%] h-[24%] rounded-full bg-[radial-gradient(circle,rgba(206,234,255,0.16),transparent_60%)] blur-3xl"
        animate={{ opacity: [0.12, 0.24, 0.34, 0.14], scale: [0.95, 1.02, 1.08, 0.96], y: ["0%", "2%", "4%", "0%"] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[12%] right-[10%] h-[18%] w-[42%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(160,208,255,0.1),rgba(86,148,255,0.06)_44%,transparent_72%)] blur-3xl"
        animate={{ opacity: [0.04, 0.1, 0.06], scale: [0.96, 1.02, 0.98], x: ["1%", "-1%", "0%"] }}
        transition={{ duration: 21, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {nightMistLayers.map((layer, index) => (
        <motion.div
          key={`night-mist-${index}`}
          className="absolute left-[-12%] right-[-12%] rounded-full bg-[rgba(96,145,220,0.1)] blur-3xl"
          style={{ top: layer.top, height: layer.height }}
          animate={{
            x: layer.x,
            opacity: layer.opacity,
            scaleX: [1, 1.05, 1.08, 1],
            scaleY: [1, 1.02, 0.98, 1],
          }}
          transition={{
            duration: layer.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {fireflies.map((firefly) => (
        <motion.div
          key={`${firefly.left}-${firefly.top}`}
          className="absolute rounded-full bg-[#dff7a6] shadow-[0_0_12px_rgba(220,255,170,0.78),0_0_28px_rgba(150,220,255,0.34)]"
          style={{
            left: firefly.left,
            top: firefly.top,
            width: firefly.size,
            height: firefly.size,
          }}
          animate={{
            x: [0, 8, -6, 12, -4, 0],
            y: [0, -10, 6, -14, -4, 0],
            opacity: [0.08, 0.38, 1, 0.26, 0.76, 0.14],
            scale: [0.72, 0.94, 1.28, 0.88, 1.12, 0.78],
          }}
          transition={{
            duration: firefly.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: firefly.delay,
          }}
        />
      ))}
    </>
  );
}

function BackgroundEffects({ mode }: { mode: (typeof backgrounds)[number]["mode"] }) {
  if (mode === "morning") return <MorningEffects />;
  if (mode === "day") return <DayEffects />;
  return <NightEffects />;
}

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
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              className={`absolute inset-0 bg-cover bg-no-repeat ${background.imageClass}`}
              style={{ backgroundImage: `url('${background.src}')` }}
              animate={{
                scale: [1.005, 1.012, 1.02, 1.008],
                x: ["0%", "0.18%", "-0.14%", "0%"],
                y: ["0%", "-0.28%", "0.12%", "0%"],
              }}
              transition={{
                duration: 26,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <div className={`absolute inset-0 ${background.overlayClass}`} />
            <div className="absolute inset-0">
              <BackgroundEffects mode={background.mode} />
            </div>
          </motion.div>
        );
      })}

      <div className="absolute right-4 top-24 rounded-full border border-white/35 bg-black/18 px-3 py-2 text-[10px] font-semibold tracking-[0.28em] text-white shadow-[0_10px_32px_rgba(0,0,0,0.25)] sm:right-6 sm:top-6 sm:px-4 sm:text-xs">
        {selectedMode === "move"
          ? "Move"
          : backgrounds.find((background) => background.mode === resolvedMode)?.label}
      </div>
    </div>
  );
}

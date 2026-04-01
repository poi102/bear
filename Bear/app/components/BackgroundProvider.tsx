"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type TimeMode = "morning" | "day" | "night";
type BackgroundMode = TimeMode | "move";

type BackgroundContextValue = {
  resolvedMode: TimeMode;
  selectedMode: BackgroundMode;
  moveSecondsRemaining: number;
  setSelectedMode: (mode: BackgroundMode) => void;
};

const BackgroundContext = createContext<BackgroundContextValue | null>(null);
const cycleModes: TimeMode[] = ["morning", "day", "night"];
const moveCycleSeconds = 20;

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [selectedMode, setSelectedMode] = useState<BackgroundMode>("morning");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moveSecondsRemaining, setMoveSecondsRemaining] = useState(moveCycleSeconds);

  useEffect(() => {
    if (selectedMode !== "move") {
      setMoveSecondsRemaining(moveCycleSeconds);
      return;
    }

    setCurrentIndex(0);
    setMoveSecondsRemaining(moveCycleSeconds);

    const modeTimer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cycleModes.length);
    }, moveCycleSeconds * 1000);

    const countdownTimer = window.setInterval(() => {
      setMoveSecondsRemaining((prev) => (prev <= 1 ? moveCycleSeconds : prev - 1));
    }, 1000);

    return () => {
      window.clearInterval(modeTimer);
      window.clearInterval(countdownTimer);
    };
  }, [selectedMode]);

  const value = useMemo(
    () => ({
      resolvedMode: selectedMode === "move" ? cycleModes[currentIndex] : selectedMode,
      selectedMode,
      moveSecondsRemaining,
      setSelectedMode,
    }),
    [currentIndex, moveSecondsRemaining, selectedMode]
  );

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundMode() {
  const context = useContext(BackgroundContext);

  if (!context) {
    throw new Error("useBackgroundMode must be used within BackgroundProvider");
  }

  return context;
}

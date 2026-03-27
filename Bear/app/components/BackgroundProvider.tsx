"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type TimeMode = "morning" | "evening" | "night";
type BackgroundMode = "auto" | TimeMode;

type BackgroundContextValue = {
  resolvedMode: TimeMode;
  selectedMode: BackgroundMode;
  setSelectedMode: (mode: BackgroundMode) => void;
};

const BackgroundContext = createContext<BackgroundContextValue | null>(null);

function getTimeModeByHour(hour: number): TimeMode {
  if (hour >= 6 && hour < 16) return "morning";
  if (hour >= 16 && hour < 18) return "evening";
  return "night";
}

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [selectedMode, setSelectedMode] = useState<BackgroundMode>("morning");
  const [autoMode, setAutoMode] = useState<TimeMode>("morning");

  useEffect(() => {
    const updateMode = () => {
      setAutoMode(getTimeModeByHour(new Date().getHours()));
    };

    updateMode();

    const timer = window.setInterval(updateMode, 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  const value = useMemo(
    () => ({
      resolvedMode: selectedMode === "auto" ? autoMode : selectedMode,
      selectedMode,
      setSelectedMode,
    }),
    [autoMode, selectedMode]
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

"use client";

import React, { createContext, ReactNode, useEffect } from "react";
import { useObjectState } from "@/app/hooks/useObjectState";

interface IContext {
  setState: (newState: Partial<IContext>) => void;
  screenSize: string;
}

export const Context = createContext<IContext | null>(null);

function ContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useObjectState<IContext>({
    setState: () => {},
    screenSize: "mobile",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const screen =
          window.innerWidth < 680
            ? "mobile"
            : window.innerWidth < 950
            ? "tablet"
            : "desktop";
        if (screen !== state.screenSize) {
          setState({ screenSize: screen });
        }
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [state.screenSize]);

  return (
    <Context.Provider value={{ setState, screenSize: state.screenSize }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

"use client";

import React, { createContext, ReactNode, useEffect } from "react";
import { useObjectState } from "@/app/hooks/useObjectState";

interface IContext {
  setState: (newState: Partial<IContext>) => void;
}

export const Context = createContext<IContext | null>(null);

function ContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useObjectState<IContext>({
    setState: () => {},
  });

  return <Context.Provider value={{ setState }}>{children}</Context.Provider>;
}

export default ContextProvider;

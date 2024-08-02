"use client"

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface GlobalContextType {
  visible: boolean;
  setvisible: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: GlobalContextType = {
  visible: false,
  setvisible: () => {},
};

export const GlobalContext = createContext<GlobalContextType>(defaultValue);

interface GlobalContextProviderProps {
  children: ReactNode;
}

export default function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [visible, setvisible] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ visible, setvisible }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const mycontext = () => useContext(GlobalContext);

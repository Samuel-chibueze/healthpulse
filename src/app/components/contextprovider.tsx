"use client"

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface GlobalContextType {
  visible: boolean;
  setvisible: Dispatch<SetStateAction<boolean>>;
  doctor: string;
  setdoctor: Dispatch<SetStateAction<string>>;
}

const defaultValue: GlobalContextType = {
  visible: false,
  setvisible: () => {},
  doctor: '',
  setdoctor: () => {},
};

export const GlobalContext = createContext<GlobalContextType>(defaultValue);

interface GlobalContextProviderProps {
  children: ReactNode;
}

export default function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [visible, setvisible] = useState<boolean>(false);
  const [doctor,setdoctor] = useState<string>('')

  return (
    <GlobalContext.Provider value={{ visible, setvisible,setdoctor,doctor }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const mycontext = () => useContext(GlobalContext);

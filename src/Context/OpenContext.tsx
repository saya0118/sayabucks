import React, { useState, createContext } from 'react';

type Props = {
  children: React.ReactNode;
};

type InitialState = {
  action: boolean;
  setAction: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OpenContext = createContext<InitialState | null>(null);

export const OpenProvider: React.VFC<Props> = ({ children }) => {
  const [action, setAction] = useState(false);
  return (
    <OpenContext.Provider value={{ action, setAction }}>
      {children}
    </OpenContext.Provider>
  );
};

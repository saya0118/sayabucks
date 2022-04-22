import React, { useState, createContext } from 'react';

type Props = {
  children: React.ReactNode;
};

type InitialState = {
  action: boolean;
  setAction: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OpenContext = createContext<InitialState | null>(null);

// TODO: rename to something like HeaderHamburgerStatusProvider
export const OpenProvider: React.VFC<Props> = ({ children }) => {
  // TODO: rename `action` to something like:
  // isOpen
  // isHamburgerMenuOpen
  const [action, setAction] = useState(false);
  return (
    <OpenContext.Provider value={{ action, setAction }}>
      {children}
    </OpenContext.Provider>
  );
};

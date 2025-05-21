import { createContext, ReactNode, useState } from 'react';

interface LayoutContextType {
  openServicesModal: () => void;
}

export const LayoutContext = createContext<LayoutContextType>({
  openServicesModal: () => {},
});

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  
  const openServicesModal = () => {
    setShowModal(true);
  };
  
  return (
    <LayoutContext.Provider value={{ openServicesModal }}>
      {children}
    </LayoutContext.Provider>
  );
};

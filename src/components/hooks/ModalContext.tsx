import React, { createContext, useContext, useRef, useState } from "react";
import { WagerData } from "../../global/types";

type ModalOpenContextType = {
  newBetModalOpen: boolean;
  toggleNewBetModalOpen: () => void;
  selectedWager: WagerData | undefined;
  openSelectedWagerModal: (wagerData: WagerData) => void;
  closeSelectedWagerModal: () => void;
};

const defaultContext: ModalOpenContextType = {
  newBetModalOpen: false,
  toggleNewBetModalOpen: () => 0,
  selectedWager: undefined,
  // eslint-disable-next-line
  openSelectedWagerModal: (wagerData: WagerData) => 0,
  closeSelectedWagerModal: () => 0
};

export const ModalContext = createContext(defaultContext);

// eslint-disable-next-line
// @ts-ignore
const ModalContextProvider = ({ children }) => {
  const [newBetModalOpen, setNewBetModalOpen] = useState(false);
  const toggleNewBetModalOpen = () => setNewBetModalOpen(!newBetModalOpen);

  const selectedWager = useRef<WagerData>();
  const openSelectedWagerModal = (wagerData: WagerData) => (selectedWager.current = wagerData);
  const closeSelectedWagerModal = () => (selectedWager.current = undefined);

  return (
    <ModalContext.Provider
      value={{
        newBetModalOpen,
        toggleNewBetModalOpen,
        selectedWager: selectedWager.current,
        openSelectedWagerModal,
        closeSelectedWagerModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);

export default ModalContextProvider;

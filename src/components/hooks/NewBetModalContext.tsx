import React, { createContext, useContext } from "react";

const defaultContext: { modalOpen: boolean; handleModalOpen: () => void } = {
  modalOpen: false,
  handleModalOpen: () => 0
};

export const NewBetModalContext = createContext(defaultContext);

// eslint-disable-next-line
// @ts-ignore
const NewBetModalContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(!modalOpen);

  return (
    <NewBetModalContext.Provider value={{ modalOpen, handleModalOpen }}>
      {children}
    </NewBetModalContext.Provider>
  );
};

export const useNewBetModalContext = () => useContext(NewBetModalContext);

export default NewBetModalContextProvider;

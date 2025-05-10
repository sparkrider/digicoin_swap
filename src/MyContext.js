import React from "react";

// Create a new context
const MyContext = React.createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [modal, setModal] = React.useState(false);
  const [searchPanel, setSearchPanel] = React.useState(false);
  const [tranStatus, setTranStatus] = React.useState(0);
  const [dropModal, setDropModal] = React.useState(false);
  const [currentDropItem, setCurrentDropItem] = React.useState(0);
  return (
    <MyContext.Provider
      value={{
        modal,
        setModal,
        searchPanel,
        setSearchPanel,
        tranStatus,
        setTranStatus,
        dropModal,
        setDropModal,
        currentDropItem,
        setCurrentDropItem,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

// Export the context for use in other components
export default MyContext;

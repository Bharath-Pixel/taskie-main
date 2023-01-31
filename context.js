import React from "react";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [taskItems, setTaskItems] = React.useState([
    {
      category: "Personal",
      title: "Morning Walk",
      timestamp: "Today",
    },
    {
      category: "Work",
      title: "Meet with HR",
      timestamp: "Today",
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        taskItems,
        setTaskItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { useGlobalContext, AppContextProvider };

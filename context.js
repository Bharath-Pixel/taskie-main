import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TASK_ITEMS_KEY = "task_items";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [taskItems, setTaskItems] = React.useState([
    {
      category: "Work",
      title: "Meet with HR",
      timestamp: "Today",
    },
  ]);
  const [totalTasksCompletedToday, completed] = React.useState(0);
  React.useEffect(() => {
    // Load task items from AsyncStorage on initial render
    (async () => {
      const storedTaskItems = await AsyncStorage.getItem(TASK_ITEMS_KEY);
      if (storedTaskItems) {
        setTaskItems(JSON.parse(storedTaskItems));
      }
    })();
  }, []);

  React.useEffect(() => {
    // Save task items to AsyncStorage whenever they change
    (async () => {
      await AsyncStorage.setItem(TASK_ITEMS_KEY, JSON.stringify(taskItems));
    })();
  }, [taskItems]);

  return (
    <AppContext.Provider
      value={{
        taskItems,
        setTaskItems,
        totalTasksCompletedToday, 
        completed
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

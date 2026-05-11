import { createContext, useReducer, useContext } from 'react';
import { TaskReducer, initialState } from '../TaskReducer';

const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook for easy access
export const useTasks = () => useContext(TaskContext);
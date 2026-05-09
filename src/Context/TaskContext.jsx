import React, { createContext, useReducer, useContext } from 'react';
import { TaskReducer, initialState } from '../TaskReducer';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook for easy access
export const useTasks = () => useContext(TaskContext);
import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  tasks: [
    { id: 1, title: "Setup Project", completed: false },
  ],
  filter: 'all'
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(t => 
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        )
      };
    default:
      return state;
  }
};

const TaskContext = createContext();

// Provider Component
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
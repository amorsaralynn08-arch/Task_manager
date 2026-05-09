import React from 'react';
import { Trash2, CheckCircle2, Circle } from 'lucide-react';
import { useTasks } from './TaskContext';

const TaskList = () => {
  const { state, dispatch } = useTasks();
  if (tasks .length === 0){
     
    return (
    <div>
        <h2>Task List</h2>
        <p>No tasks available. Add a task to get started!</p>;
    </div>
    )};

    if( tasks .length > 0){
    return (
    <div>
        <h2>Task List</h2>
            {state.tasks.map(task => (
                <li key={task.id}>
                    <button
                        onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                        {task.completed ? <CheckCircle2 size={12}/> : <Circle size={12}/>}
                        >
                    </button>
                    <span className={`font-medium ${task.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                       {task.title}
                    </span>

                    <button
                        onClick={() => dispatch({ type: 'Delete_TASK', payload: task.id })}
                        >
                        <Trash2 size={8}/>
                    </button>
            
                </li>
                    
                     
             ))
            }                   
    </div>
    )
  }
}
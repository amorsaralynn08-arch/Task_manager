import { Trash2, CheckCircle, Circle, Plus, ListChecks } from 'lucide-react';
import { TaskReducer, initialState } from './TaskReducer';

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(TaskReducer, initialState);
  const [inputValue, setInputValue] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    dispatch({ type: "ADD_TASK", payload: { text: inputValue, category: "Project" } });
    setInputValue("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-3xl shadow-2xl border border-gray-800 text-gray-100 font-sans">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-indigo-500 rounded-xl">
          <ListChecks size={24} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight">SpotHouse Tasks</h2>
      </div>

      {/* Input Section */}
      <form onSubmit={addTask} className="relative mb-8 group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full bg-gray-800 border border-gray-700 rounded-2xl py-4 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-gray-500"
        />
        <button type="submit" className="absolute right-3 top-3 p-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors">
          <Plus size={20} />
        </button>
      </form>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div 
            key={task.id}
            className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
              task.completed 
                ? 'bg-gray-800/40 border-transparent opacity-60' 
                : 'bg-gray-800 border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="flex items-center gap-4 flex-1 cursor-pointer" onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}>
              {task.completed ? (
                <CheckCircle className="text-emerald-400 shrink-0" size={20} />
              ) : (
                <Circle className="text-gray-500 shrink-0" size={20} />
              )}
              <div className="flex flex-col">
                <span className={`text-sm font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}>
                  {task.text}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-bold">
                  {task.category}
                </span>
              </div>
            </div>

            <button 
              onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
              className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

       {/* Footer Stats and Clear Button  */}
      <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500 font-medium">
        <span>{tasks.filter(t => !t.completed).length} items remaining</span>
        <button 
          onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
          className="hover:text-indigo-400 transition-colors"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TaskManager;
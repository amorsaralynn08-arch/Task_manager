import { TaskProvider } from './TaskReducer';

export default function App() {
  return (
    <TaskProvider>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Task Manager</h1>
        <TaskList />
        <TaskManager/>
      </div>
    </TaskProvider>
  );
}
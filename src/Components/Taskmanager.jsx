import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  LayoutDashboard, 
  Calendar, 
  Settings,
  Trash2
} from 'lucide-react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finalize UI Design', priority: 'High', status: 'In Progress', date: 'May 12' },
    { id: 2, title: 'API Documentation', priority: 'Medium', status: 'Pending', date: 'May 15' },
    { id: 3, title: 'Bug Fix: Payment Gateway', priority: 'High', status: 'Completed', date: 'May 10' },
  ]);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-600';
      case 'Medium': return 'bg-orange-100 text-orange-600';
      default: return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        <div className="p-6 font-bold text-2xl text-blue-600 flex items-center gap-2">
          <CheckCircle2 size={28} />
          <span>TaskFlow</span>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
          <NavItem icon={<Calendar size={20} />} label="Upcoming" />
          <NavItem icon={<CheckCircle2 size={20} />} label="Completed" />
          <NavItem icon={<Trash2 size={20} />} label="Trash" />
        </nav>
        <div className="p-4 border-t">
          <NavItem icon={<Settings size={20} />} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b h-16 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search tasks..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Plus size={18} />
            <span>New Task</span>
          </button>
        </header>

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">My Tasks</h1>
            <p className="text-gray-500 text-sm">You have 4 tasks scheduled for today.</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard label="Total Tasks" count={12} color="blue" />
            <StatsCard label="In Progress" count={3} color="orange" />
            <StatsCard label="Completed" count={9} color="green" />
          </div>

          {/* Task List Table */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
              <span className="font-semibold text-gray-700">Active Projects</span>
              <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1 text-sm">
                <Filter size={16} /> Filter
              </button>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-xs uppercase border-b">
                  <th className="px-6 py-4 font-medium">Task Name</th>
                  <th className="px-6 py-4 font-medium">Priority</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Due Date</th>
                  <th className="px-6 py-4 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {tasks.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-6 py-4 flex items-center gap-3">
                      {task.status === 'Completed' ? (
                        <CheckCircle2 className="text-green-500" size={20} />
                      ) : (
                        <Circle className="text-gray-300" size={20} />
                      )}
                      <span className={`font-medium ${task.status === 'Completed' ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                        {task.title}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{task.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-500">{task.date}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

// Sub-components for cleaner code
const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
    active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
  }`}>
    {icon}
    <span className="font-medium">{label}</span>
  </div>
);

const StatsCard = ({ label, count, color }) => {
  const colors = {
    blue: 'border-blue-500 text-blue-600',
    orange: 'border-orange-500 text-orange-600',
    green: 'border-green-500 text-green-600'
  };
  return (
    <div className={`bg-white p-6 rounded-xl border-l-4 shadow-sm ${colors[color]}`}>
      <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{label}</p>
      <p className="text-3xl font-bold mt-1 text-gray-800">{count}</p>
    </div>
  );
};

export default TaskManager;
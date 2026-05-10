import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import TaskForm from './Components/Features/Taskform'
import TaskList from './Components/Features/Tasklist'
import navbar from './Components/Features/navbar'


function App() {
  const [tasks, setTasks] = useState([]);
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <>
<BrowserRouter>
<navbar/>
<Routes>
  <Route path="/" element={<Register/>} />
  <Route path="/login" element={<Login/>}/>
  <Route path="/tasks" element={<TaskList tasks={tasks} onAddTask={handleAddTask} />} />
  <>
  <TaskForm onAddTask={handleAddTask} />
  <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} />
  <task item tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} />
  </>





</Routes>
  
</BrowserRouter>
      
    </>
  )
}

export default App
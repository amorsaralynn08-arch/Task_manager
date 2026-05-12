
import Dashboard from "./components/Dashboard";
import Tasklist from "./components/Tasklist";
function App() {
  return (
    <>
    <Dashboard />
    <Tasklist />
    </>
  )
}
export default App;
=======
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'

import Login from './Pages/Login'
import Register from './Pages/Register'

import Taskform from './Components/Features/Taskform'
import Tasklist from './Components/Features/Tasklist'
import Navbar from './Components/Features/Navbar'

function App() {

  const [tasks, setTasks] = useState([])

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function handleToggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/tasks"
          element={
            <>
              <Taskform onAddTask={handleAddTask} />

              <Tasklist
                tasks={tasks}
                onDelete={handleDeleteTask}
                onToggle={handleToggleTask}
              />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App

import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask({
      id: Date.now(),
      title,
      description,
      completed: false,
    });

    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
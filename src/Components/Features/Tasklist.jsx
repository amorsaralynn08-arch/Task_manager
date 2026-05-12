import { useCallback } from "react";

function TaskItem({ task, onDelete, onToggle }) {

  const handleDelete = useCallback(() => {
    onDelete(task.id);
  }, [onDelete, task.id]);

  const handleToggle = useCallback(() => {
    onToggle(task.id);
  }, [onToggle, task.id]);

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{task.completed ? "Done" : "Pending"}</span>

      <button onClick={handleToggle}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;

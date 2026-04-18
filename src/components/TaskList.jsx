// Import necessary components, react, useContext, useStates
import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// Create a function taskList
function TaskList({ query }) {

  // Set tasks and toggleComplete to global context
  const { tasks, toggleComeplete } = useContext(TaskContext)

  // Filter tasks from searchBar input
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          {/* Line through when task completed */}
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          {/* data-testid should use taskId to find buttons */}
          <button data-testid={task.id} onClick={() => toggleComeplete(task)} >
            {task.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

// Make it globally available
export default TaskList;

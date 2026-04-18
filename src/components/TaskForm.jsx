// Import necessary components, react, useContext, useStates, and useId
import React, { useState, useId, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (taskName.trim() === "") return;
    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>New Task:</label>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

// Make globally available
export default TaskForm;

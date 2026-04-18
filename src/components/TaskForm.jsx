// Import necessary components, react, useContext, useStates, and useId
import React, { useState, useId, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// Create a function for taskForm
function TaskForm() {

  // useState to track values entered for tasks and set it to initially empty
  const [taskName, setTaskName] = useState("");

  // Declare useId to get globally available ids for input and labor
  const inputId = useId();

  // Declare addTask as it is globally available from TaskContext file
  const { addTask } = useContext(TaskContext)

  // Create an inner function to handle addTask on submit and clear it once complete
  function handleSubmit(e) {
    e.preventDefault();
    if (taskName.trim() === "") return;
    addTask(taskName)
    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* inputId provided for id and htmlFor */}
      <label htmlFor={inputId}>New Task:</label>
      <input
        id={inputId}
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

// Make it globally available
export default TaskForm;

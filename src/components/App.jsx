// Import necessary components, react, useContext, useStates, useEffect
import React from "react";
import { TaskProvider } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";

// Create a function that includes everything in TaskProvider for components to be available globally
function App() {
  // No need for states or useEffects anymore
  return (
    <TaskProvider>
      <div>
        <h1>Task Manager</h1>
        <TaskForm />
        <SearchBar />
      </div>
    </TaskProvider>
  );
}

// Make it globally available
export default App;
// Import necessary components, react, useContext, useStates
import React, { useEffect, useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";

/*
The front end is set up, but the application lacks interactivity and state management.
As a user, I should be able to:
Add a new task using a form
useId
Mark tasks as completed
useContext
Search tasks dynamically
useRef

Open the React application in the browser.
npm run dev
Run the included backend.
npm run server
Run test suite.
npm run test
Create a feature branch.
Implement Global State with useContext.
Create a TaskProvider as the global state within TaskContext.jsx.
Replace tasks state in the app with context.
Update the App within main.jsx to be wrapped in TaskProvider.
Mark task
Implement the toggleComplete function within TaskContext.jsx.
Ensure the toggleComplete function edits both db.json and the page.
Call toggleComplete upon clicking the task button.
Submit tasks
Apply useId on form input.
Implement addTask function within TaskContext.jsx.
Call addTask within submit.
Implement the search functionality
Implement useRef on the search input.
Implement filter task context on TaskList.
Push the feature branch and open a PR on GitHub.
Merge to main.
 */
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/tasks')
      .then(r => r.json())
      .then(data => setTasks(data))

  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar />
    </div>
  );
}

// Make it globally available
export default App;

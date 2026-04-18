// Import necessary components, react, useStates, useEffect, and createContext
import React, { createContext, useState, useEffect } from "react"

// Create context object first so TaskProvider can reference it
export const TaskContext = createContext();

// Create a function for TaskProvider
export function TaskProvider({ children }) {
    // Declare tasks initial empty state
    const [tasks, setTasks] = useState([]);

    // Get all tasks from the backend upon initial component mount
    useEffect(() => {
        fetch("http://localhost:6001/tasks")
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error("Error fetching tasks: ", error));
    }, []);

    // Create a function to POST a new task to the backend
    function addTask(title) {
        fetch("http://localhost:6001/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, completed: false })
        })
            .then(response => response.json())
            .then(newTask => setTasks([...tasks, newTask]))
            .catch(error => console.error("Error adding task: ", error));
    }

    // Create a function to PATCH a task on the backend
    function toggleComplete(task) {
        fetch(`http://localhost:6001/tasks/${task.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: !task.completed })
        })
            .then(response => response.json())
            .then(updatedTask => setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t)))
            .catch(error => console.error("Error toggling task: ", error));
    }

    // Provide tasks, addTask, and toggleComplete to all children
    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleComplete }}>
            {children}
        </TaskContext.Provider>
    );
}
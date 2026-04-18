// Import necessary components, react, useStates, and useRef
import React, { useRef, useState } from "react";
import TaskList from "./TaskList";

// Create a function for searchBar 
function SearchBar() {
  // Declare useRef to track input set initially to null
  const searchRef = useRef(null)

  // useState to track values entered on rerendering on searches
  const [query, setQuery] = useState("");

  // Create a inner function to track searches for each entry
  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      {/* use searchRef to handle input and onChange will update based on searches */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={handleSearch}
      />
      {/* To prevent drilling place task here for filtering*/}
      <TaskList query={query} />
    </div>
  );
}

// Make it globally available
export default SearchBar;

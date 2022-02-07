import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setSelectedCategory] = useState("All");

  function handleAddTask(newTask){
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskToDelete){
   setTasks(tasks.filter((task) => task.text !== taskToDelete));
  }

  const tasksToDisplay = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      selectedCategory = {category}
      onSelectedCategory={setSelectedCategory} />
      <NewTaskForm 
      categories={CATEGORIES.filter(category =>category !== "All")}
      onTaskFormSubmit = {handleAddTask}
      />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;

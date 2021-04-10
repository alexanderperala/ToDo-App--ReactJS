import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import ToDoList from "./components/ToDoList/ToDoList";
import "./styles.css";

const App = () => {
  
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    task.id = uuidv4();
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  // Get - Localstorage
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  // Set - Localstorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app-container">
      <h1 className="header-title">Your ToDo-List</h1>
      <NewTaskForm onAddTask={addTask} />
      <ToDoList tasks={tasks} onRemoveTask={removeTask} />
      <span className="task-counter">{tasks.length} tasks remaining</span>
    </div>
  );
};

export default App;

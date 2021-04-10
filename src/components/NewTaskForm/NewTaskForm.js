import { useState } from "react";
import "./NewTaskForm.css";

const NewTaskForm = ({ onAddTask }) => {
  
  const [title, setTitle] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();

    if (title.length < 1) {
      alert("A task name is required");
    } else {
      const task = {
        title,
      };

      onAddTask(task);
      setTitle("");
    };
  };

  return (
    <div className="form-container">
      <form className="form-wrapper" onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Add tasks here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewTaskForm;

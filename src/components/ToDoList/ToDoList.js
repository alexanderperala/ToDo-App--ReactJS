import ToDoCard from "../TodoCard/ToDoCard";
import "./ToDoList.css";

const ToDoList = ({ tasks, onRemoveTask }) => {




  return (
    <div className="list-container">
      {tasks.map((task) => (
        <ToDoCard task={task} key={task.id} onRemoveTask={onRemoveTask} />
      ))}
    </div>
  );
};

export default ToDoList;

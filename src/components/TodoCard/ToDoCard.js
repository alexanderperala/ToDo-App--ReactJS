import "./ToDoCard.css";

const ToDoCard = ({ task, onRemoveTask }) => (
  <div className="card-container">
    <h3 className="task-title"> {task.title}</h3>
    <button className="btn-delete" onClick={() => onRemoveTask(task.id)}>
      Delete
    </button>
  </div>
);

export default ToDoCard;

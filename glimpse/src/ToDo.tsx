import { useState } from "react";
import "./ToDo.css";

function ToDo() {
  const [Todos, setTodos] = useState<boolean>(false);

  const toggleTodos = () => {
    setTodos(!Todos);
  };

  return (
    <div className="todo-container">
      <button className="todo-button" onClick={toggleTodos}>
        To-do List
      </button>
      {Todos && (
        <div className="todo-dropdown">
          <div className="todo-elements">Task 1</div>
          <div className="todo-elements">Task 2</div>
        </div>
      )}
    </div>
  );
}

export default ToDo;

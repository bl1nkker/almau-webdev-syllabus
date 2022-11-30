import ToDoInput from "./components/ToDoInput";
import "./styles/style.css";
import { AiFillDelete, AiFillEdit, AiFillFileAdd } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>ToDo App</h1>
      </nav>
      <div className="todo-container">
        <div className="todo-input">
          <input placeholder="Write your TODO" />
          <button className="btn create">
            <AiFillFileAdd />
          </button>
        </div>
        <div className="todo-list">
          <div className="todo">
            <p>Buy milk</p>
            <div className="todo-actions">
              <button className="btn edit">
                <AiFillEdit />
              </button>
              <button className="btn delete">
                <AiFillDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import BackspaceIcon from "@material-ui/icons/Backspace";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import TodoForm from "./TodoForm"
const Todo = ({ list, completeTask, removeTask, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate} todoFunction="Update" />;
  }

  return (
    <div className="px-3 mt-4">
      {list.map((todo, index) => {
        return (
          <div
            className={`${
              todo.isComplete ? "opacity-40 todo-row" : "todo-row"
            }`}
            key={index}
          >
            <div className="text-white font-bold">{todo.text}</div>
            <div className="space-x-3 text-white">
              <BackspaceIcon
                className="cursor-pointer"
                onClick={() => removeTask(todo.id)}
              />
              <EditIcon
                className="cursor-pointer"
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
              />
              <DoneIcon
                className="cursor-pointer"
                onClick={() => {
                  completeTask(todo.id);
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;

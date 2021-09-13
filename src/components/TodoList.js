import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };
  //! Toggle task inComplete and complete
  const completeTask = (id) => {
    let updateTodos = todos.map((todo) => {
      return todo.id === id
        ? { isComplete: !todo.isComplete, text: todo.text }
        : todo;
    });
    setTodos(updateTodos);
  };
  //! Remove the task using filter method
  const removeTask = (id) => {
    const removeArr = [...todos].filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeArr);
  };
  //! Edit the task
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
  };
  return (
    <div>
      <h3 className="text-white md:text-2xl text-xl font-bold text-center">
        What's the plan for Today?
      </h3>
      <div className="todo-container px-10">
        <TodoForm onSubmit={addTodo} todoFunction="Add Todo" />
      </div>
      <div>
        <Todo
          removeTask={removeTask}
          completeTask={completeTask}
          list={todos}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default TodoList;

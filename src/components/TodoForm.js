import { useState, useEffect, useRef } from "react";
const TodoForm = ({ onSubmit, todoFunction }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus()
  },[])
  //! set the input
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  //! submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex items-center justify-center space-x-2"
      >
        <input
          className="px-3 todo-input py-2 w-4/5"
          placeholder="Type your Task!"
          type="text"
          value={input}
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button">
          {todoFunction}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  return (
    <div className="app h-screen bg-purple-700 p-16 w-full flex items-center">
      <div className="main-container py-5 px-2 bg-black m-auto h-4/5 w-full md:max-w-screen-md rounded-3xl overflow-scroll ">
        <TodoList />
      </div>
    </div>
  );
};

export default App;

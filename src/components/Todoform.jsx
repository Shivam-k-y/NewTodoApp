import { useState } from "react";
import { useTodoContext } from "../contexts/todocontext";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo, deleteAll } = useTodoContext();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({
      title: todo,
      completed: false,
    });
    setTodo("");
  };

  return (
    <>
      <form onSubmit={add} className="flex">
        <input
          type="text"
          placeholder="Write Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
      <div className="flex mt-4 px-70 ">
        <button
          onClick={() => deleteAll()}
          className="rounded-lg px-3 py-1 bg-red-600 text-white shrink-0 hover:bg-red-700 cursor-pointer"
        >
          All Delete
        </button>
      </div>
    </>
  );
}

export default TodoForm;

import { useEffect, useState } from "react";
import { Todoprovider } from "./contexts";
import TodoForm from "./components/Todoform";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      { ...todo, id: Date.now(), completed: false },
      ...prev,
    ]);
  };

  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...todo } : t)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };
  const deleteAll = () => {
    setTodos([]);
  };

  const togglecompleted = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos && todos.length > 0) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Todoprovider
      value={{
        todos,
        addTodo,
        updatedTodo,
        deleteTodo,
        deleteAll,
        togglecompleted,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {" "}
            <TodoForm />{" "}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;

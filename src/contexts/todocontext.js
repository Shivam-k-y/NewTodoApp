import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Learn React",
            completed: false
        },

        
    ],
    addTodo: (todo) => {},
    updatedTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    deleteAll: () => {},
    togglecompleted: (id) => {},
});

export const useTodoContext = () =>  useContext(TodoContext);

export const Todoprovider = TodoContext.Provider;




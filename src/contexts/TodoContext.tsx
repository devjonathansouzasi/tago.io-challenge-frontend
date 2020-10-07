import React, { createContext, useCallback, useEffect, useState } from "react";

import { TODOS_STORAGE_LABEL } from "../constants/config";
import usePersistedState from "../hooks/usePersistedState";

interface TodoItemProps {
  name: string;
  status: "pendent" | "finished";
}

export interface TodoContextProps {
  data: TodoItemProps[];
  addTodoRequest: (name: string) => void;
  deleteTodoRequest: (name: string) => void;
  toggleSatusTodoRequest: (name: string) => void;
}

const TodoContext = createContext<TodoContextProps>({
  data: [],
  addTodoRequest: () => {},
  deleteTodoRequest: () => {},
  toggleSatusTodoRequest: () => {},
});

const TodoProvider: React.FC = ({ children }) => {
  const [data, setData] = usePersistedState<TodoItemProps[]>(
    TODOS_STORAGE_LABEL,
    [],
  );

  const addTodoRequest = (name: string) => {
    const todoExists = data.find(todo => todo.name === name);
    if (todoExists) {
      alert("Tarefa já existe!");
      return;
    }
    setData([{ name, status: "pendent" }, ...data]);
  };
  const deleteTodoRequest = (name: string) => {
    const newData = data.filter(todo => todo.name !== name);
    setData(newData);
  };
  const toggleSatusTodoRequest = (name: string) => {
    const newData = data.map(todo => {
      if (todo.name === name) {
        if (todo?.status === "pendent") {
          todo.status = "finished";
        } else {
          todo.status = "pendent";
        }
      }
      return todo;
    });

    setData(newData);
  };

  return (
    <TodoContext.Provider
      value={{
        data,
        addTodoRequest,
        deleteTodoRequest,
        toggleSatusTodoRequest,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider };

export default TodoContext;

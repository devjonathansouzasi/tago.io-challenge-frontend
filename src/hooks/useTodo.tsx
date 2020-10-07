import { useContext } from "react";

import TodoContext, { TodoContextProps } from "../contexts/TodoContext";

export default function useTodo(): TodoContextProps {
  const ctx = useContext<TodoContextProps>(TodoContext);
  return ctx;
}

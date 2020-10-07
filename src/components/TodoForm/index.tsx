import React, { useState } from "react";

import useTodo from "../../hooks/useTodo";
import { Container, Input, AddButton } from "./styles";

const TodoForm: React.FC = () => {
  const { addTodoRequest } = useTodo();
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (!inputValue) {
      alert("Digite o nome da tarefa!");
      return;
    }
    addTodoRequest(inputValue);
    setInputValue("");
  };

  return (
    <Container>
      <Input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="O que vamos fazer?"
      />
      <AddButton onClick={handleAddTodo}>Adicionar</AddButton>
    </Container>
  );
};

export default TodoForm;

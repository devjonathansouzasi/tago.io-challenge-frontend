import React, { useMemo, useState } from "react";

import Header from "../../components/Header";
import TodoForm from "../../components/TodoForm";
import TodoItem from "../../components/TodoItem";
import useTodo from "../../hooks/useTodo";
import { Container, Body, Content, TodoList } from "./styles";

interface TodoItemProps {
  name: string;
  status: "pendent" | "finished";
}

const Main: React.FC = () => {
  const { data: todos } = useTodo();

  const pendentTodos = useMemo(() => {
    return todos.filter(todo => todo.status === "pendent");
  }, [todos]);
  const finishedTodos = useMemo(() => {
    return todos.filter(todo => todo.status === "finished");
  }, [todos]);

  return (
    <Container>
      <Header />
      <Body>
        <TodoForm />
        <Content>
          <TodoList status="pendent">
            <span>
              <strong>Pendentes</strong>
            </span>
            {pendentTodos.length === 0 && (
              <strong>Nenhuma tarefa adicionada</strong>
            )}
            {pendentTodos.length > 0 &&
              pendentTodos.map(todo => (
                <TodoItem
                  key={todo.name}
                  name={todo.name}
                  status={todo.status}
                />
              ))}
          </TodoList>
          <TodoList status="finished">
            <span>
              <strong>Concluidas</strong>
            </span>
            {finishedTodos.length === 0 && (
              <strong>Nenhuma tarefa concluida</strong>
            )}
            {finishedTodos.length > 0 &&
              finishedTodos.map(todo => (
                <TodoItem
                  key={todo.name}
                  name={todo.name}
                  status={todo.status}
                />
              ))}
          </TodoList>
        </Content>
      </Body>
    </Container>
  );
};

export default Main;

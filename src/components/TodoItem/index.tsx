import React from "react";

import useTodo from "../../hooks/useTodo";
import {
  Container,
  Infos,
  Name,
  Actions,
  ToggleStatusButton,
  DeleteButton,
} from "./styles";

interface Props {
  name: string;
  status: "pendent" | "finished";
}

const TodoItem: React.FC<Props> = ({ name, status }) => {
  const { toggleSatusTodoRequest, deleteTodoRequest } = useTodo();
  return (
    <Container>
      <Infos>
        <Name>{name}</Name>
      </Infos>
      <Actions>
        <ToggleStatusButton onClick={() => toggleSatusTodoRequest(name)}>
          {status === "pendent" ? "Concluir" : "Reiniciar"}
        </ToggleStatusButton>
        {status === "finished" && (
          <DeleteButton onClick={() => deleteTodoRequest(name)}>
            Deletar
          </DeleteButton>
        )}
      </Actions>
    </Container>
  );
};

export default TodoItem;

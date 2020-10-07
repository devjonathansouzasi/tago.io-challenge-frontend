import React from "react";
import Switch from "react-switch";

import useTheme from "../../hooks/useTheme";
import { Container, Title, Content } from "./styles";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Container>
      <Title>Todos.io</Title>
      <Content>
        <span>{theme?.title === "light" ? "Claro" : "Escuro"}</span>
        <Switch
          onChange={() => toggleTheme()}
          checked={theme?.title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor={theme?.colors.common.black}
          offColor={theme?.colors.common.black}
        />
      </Content>
    </Container>
  );
};

export default Header;

import styled from "styled-components";

interface ListProps {
  status: "pendent" | "finished";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 102px;
`;

export const Body = styled.div`
  flex: 1;
  align-self: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1080px) {
    flex-direction: row;
  }
`;
export const TodoList = styled.div<ListProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.paper};
  > span {
    padding: 16px;
    border-radius: 4px 4px 0 0;
    color: ${({ theme }) => theme.colors.common.white};
    background-color: ${({ theme, status }) =>
      status === "pendent" ? theme.colors.error : theme.colors.primary};
  }
  > strong {
    margin: 0 auto;
    padding: 32px;
  }

  @media (min-width: 1080px) {
    & + div {
      margin-left: 32px;
    }
  }
`;

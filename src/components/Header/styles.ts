import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 65px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.strong`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.common.black};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin-right: 8px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.common.black};
  }
`;

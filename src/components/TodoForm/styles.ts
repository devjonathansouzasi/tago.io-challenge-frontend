import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.paper};
  border-radius: 4px;
  height: 60px;
`;

export const Input = styled.input`
  flex: 1;
  align-self: stretch;
  padding: 0 16px;
`;
export const AddButton = styled.button`
  align-self: stretch;
  padding: 16px;
  border-radius: 0 4px 4px 0;
  color: ${({ theme }) => theme.colors.common.black};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    opacity: 0.9;
  }
`;

import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 72px;
  align-items: center;
  padding: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};
  &:last-child {
    border-bottom: none;
  }
`;

export const Infos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.strong`
  font-size: 1.1em;
`;

export const Actions = styled.div`
  display: flex;
  margin-right: 8px;
`;

const buttonStyle = css`
  padding: 8px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.common.white};
  &:hover {
    opacity: 0.9;
  }
`;

export const ToggleStatusButton = styled.button`
  ${buttonStyle};
  border-radius: 4px 0 0 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.common.black};
`;

export const DeleteButton = styled.button`
  ${buttonStyle};
  border-radius: 0 4px 4px 0;
  background-color: ${({ theme }) => theme.colors.error};
`;

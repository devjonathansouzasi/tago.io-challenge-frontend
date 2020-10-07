import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;
}

body, #root{
	background-color: ${({ theme }) => theme.colors.background};
	-webkit-font-smoothing: antialiased;
	transition: background-color 0.2s ease-in;
	overflow-x: hidden
}

#root {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 30px;
}

body, button, input{
	font-size: 16px;
	color: ${({ theme }) => theme.colors.title};
}

*, input, button{
	border: none;
	background: none;
	font-family: "Roboto", sans-serif;
}

button{
	cursor: pointer;
}

`;

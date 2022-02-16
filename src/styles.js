import styled, { createGlobalStyle } from "styled-components";

export const styles = {
  text: { textAlign: "center" },
  pokeshopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  pokeImage: {
    width: "200px",
    height: "200px",
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  pokemon: { margin: "20px" },
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.mainColor};
    background-color: ${({ theme }) => theme.backgroundColor}
  }
`;

export const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
  },
};

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.backgroundColor};
`;
export default styles;

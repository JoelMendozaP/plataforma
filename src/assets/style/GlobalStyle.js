import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary: ${(props) => props.color.primary};
        --secondary: ${(props) => props.color.secondary};
        --text: ${(props) => props.color.text};
        --backgroundSecondary: ${(props) => props.color.backgroundSecondary};
        --background: ${(props) => props.color.background};
        /* --text: ${(props) =>
          props.color.text ? props.color.text : "orange"}; */
    }
`;
export default GlobalStyle;

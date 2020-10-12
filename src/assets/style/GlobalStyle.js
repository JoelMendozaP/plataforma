import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        /* --primary: ${(props) => props.color.primary};
        --secondary: ${(props) => props.color.secondary};
        --text: ${(props) => props.color.text};
        --backgroundSecondary: ${(props) => props.color.backgroundSecondary};
        --background: ${(props) => props.color.background};
        --transition-speed: 600ms; */
        /* --text: ${(props) =>
          props.color.text ? props.color.text : "orange"}; */
        --color1: ${(props) => props.color.color1};
        --color2: ${(props) => props.color.color2};
        --color3: ${(props) => props.color.color3};
        --color4: ${(props) => props.color.color4};
        --color5: ${(props) => props.color.color5};
        --color6: ${(props) => props.color.color6};
        --color7: ${(props) => props.color.color7};
        --color8: ${(props) => props.color.color8};
        --fondo1: ${(props) => props.color.fondo1};
        --fondo2: ${(props) => props.color.fondo2};
    }
`;
export default GlobalStyle;

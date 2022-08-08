import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Fonts from "./components/Fonts";
import { Button, colors, fonts, textStyles } from "./theme";
import Checkbox from "./theme/components/checkBox";

const theme = extendTheme({
  colors,
  fonts,
  textStyles,
  components: {
    Button,
    Checkbox,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

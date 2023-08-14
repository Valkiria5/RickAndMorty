import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/store.js";
import { Box, ChakraProvider, ColorModeScript, extendTheme,CSSReset} from "@chakra-ui/react";
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <ColorModeScript initialColorMode="light" />
      <ChakraProvider>
        <CSSReset />
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
  </BrowserRouter>
);
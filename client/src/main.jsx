import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/store.js";
import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
 
      <ChakraProvider>
    <BrowserRouter>
      <ColorModeScript initialColorMode="light" />
        <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
      </ChakraProvider>
 
);
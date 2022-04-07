import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  DBdataProvider,
  AuthProvider,
  ProductProvider,
} from "./context/index.jsx";
import { MessageHandlingProvider } from "./context/message-handling";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MessageHandlingProvider>
        <AuthProvider>
          <DBdataProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </DBdataProvider>
        </AuthProvider>
      </MessageHandlingProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

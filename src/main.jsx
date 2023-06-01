import React from "react";
import ReactDOM from "react-dom/client";
import App from "./layout/App/App.jsx";
import "./style.scss";

import { DataProvider } from "./context/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);

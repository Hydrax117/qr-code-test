import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MyRoutes } from "./routes/routes.jsx";
import { NavBar } from "./components/navigation/navBar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <MyRoutes />
  </React.StrictMode>
);

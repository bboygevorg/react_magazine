import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Routes from "./routes";
import "../src/assets/styles/global.scss";
import "../src/assets/styles/normalize.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.Fragment>
);

serviceWorker.unregister();

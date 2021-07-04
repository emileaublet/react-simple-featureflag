import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ReactSimpleFlagsProvider } from "./lib";
import flags from "./flags.json";

ReactDOM.render(
  <React.StrictMode>
    <ReactSimpleFlagsProvider flags={flags}>
      <App />
    </ReactSimpleFlagsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(<App/>);

// const Root = () => {
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>;
// };

// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

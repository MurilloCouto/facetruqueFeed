import React from "react";
import ReactDOM from "react-dom/client";

import { posts } from "./MOCK";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App data={posts} />
  </React.StrictMode>
);

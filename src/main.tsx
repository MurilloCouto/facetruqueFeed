import React from "react";
import ReactDOM from "react-dom/client";

import { posts } from "./MOCK";

import { App } from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App data={posts} />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found.");
}
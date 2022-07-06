import React from "react";
import "./App.scss";
import AppRouter from "./router/router";

function App() {
  return (
    <div className="app">
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </div>
  );
}

export default App;

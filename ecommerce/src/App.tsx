import React from "react";
import AppRouter from "./router/router";
import "./App.scss";

function App() {
  return (
    <div className="app">
      {/* <React.StrictMode> */}
        <AppRouter />
      {/* </React.StrictMode> */}
    </div>
  );
}

export default App;

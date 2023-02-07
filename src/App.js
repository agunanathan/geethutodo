import React, { useState } from "react";
import TodoForm from "./container/TodoForm";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <TodoForm />
      </div>
    </div>
  );
};

export default App;

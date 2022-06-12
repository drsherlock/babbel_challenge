import React, { Suspense, lazy } from "react";

import "./App.css";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="app">
      <h3>Babbel Coding Challenge</h3>
      <Suspense fallback={<Loader />}>
        <div>ABC</div>
      </Suspense>
    </div>
  );
}

export default App;

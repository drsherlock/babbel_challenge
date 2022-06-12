import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Loader from "./components/Loader";

const EmailGuesser = lazy(() => import("./containers/EmailGuesser"));

function App() {
  return (
    <div className="app">
      <h3>Babbel Coding Challenge</h3>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<EmailGuesser />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

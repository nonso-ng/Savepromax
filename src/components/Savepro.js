import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Profile from "./Profile";
import Contact from "./Contact";
import Home from "./Home";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => resetErrorBoundary}>Reset App</button>
    </div>
  );
};

const Savepro = () => {
  const MoveTo = useNavigate;

  return (
    <div>
      <NavigationBar />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => MoveTo("/")}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={<div className="error">Page no longer exist!!</div>}
          />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default Savepro;

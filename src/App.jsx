import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading page...</div>}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
}

export default App;

// node_modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
// Pages
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from "./pages/AboutUs";
// layouts
import Navbar from "./layouts/Navbar";
// constants
import Client from "./constants/Client";

const App: React.FC = () => {
  return (
    <QueryClientProvider client={Client}>
      <Router>
        <span className="text-lg underline bg-blend-color-burn">
          hello world
        </span>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;

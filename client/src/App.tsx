import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./layouts/Navbar";
import AboutUs from "./pages/AboutUs";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sass/app.scss";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./layouts/Navbar";
import AboutUs from "./pages/AboutUs";
import "./styles/css/style.css";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowfocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <Router>
        <span className="text-lg underline bg-blend-color-burn">
          hello world
        </span>
        {/* <Navbar /> */}
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

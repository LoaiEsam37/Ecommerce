import { BrowserRouter as Router, Routes, Route } from "react-dom";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sass/app.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <div className="row">
        <Home />
      </div>
    </div>
  );
}

export default App;

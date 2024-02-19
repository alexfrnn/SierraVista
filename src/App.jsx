import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Productivity from "./pages/Productivity/Productivity";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productivity" element={<Productivity />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

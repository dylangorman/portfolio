import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages";
import ContactPage from "./pages/Contact";
import ClientPage from "./pages/ClientPage";
import ProjectPage from "./pages/ProjectPage";
import CVPage from "./pages/CVPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<ContactPage />} exact />
        <Route path="/clients" element={<ClientPage />} exact />
        <Route path="/projects" element={<ProjectPage />} exact />
        <Route path="/cv" element={<CVPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;

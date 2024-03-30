import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepge from "./components/Homepge";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepge />} />
        <Route path="home" element={<Homepge />}>
          {" "}
          <Route path="about" element={<About></About>}></Route>
          <Route path="experience" element={<Experience></Experience>} />
          <Route path="projects" element={<Projects></Projects>} />
          <Route path="contact" element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

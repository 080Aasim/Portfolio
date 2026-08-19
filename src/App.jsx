import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

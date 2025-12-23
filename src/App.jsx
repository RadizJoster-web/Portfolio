import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";

// Import Components
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

function App() {
  // check apakah user di home page
  const [isHomePage, setIsHomePage] = useState(true);
  // Setting aside active for MOBILE view
  const [isAsideActive, setIsAsideActive] = useState(false);

  return (
    <main>
      <Navbar
        isHomePage={isHomePage}
        setIsHomePage={setIsHomePage}
        isAsideActive={isAsideActive}
        setIsAsideActive={setIsAsideActive}
      />
      <Aside isAsideActive={isAsideActive} />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home setIsHomePage={setIsHomePage} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;

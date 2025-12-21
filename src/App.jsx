import { Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

// Import Pages
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Navbar />
      <Aside />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;

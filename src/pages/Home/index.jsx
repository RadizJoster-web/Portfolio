// Import Sections
import Hero from "../../sections/Home/Hero";
import About from "../../sections/Home/About";

import "./home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <About />
    </div>
  );
}

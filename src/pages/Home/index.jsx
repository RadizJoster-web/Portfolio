// Import Sections
import Hero from "../../sections/Home/Hero";
import About from "../../sections/Home/About";
import Project from "../../sections/Home/Project";
import Contact from "../../sections/Home/Contact";

export default function Home({ setIsHomePage }) {
  return (
    <div className="home-page">
      <Hero />
      <About setIsHomePage={setIsHomePage} />
      <Project />
      <Contact />
    </div>
  );
}

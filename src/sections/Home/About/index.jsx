// Import components
import Header from "./Header";
import Model from "./Model";

export default function About({ setIsHomePage }) {
  return (
    <section
      id="about"
      className="section flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 md:gap-0 px-8 md:px-23 lg:px-30 xl:px-50 xl:bg-light"
    >
      <Header setIsHomePage={setIsHomePage} />
      <Model />
    </section>
  );
}

// Import compoenents
import Header from "./Header";
import Hero_model from "./Model";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 md:gap-0 px-8 md:px-23 lg:px-30 xl:px-50 xl:bg-light"
    >
      <Header />
      <Hero_model />
    </section>
  );
}

// Import module
import Button from "../../../template/Button";

export default function Header() {
  return (
    <header className="max-w-4xl text-center md:text-start">
      <div className="relative">
        <h1 className="md:justify-center font-bold text-2xl md:text-5xl lg:text-8xl mb-4 md:mb-8 ">
          My Project;
        </h1>
        <span className="absolute bottom-0 md:-bottom-5 left-20 md:left-0 w-15 md:w-30 h-1 md:h-2 bg-primary rounded-2xl"></span>
        <span className="absolute -bottom-3 md:-bottom-10 left-30 md:left-12 w-12 md:w-30 h-1 md:h-2 bg-primary rounded-2xl"></span>
      </div>

      <p className="mt-8 md:mt-15 text-sm lg:text-lg">
        This is my project from experimental and callab with other
      </p>

      <Button
        text="See All"
        onClick={(e) => alert("Download")}
        className="text-sm lg:text-md bg-primary text-light mt-5 py-3 lg:py-4 px-6 lg:px-10 border-2 border-primary hover:bg-transparent hover:text-primary"
      />
    </header>
  );
}

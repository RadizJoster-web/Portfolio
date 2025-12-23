import { Link } from "react-router-dom";

// Import Data social media
import social_media_list from "../../../assets/social_media";

export default function Header() {
  return (
    <header className="max-w-4xl text-center md:text-start">
      <div className="relative">
        <h1 className="md:justify-center font-bold text-2xl md:text-5xl lg:text-8xl mb-4 md:mb-8 ">
          Hi There;
        </h1>
        <span className="absolute bottom-0 md:-bottom-3 left-20 md:left-0 w-15 md:w-30 h-1 md:h-2 bg-primary rounded-2xl"></span>
        <span className="absolute -bottom-3 md:-bottom-8 left-30 md:left-12 w-12 md:w-30 h-1 md:h-2 bg-primary rounded-2xl"></span>
      </div>

      <p className="mt-8 md:mt-15 text-sm lg:text-lg">
        Feel free to contact me or just said hello
      </p>

      <p className="mt-5 text-sm lg:text-lg">
        <span className="font-bold">Email: </span> radizdirganta0101@gmail.com
      </p>

      <div className="flex justify-center md:justify-start items-center gap-3 mt-3 md:mt-8">
        {social_media_list.map((sm) => (
          <Link
            to={sm.url}
            key={sm.id}
            className="flex justify-center items-center w-10 h-10 lg:w-16 lg:h-16 text-primary rounded-full border border-primary text-lg lg:text-4xl transition-colors duration-300 hover:bg-primary hover:text-light"
          >
            {sm.icon}
          </Link>
        ))}
      </div>
    </header>
  );
}

import hero_model_img from "/images/hero_model.png";

export default function Hero_model() {
  return (
    // Berikan container yang lebarnya fleksibel
    <div className="flex justify-center items-center w-full md:w-auto">
      <img
        src={hero_model_img}
        alt="Hero-Model.png"
        className="
          w-64 h-80 
          
          md:w-80 md:h-auto 
          
          lg:w-100 xl:w-100 
          
          object-cover object-top md:object-contain 
          rounded-br-full rounded-bl-full md:rounded-3xl 
          grayscale hover:grayscale-0 
          transition-all duration-500
        "
      />
    </div>
  );
}

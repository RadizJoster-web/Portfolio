import about_model_img from "/images/about_model.png";

export default function Model() {
  return (
    <div>
      <img
        src={about_model_img}
        alt="About-model.png"
        className=" w-64 h-80 md:w-80 md:h-auto lg:w-100 xl:w-100 object-cover object-top md:object-contain rounded-br-full rounded-bl-full md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-500
        "
      />
    </div>
  );
}

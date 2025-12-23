import contact_model_img from "/images/contact_model.png";

export default function Model() {
  return (
    <div>
      <img
        src={contact_model_img}
        alt="About-model.png"
        className=" w-64 h-80 md:w-60 md:h-90 lg:w-85 lg:h-120 xl:w-80 xl:h-120 object-cover object-top rounded-br-full rounded-bl-full md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-500
        "
      />
    </div>
  );
}

import setup_workspece from "/images/setup_workspece.png";

export default function Model() {
  return (
    <div>
      <img
        src={setup_workspece}
        alt="Setup-workspace.png"
        className=" w-64 h-80 md:w-80 md:h-auto lg:w-100 xl:w-120 object-cover object-top md:object-contain rounded-br-full rounded-bl-full md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-500
        "
      />
    </div>
  );
}

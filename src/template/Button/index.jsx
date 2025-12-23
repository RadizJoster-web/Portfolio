export default function Button({
  text,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-2xl ${className} transition-all duration-300 cursor-pointer`}
    >
      {text}
    </button>
  );
}

import { FaWhatsapp } from "react-icons/fa"; // Icon telepone

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-30 py-5 bg-light backdrop-blur-md">
      <h1 className="text-2xl font-medium">Radiz</h1>

      <span className="flex items-center gap-2 px-5 py-3 bg-primary rounded-2xl text-light">
        <FaWhatsapp className="text-2xl text-green-500" />
        +62 857-8259-9453
      </span>
    </nav>
  );
}

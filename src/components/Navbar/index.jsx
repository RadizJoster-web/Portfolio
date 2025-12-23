import { VscListSelection } from "react-icons/vsc"; // Icon menu
import { FaWhatsapp } from "react-icons/fa"; // Icon telepone

export default function Navbar({
  isHomePage,
  setIsHomePage,
  isAsideActive,
  setIsAsideActive,
}) {
  const handleAsideToggle = () => {
    setIsAsideActive(!isAsideActive);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-8 md:px-12 lg:px-30 py-5 bg-light backdrop-blur-md">
      <div className="flex items-center gap-5">
        <VscListSelection
          className="text-2xl lg:hidden"
          onClick={handleAsideToggle}
        />

        <h1 className="text-2xl font-medium">Radiz</h1>
      </div>

      <span className="flex items-center gap-2 px-5 py-3 bg-primary rounded-2xl text-light">
        <FaWhatsapp className="text-md lg:text-xl text-green-500" />
        <h2 className="text-sm lg:text-md">+62 857-8259-9453</h2>
      </span>
    </nav>
  );
}

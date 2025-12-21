import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import nav_list from "../../assets/aside_list";

export default function Aside() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Mengatur area deteksi agar lebih akurat di tengah layar
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    nav_list.forEach((nav) => {
      const sectionId = nav.link.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed left-0 top-1/2 z-50 -translate-y-1/2 w-20 h-100 flex flex-col justify-center items-center gap-15 bg-primary rounded-tr-3xl rounded-br-3xl py-8">
      {nav_list.map((nav, index) => {
        const sectionId = nav.link.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <HashLink
            smooth
            to={nav.link}
            key={index}
            // Transition ditambahkan agar efek underline muncul halus
            className={`text-3xl transition-all duration-300 pb-1 ${
              isActive
                ? "text-white border-b-2 border-white opacity-100" // Aktif: Underline putih
                : "text-light opacity-50 border-b-2 border-transparent" // Tidak aktif: Underline transparan
            }`}
          >
            {nav.icon}
          </HashLink>
        );
      })}
    </aside>
  );
}

// Import module
import Button from "../../../template/Button";

export default function Header() {
  // Function untuk redirect ke no whatsapp
  const handle_contact = () => {
    const no_telp = "6285782599453";
    window.location.href = `https://wa.me/${no_telp}`;
  };

  return (
    <header className="max-w-4xl text-center md:text-start">
      {/* Nama (Kecil & Berjarak) */}
      <h2 className="uppercase tracking-[0.3em] text-sm lg:text-base mb-4 ">
        Radiz Dirganta
      </h2>

      {/* Title Utama (Besar & Bold) */}
      <h2 className="md:justify-center font-bold text-2xl md:text-5xl lg:text-8xl mb-4 md:mb-8 ">
        Full Stack <span>Developer</span>
      </h2>

      {/* Deskripsi (Lebar terbatas agar nyaman dibaca) */}
      <p className="max-w-lg lg:max-w-xl text-sm md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-10 ">
        Hi! I'm Radiz, A junior fullstack developer specializing in modern Web
        Development with clean design. Passionate about building scalable,
        user-friendly web applications.
      </p>

      {/* Tombol Aksi */}
      <div className="flex justify-center md:justify-start gap-4">
        <Button
          text="Download CV"
          onClick={(e) => alert("Download")}
          className="text-sm lg:text-md bg-primary text-light py-4 px-6 lg:px-10 border-2 border-primary hover:bg-transparent hover:text-primary "
        />

        <Button
          text="Contact Me"
          onClick={() => handle_contact()}
          className="text-sm lg:text-md bg-transparent text-primary py-4 px-6 lg:px-10 border-2 border-primary hover:bg-primary hover:text-light "
        />
      </div>
    </header>
  );
}

import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close menu on mobile after clicking a link
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50  shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="#" className="text-2xl ml-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
           Salma Akther Mim
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <div>
              <a
                href="#home"
                className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </a>
            </div>
            <div>
              <a
                href="#about"
                className={`nav-link ${activeLink === "About" ? "active" : ""}`}
                onClick={() => handleLinkClick("About")}
              >
                About
              </a>
            </div>
            <div>
              <a
                href="#portfolio"
                className={`nav-link ${activeLink === "Portfolio" ? "active" : ""}`}
                onClick={() => handleLinkClick("Portfolio")}
              >
                Portfolio
              </a>
            </div>
            <div>
              <a
                href="#contact"
                className={`nav-link ${activeLink === "Contact" ? "active" : ""}`}
                onClick={() => handleLinkClick("Contact")}
              >
                Contact
              </a>
            </div>
          </div>
          <DarkModeToggle></DarkModeToggle>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white transition">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="flex flex-col items-center space-y-4 py-4">
            <div>
              <a
                href="#home"
                className={`mobile-link ${activeLink === "Home" ? "active" : ""}`}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </a>
            </div>
            <div>
              <a
                href="#about"
                className={`mobile-link ${activeLink === "About" ? "active" : ""}`}
                onClick={() => handleLinkClick("About")}
              >
                About
              </a>
            </div>
            <div>
              <a
                href="#portfolio"
                className={`mobile-link ${activeLink === "Portfolio" ? "active" : ""}`}
                onClick={() => handleLinkClick("Portfolio")}
              >
                Portfolio
              </a>
            </div>
            <div>
              <a
                href="#contact"
                className={`mobile-link ${activeLink === "Contact" ? "active" : ""}`}
                onClick={() => handleLinkClick("Contact")}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

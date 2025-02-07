import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";



const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="px-7 py-1 rounded-full bg-gray-400 ml-3"
      onClick={toggleTheme}
    >
      {theme === "light" ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
};

export default DarkModeToggle;

import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkBtn = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem("theme");

    if (mode === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      className="theme-btn transition-opacity duration-300 hover:opacity-75"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <MdDarkMode className="text-2xl md:text-4xl " />
      ) : (
        <MdLightMode className="text-2xl md:text-4xl " />
      )}
    </div>
  );
};

export default DarkBtn;

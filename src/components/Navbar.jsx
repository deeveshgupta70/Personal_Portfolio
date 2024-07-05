import { useEffect, useState } from "react";
import { RiMenuUnfoldLine, RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import DarkBtn from "./DarkBtn";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);

  const handleSideBar = () => {
    setShow((prev) => !prev);
  };

  const handleClickScroll = (id) => {
    handleSideBar();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 84) {
        setFixed(true);
      } else setFixed(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full h-10 flex bg-slate-50 justify-between p-9 md:p-10 dark:bg-slate-900  dark:border-slate-900 dark:text-slate-400 items-center transition-all duration-75 ${
          fixed ? "fixed top-0 left-0 shadow-lg z-50  " : "relative"
        }`}
      >
        <div className="left">
          <Link to={"/"}>
            <span className="text-3xl font-bold hover:text-blue-700 dark:hover:text-white ">
              DG.
            </span>
          </Link>
        </div>
        <div className="right-desktop md:flex gap-12 hidden">
          <Link to={"/"}>
            <div
              id="home"
              className="nav-link text-lg font-semibold cursor-pointer nav-underline"
              onClick={() => handleClickScroll("hero-section")}
            >
              Home
            </div>
          </Link>

          <div
            id="about"
            className="nav-link text-lg font-semibold cursor-pointer nav-underline"
            onClick={() => handleClickScroll("about-section")}
          >
            About
          </div>
          <div
            id="projects"
            className="nav-link text-lg font-semibold cursor-pointer nav-underline "
            onClick={() => handleClickScroll("project-section")}
          >
            Projects
          </div>
          <div
            id="contact"
            className="nav-link text-lg font-semibold cursor-pointer nav-underline "
            onClick={() => handleClickScroll("contact-section")}
          >
            Contact
          </div>
          <Link to={"/resume"}>
            <div
              id="resume"
              className="nav-link text-lg font-semibold cursor-pointer nav-underline "
            >
              Resume
            </div>
          </Link>
        </div>
        <div
          className={`z-10 transition-transform duration-300 right-mobile dark:bg-slate-900 dark:text-slate-400 md:hidden overflow-hidden bg-[#ffa2b6] fixed left-0 top-0 h-screen w-screen p-4 ${
            show ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mobile-sidebar h-10 p-2 bg-[#ffa2b6]">
            <h2 className="text-3xl font-bold hover:text-blue-700">DG.</h2>
            <button
              className="absolute right-0 top-1 p-4"
              onClick={handleSideBar}
            >
              <RiMenuUnfoldLine className="text-4xl" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-12 mt-16">
            <div
              className="nav-link text-lg font-semibold py-3 hover:bg-gray-200 dark:hover:bg-slate-800 w-full text-center"
              onClick={() => handleClickScroll("hero-section")}
            >
              Home
            </div>
            <div
              className="nav-link text-lg font-semibold py-3 hover:bg-gray-200 dark:hover:bg-slate-800 w-full text-center"
              onClick={() => handleClickScroll("about-section")}
            >
              About
            </div>
            <div
              className="nav-link text-lg font-semibold py-3 hover:bg-gray-200 dark:hover:bg-slate-800 w-full text-center"
              onClick={() => handleClickScroll("project-section")}
            >
              Projects
            </div>
            <div
              className="nav-link text-lg font-semibold py-3 hover:bg-gray-200 dark:hover:bg-slate-800 w-full text-center"
              onClick={() => handleClickScroll("contact-section")}
            >
              Contact
            </div>
            <Link to={"/resume"} className="w-full">
              <div
                className="nav-link text-lg py-3 font-semibold hover:bg-gray-200 dark:hover:bg-slate-800 text-center"
                onClick={handleSideBar}
              >
                Resume
              </div>
            </Link>
          </div>
        </div>
        <span className="block md:hidden" onClick={handleSideBar}>
          <RiMenuUnfoldFill className="text-4xl" />
        </span>
        <div className="hidden md:block">
          <DarkBtn />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

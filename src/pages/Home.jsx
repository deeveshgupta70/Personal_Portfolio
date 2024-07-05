/* eslint-disable react/no-unescaped-entities */
import { FaDev, FaLaptopCode, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import DarkBtn from "../components/DarkBtn";
import config from "../assets/constant";
import ContactForm from "../components/Contact";

const Home = () => {
  return (
    <>
      <section
        id="hero-section"
        className=" overflow-hidden h-[calc(100vh-75.2px)] md:h-[calc(100vh-83.2px)] bg-slate-50 dark:bg-slate-800  px-6 relative max-w-[1800px] mx-auto min-h-[700px] max-h-[1000px]"
      >
        <div className="hero-wrapper w-full h-full flex items-center justify-center flex-col gap-11 ">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Hi I am Deevesh Gupta:
          </h1>
          <p className="text-xl font-semibold w-4/5 text-center">
            Passionate software developer skilled in ReactJS, Redux, and backend
            Node.js. Committed to delivering high-quality user experiences and
            adept at problem-solving
          </p>
          <button className="md:px-10 md:py-2 px-6 py-3  dark:border-0 text-white bg-blue-600 border-2 hover:bg-blue-700 rounded-md md:text-2xl text-xl transition transform hover:-translate-y-1 duration-700">
            Projects
          </button>
        </div>
        <div className="scorll-btn w-6 h-10 bg-transparent absolute bottom-[24px] left-1/2 rounded-3xl overflow-hidden border-2">
          <span className="w-[5px] h-[5px] inline-block bg-black dark:bg-slate-50 rounded-full mx-[8.5px] absolute top-0 animate-[scrolldown_1.5s_linear_infinite] "></span>
        </div>
        <div className="other-profile bg-transparent absolute bottom-1/3 hidden md:left-2 rounded-md md:flex flex-col gap-1">
          <span className="social-media twitter p-2 hover:bg-blue-200 dark:hover:bg-white dark:hover:text-black rounded-md">
            <a href="https://x.com/Deeveshgupta70" target="_blank">
              <FaSquareXTwitter className="text-[40px] " />
            </a>
          </span>
          <span className="social-media linkedIn p-2 hover:bg-blue-200 dark:hover:bg-white dark:hover:text-black rounded-md">
            <a href="http://linkedin.com/in/deevesh-gupta" target="_blank">
              <FaLinkedin className="text-[40px] " />
            </a>
          </span>
          <span className="social-media github p-2 hover:bg-blue-200 dark:hover:bg-white dark:hover:text-black rounded-md">
            <a href="http://github.com/deeveshgupta70" target="_blank">
              <FaSquareGithub className="text-[40px] " />
            </a>
          </span>
          <span className="social-media leetcode p-2 hover:bg-blue-200 dark:hover:bg-white dark:hover:text-black rounded-md">
            <a href="https://dev.to/deevesh" target="_blank">
              <FaDev className="text-[40px] " />
            </a>
          </span>
        </div>
        <div className="theme-toggle absolute -right-1 top-8 bg-slate-400 dark:bg-slate-50 w-10 rounded-l-3xl md:hidden block p-1">
          <DarkBtn />
        </div>
      </section>
      <section
        id="about-section"
        className="about  w-full p-6 max-w-[1800px] mx-auto md:min-h-screen"
      >
        <h1 className="capitalize text-3xl font-bold text-center mt-10 p-2 header">
          About Me
        </h1>
        <p className="text-xl font-semibold text-center p-2 text-slate-700 dark:text-slate-400 mt-10 md:w-1/2 mx-auto">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div className="about-content md:flex justify-center gap-40  mt-16">
          <div className="short-summary flex flex-col gap-7  md:w-[40%] md:pl-6">
            <h3 className="uppercase text-2xl font-bold">Get To Know Me!</h3>
            <p className="text-lg font-medium">
              Hey! It's Deevesh Gupta and I'm a Software Developer located in
              India. I have gained substantial frontend development experience
              through my full-time role at OptiPhoenix Xperts and my internship
              at Daphnis Labs.
            </p>
            <p className="text-lg font-medium">
              Additionally, I have solved over 1500 data structures and
              algorithms problems on LeetCode and GeeksForGeeks, showcasing my
              strong problem-solving skills.
            </p>
            <button className="px-7 py-4 w-32 text-xl bg-blue-600 border-2 dark:border-0 hover:bg-blue-700 text-white font-semibold rounded hover:-translate-y-1 transition-all duration-500">
              Contact
            </button>
          </div>
          <div className="skills mt-5 md:w-[40%] flex flex-col gap-7">
            <h3 className="uppercase font-bold text-2xl ">My skills</h3>
            <div className="skill-wrapper flex gap-2 md:max-w-[400px] flex-wrap ">
              {config.skills.map((item, index) => {
                return (
                  <span
                    className="uppercase px-3 py-1 md:px-4 md:py-2 even:bg-[#9993] odd:bg-[#9997] font-semibold rounded-md text-gray-700 dark:text-gray-100"
                    key={index}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section
        id="experience-section"
        className="experience w-full p-6 max-w-[1800px] mx-auto bg-slate-50 dark:bg-slate-800"
      >
        <h1 className="capitalize text-3xl font-bold text-center mt-10 p-2 header">
          My Experience
        </h1>

        <div className="company-description mt-16">
          {config.prevCompany.map((val, index) => {
            return (
              <div
                className="job-card shadow-md md:flex justify-around items-center p-8 my-8"
                key={index}
              >
                <div className="job-name md:w-[30%] flex flex-col items-center">
                  <div>
                    <FaLaptopCode className="text-9xl" />
                  </div>
                  <h2 className="font-semibold text-2xl text-center">
                    {val.name}
                  </h2>
                  <p className="text-red-700">
                    <span className="from text-lg font-medium text-gray-600 mx-1">
                      {val.duration.start}
                    </span>
                    -
                    <span className="to text-lg font-medium text-gray-600 mx-1">
                      {val.duration.end}
                    </span>
                  </p>
                </div>
                <div className="job-desc md:w-[60%] mt-5 md:mt-0">
                  <h2 className="designation text-2xl font-bold dot-header">
                    {val.designation}
                  </h2>
                  <div className="role pl-8">
                    <ul className="list-disc text-lg">
                      {val.roles?.map((role, i) => {
                        return <li key={i}>{role}</li>;
                      })}
                    </ul>
                    <p className="my-1 text-lg font-bold capitalize">
                      Tech Stack:
                      {val.technology.map((tech, ind) => {
                        return (
                          <span
                            className="text-lg font-medium capitalize p-2 inline-block  text-[#023a3a99] rounded-md dark:text-gray-400"
                            key={ind}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </p>
                    <p className="my-1 text-lg font-bold">
                      Tools:
                      {val.tools.map((tool, ind) => {
                        return (
                          <span
                            className="text-lg font-medium capitalize p-1 inline-block text-[#023a3a99] dark:text-gray-400"
                            key={ind}
                          >
                            {tool}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section
        id="project-section"
        className="projects w-full p-6 max-w-[1800px] mx-auto md:min-h-screen"
      >
        <h1 className="capitalize text-3xl font-bold text-center mt-10 p-2 header">
          Projects
        </h1>
        <div className="projct-wrapper flex flex-wrap gap-10 item-center justify-center mt-16">
          {config?.projects?.map((proj, ind) => {
            return (
              <a href={proj.link} key={ind} target="_blank">
                <div className="project-card relative w-72 md:w-64 overflow-hidden group rounded-md shadow-lg hover:shadow-2xl duration-300">
                  <div className="header-image object-cover">
                    <img
                      src={proj.img}
                      alt="ProjectImage"
                      className="w-full h-[390px] object-cover "
                    />
                  </div>
                  <div className="proj-description absolute -bottom-[150px] left-0 w-full bg-white dark:bg-gray-800 p-4 transition-all duration-300 ease-in-out group-hover:bottom-0">
                    <h2 className="text-lg font-bold ">{proj.title}</h2>
                    <p className="text-sm normal-case ">{proj.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
      <section
        id="contact-section"
        className="contact w-full p-6 max-w-[1800px] mx-auto bg-slate-50 dark:bg-slate-800"
      >
        <h1 className="capitalize text-3xl font-bold text-center mt-10 p-2 header">
          Contact Us
        </h1>
        <ContactForm />
      </section>
    </>
  );
};

export default Home;

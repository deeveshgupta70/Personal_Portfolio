// import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FaDownload } from "react-icons/fa";
import pdf from "../assets/DeeveshGupta.pdf";
import { useEffect, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const resumeLink =
    "https://raw.githubusercontent.com/deeveshgupta70/Personal_Portfolio/main/src/assets/DeeveshGupta.pdf";

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    // default width is 1200px, but this hook sets the width of the resume to be the inner width of whatever screen the user is using
    setWidth(window.innerWidth);
  }, []);

  return (
    <section
      id="hero-section"
      className="overflow-hidden bg-slate-50 dark:bg-slate-900 px-6 relative max-w-[1800px] mx-auto min-h-[700px] max-h-[1000px]"
    >
      <h1 className="capitalize text-5xl font-bold text-center mt-10 p-2">
        Resume
      </h1>

      <div className="cover-letter w-full flex flex-col items-center justify-center mt-10">
        <article className="resume shadow-2xl">
          <div>
            <Document file={pdf}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </div>
        </article>

        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2"
        >
          <button className="flex items-center md:px-5 md:py-2 px-6 py-3  dark:border-0 text-white bg-blue-600 border-2 hover:bg-blue-700 rounded-md md:text-2xl text-xl transition transform hover:-translate-y-1 duration-700">
            Resume
            <span className="ml-2">
              <FaDownload />
            </span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;

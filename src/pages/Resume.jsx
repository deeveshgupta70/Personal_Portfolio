import pdf from "../assets/DeeveshGupta.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useEffect, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const Resume = () => {
  const resumeLink =
    "https://raw.githubusercontent.com/github-name/pdf-renderer/main/src/assets/resume.pdf";

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    // default width is 1200px, but this hook sets the width of the resume to be the inner
    // width of whatever screen the user is using
    setWidth(window.innerWidth);
  }, []);
  return (
    <section
      id="hero-section"
      className=" overflow-hidden h-[calc(100vh-75.2px)] md:h-[calc(100vh-83.2px)] bg-slate-50 dark:bg-slate-900 px-6 relative max-w-[1800px] mx-auto min-h-[700px] max-h-[1000px]"
    >
      <h1 className="capitalize text-5xl font-bold text-center mt-10 p-2 ">
        Resume
      </h1>

      <div className="cover-letter">
        <button href={pdf} target="_blank" className="p-2 ">
          &nbsp;Download Resume
        </button>
        <article className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </article>
      </div>
    </section>
  );
};

export default Resume;

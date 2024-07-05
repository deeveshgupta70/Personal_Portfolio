import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

// Lazy load the Resume component
const Resume = lazy(() => import("./pages/Resume"));

function App() {

  const handleClickScroll = (id) => {
    // handleSideBar();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative overflow-hidden dark:bg-black dark:text-slate-400">
      <Router>
        <Navbar scrollInView={handleClickScroll}/>
        <Routes>
          <Route path="/" element={<Home scrollInView={handleClickScroll} />} />
          <Route
            path="/resume"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Resume />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

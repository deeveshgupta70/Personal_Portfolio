import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

// Lazy load the Resume component
const Resume = lazy(() => import("./pages/Resume"));

function App() {
  return (
    <div className="relative overflow-hidden dark:bg-black dark:text-slate-400">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import JoinSection from "./components/JoinSection";
import PlaceholderSections from "./components/PlaceholderSections";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <JoinSection />
      <PlaceholderSections />
      <Footer />
    </div>
  );
}

export default App;

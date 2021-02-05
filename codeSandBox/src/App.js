import react from "react";
import Navigation from "./Navigation";
import MastHead from "./MastHead";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import CopyRight from "./CopyRight";

const App = () => {
  return (
    <div>
      <Navigation />
      <MastHead />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default App;

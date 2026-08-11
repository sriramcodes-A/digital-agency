import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import TrustedBrands from "./components/TrustedBrands";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedBrands/>
        <Services />
        <About />
        <Stats />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;
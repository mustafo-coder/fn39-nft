import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tranding from "./components/Tranding";
import Creators from "./components/Creators";
import Categories from "./components/Categories";
import Discover from "./components/Discover";
import Magic from "./components/Magic";
import HowItWorks from "./components/HowItWorks";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <h1>salom</h1>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <Tranding />
        <Creators />
        <Categories />
        <Discover />
        <Magic />
        <HowItWorks />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
};

export default App;

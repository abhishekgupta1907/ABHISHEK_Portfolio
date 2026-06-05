import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import ScrollTop from "../Components/ScrollTop";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
            <ScrollTop />
        </>
    );
};

export default Home;

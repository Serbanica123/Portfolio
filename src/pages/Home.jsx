import { useEffect } from "react";
import Hero from "../components/sections/Hero";
import Highlights from "../components/sections/Highlights";
import Work from "../components/sections/Work";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import About from "../components/sections/About";
import BeyondWork from "../components/sections/BeyondWork";
import Contact from "../components/sections/Contact";
import { profile } from "../data/profile";

// The order of the sections on the home page.
export default function Home() {
    useEffect(() => {
        document.title = `${profile.name} — Portfolio`;
    }, []);

    return (
        <>
            <Hero />
            <Highlights />
            <Work />
            <Skills />
            <Experience />
            <About />
            <BeyondWork />
            <Contact />
        </>
    );
}

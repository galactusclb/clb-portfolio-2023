import { FC } from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import ContactSection from "../components/contact/ContactSection";
import HorizontalScrollingSection from "@features/landing/full-page/components/horizontal-scrolling-section/HorizontalScrollingSection";

const PlutoPageWrapper: FC = () => {
    return (
        <div className="relative w-full bg-red-400 h-fit">
            <Header />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            {/* <HorizontalScrollingSection/> */}
            <ContactSection />
        </div>
    )
}

export default PlutoPageWrapper;
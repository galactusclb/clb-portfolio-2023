import { FC } from 'react'
import Header from '../components/header/Header';
import HeroSection from '../components/hero/HeroSection';
import AboutSection from '../components/about/AboutSection';
import BannerSection from '../components/banner-section/BannerSection';
import WorkSection from '../components/works/WorkSection';
import ProjectSection from '../components/projects/ProjectSection';
import ContactSection from '../components/contact/ContactSection';
import PageLayout from '@components/shared/page-layout/PageLayout';

const HomeContainer: FC = () => {
    return (
        // <div className='relative w-full min-h-screen bg-[#F7F828]'>
        <PageLayout>
            <div className='relative w-full min-h-screen bg-[#F7F8F8] text-[#3D4343] overflow-y-auto overflow-x-hidden'>
                <Header />
                <HeroSection />
                <AboutSection />
                <BannerSection />
                <WorkSection />
                <ProjectSection />
                <ContactSection />
            </div>
        </PageLayout>
    )
}

export default HomeContainer;
import { motion } from "framer-motion";
import { FC } from "react";

import Header from "@components/shared/landing/header/Header";
import BannerSection from "@features/landing/home/components/banner-section/BannerSection";
import WorksList from "../components/WorksList";
import HeroSection from "../components/hero/HeroSection";

interface WorksContainerProps {}

const WorksContainer: FC<WorksContainerProps> = ({}) => {
  return (
    <motion.div
      // initial="initial"
      // animate="enter"
      // exit="exit"
      // variants={zoom}
      className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden rounded-3xl text-[#3D4343]"
    >
      <Header />
      <HeroSection />
      <BannerSection />
      <WorksList />
    </motion.div>
  );
};

export default WorksContainer;

"use client";
import dynamic from "next/dynamic";

// Dynamic imports for your components
const Banner = dynamic(() => import("@/components/Banner"));
const Discover = dynamic(() => import("@/components/Discover"));
const InAction = dynamic(() => import("@/components/InAction"));
const NavBar = dynamic(() => import("@/components/NavBar"));
const PerfectMatch = dynamic(() => import("@/components/PerfectMatch"));
const Platform = dynamic(() => import("@/components/Platform"));
const Success = dynamic(() => import("@/components/Success"));

const HomePage = () => {
  return (
    <div className="max-w-[1440px] mx-auto ]">
      <NavBar />
      <Banner />
      <Discover />
      <PerfectMatch />
      <Success />
      <Platform />
      <InAction />
    </div>
  );
};

export default HomePage;

import Banner from "@/components/Banner";
import Discover from "@/components/Discover";
import InAction from "@/components/InAction";
import NavBar from "@/components/NavBar";
import PerfectMatch from "@/components/PerfectMatch";
import Platform from "@/components/Platform";
import Success from "@/components/Success";
import React from "react";

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

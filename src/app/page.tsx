import Banner from "@/components/Banner";
import Discover from "@/components/Discover";
import NavBar from "@/components/NavBar";
import PerfectMatch from "@/components/PerfectMatch";
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
    </div>
  );
};

export default HomePage;

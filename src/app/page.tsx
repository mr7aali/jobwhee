import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <NavBar />
      <Banner />
    </div>
  );
};

export default HomePage;

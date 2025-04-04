import React from "react";
import SectionTitle from "../ui/SectionTitle";
import Card from "./Card";

const Discover = () => {
  return (
    <div className="py-6">
      <SectionTitle title="discover" />
      <div className="flex mt-10 gap-5">
        {[0, 1, 2, 3, 4, 5].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Discover;

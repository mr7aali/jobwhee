import React from "react";
import SectionTitle from "../ui/SectionTitle";
import Card from "./Card";
import { dicoverMenuData } from "./data";
import DirectionButtionContainer from "../ui/button/DirectionButtionContainer";

const Discover = () => {
  return (
    <div className="mt-32">
      <SectionTitle title="discover" />
      <div className="flex mt-[70px] gap-5">
        {dicoverMenuData.map((Item, index) => (
          <Card key={index} imageSrc={Item.imageSrc} title={Item.title} />
        ))}
      </div>
      <div className="mt-7">
        <DirectionButtionContainer />
      </div>
    </div>
  );
};

export default Discover;

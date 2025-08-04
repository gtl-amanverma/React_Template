import React from "react";
import { Carousel as CustomCarousel } from "./ui";

interface TCarouselItemType {
  component: React.ReactNode;
  src: string;
}

type props = {
  items: Array<TCarouselItemType>;
};

const Carousel = ({ ...props }: props) => {
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <CustomCarousel slides={props.items} />
    </div>
  );
};

export default Carousel;

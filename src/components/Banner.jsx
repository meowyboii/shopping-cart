import banner from "../assets/banner.jpg";

import "../styles/Banner.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export const Banner = () => {
  return (
    <header>
      <Carousel
        autoPlay={true}
        showArrows={false}
        centerMode={true}
        centerSlidePercentage={104}
        dynamicHeight={false}
      >
        <div>
          <img src={banner} />
        </div>
        <div>
          <img src={banner} />
        </div>
        <div>
          <img src={banner} />
        </div>
      </Carousel>
    </header>
  );
};

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselData } from "../../../assets/data/data";

const HeroSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative h-screen w-full">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        transitionDuration={2000}
        showDots={false}
        arrows
      >
        {carouselData?.item.map((item) => (
          <div key={item.id} className="relative h-screen w-full">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:text-start bg-black bg-opacity-40">
              <div className="w-[95%] md:w-[70%]">
                <div className="w-[95%] md:w-[55%]">
                  <h2 className="text-white text-4xl md:text-5xl font-bold mt-4 font-secondary">
                    {item.title}
                  </h2>
                  <p className="text-white mt-2 text-sm py-3 ">{item.text}</p>
                  <button className="mt-4 px-6 py-2 bg-white text-black text-sm uppercase">
                    {item.btn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;

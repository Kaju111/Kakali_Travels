import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FacilityCard } from "../../../components/cards/FacilityCard";
import { facilitiesData } from "../../../assets/data/data";

const Facilities = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-0">
      <h1 className="font-secondary text-3xl text-center sm:text-left">
        Amenities & Facilities
      </h1>
      <section className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-4 sm:mt-6">
        <div className="w-full sm:w-3/4 lg:w-2/3">
          <h1 className="font-primary text-xs sm:text-sm w-full sm:w-[90%] py-5 text-center sm:text-left">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
          </h1>

        </div>
        <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-4 sm:mt-0">
          <button className="uppercase font-primary text-xs font-semibold bg-gray-700 text-white py-2 px-6">
            view all
          </button>
        </div>
      </section>
      <section>
        <Carousel
          responsive={ responsive }
          arrows
          autoPlay
          autoPlaySpeed={ 5000 }
          infinite
          draggable
          swipeable
          keyBoardControl
          pauseOnHover
          showDots={ false }
          slidesToSlide={ 1 }
        >
          { facilitiesData.item.map((item) => (
            <FacilityCard key={ item.id } item={ item } />
          )) }
        </Carousel>
      </section>
    </div>
  );
};

export default Facilities;

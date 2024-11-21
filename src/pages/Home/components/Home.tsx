import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";


interface CarouselItem {
  id: number;
  title: string;
  image_path: string;
  sub_title: string;
  imageUrl: string;
}


const HeroSection = () => {
  const [carouselData, setCarouselData] = useState<CarouselItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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



  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/slider-images`
        );
        console.log("API Response:", response.data);
        setCarouselData(response.data); // Assuming API response is the correct structure
        setLoading(false);
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to fetch carousel data");
        setLoading(false);
      }
    };

    fetchCarouselData();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;



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
        {carouselData?.map((item) => (
          <div key={item.id} className="relative h-screen w-full">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:text-start bg-black bg-opacity-40">
              <div className="w-[95%] md:w-[70%]">
                <div className="w-[95%] md:w-[55%]">
                  <h2 className="text-white text-4xl md:text-5xl font-bold mt-4 font-secondary">
                    {item.title}
                  </h2>
                  <p className="text-white mt-2 text-sm py-3 ">{item.sub_title}</p>
                  {/* <button className="mt-4 px-6 py-2 bg-white text-black text-sm uppercase">
                    {item.btn}
                  </button> */}
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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SliderImages } from "../../../utils/types";
import { useQuery } from "@tanstack/react-query";
import { fetchSliderImage } from "../../../api/images-api";
import { QUERY_KEYS } from "../../../utils/queryKeys";
import Loader from "../../../components/common/loader/Loader";

const HeroSection = () => {
  // const [carouselData, setCarouselData] = useState<SliderImages[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

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



  // useEffect(() => {
  //   const fetchCarouselData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_API_URL}/api/slider-images`
  //       );
  //       setCarouselData(response.data); // Assuming API response is the correct structure
  //       setLoading(false);
  //       //if api data is empty
  //       if (response.data.length === 0) {
  //         setCarouselData(staticCarouselData.item);
  //       }
  //     } catch (err) {
  //       console.error("API Error:", err);
  //       setError("Failed to fetch carousel data");
  //       setLoading(false);
  //     }
  //   };

  //   fetchCarouselData();
  // }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: QUERY_KEYS.SLIDER_IMAGES,
    queryFn: fetchSliderImage,
  });

  if (isLoading) return <div className="text-center mt-10"><Loader /></div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Please Refresh The Page</div>;

  return (
    <div className="relative h-screen w-full z-10">
      <Carousel
        responsive={ responsive }
        infinite
        autoPlay
        autoPlaySpeed={ 3000 }
        transitionDuration={ 2000 }
        showDots={ false }
        arrows
      >
        { data?.map((item: SliderImages) => (
          <div key={ item.id } className="relative h-screen w-full">
            <img
              src={ item.image_path }
              alt={ item.title }
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:text-start bg-black bg-opacity-40">
              <div className="w-[95%] md:w-[70%]">
                <div className="w-[95%] md:w-[55%]">
                  <h2 className="text-white text-4xl md:text-5xl font-bold mt-4 font-secondary">
                    { item.title }
                  </h2>
                  <p className="text-white mt-2 text-sm py-3 ">{ item.sub_title }</p>
                  <button className="mt-4 px-6 py-2 bg-white text-black text-sm uppercase">
                    {/* {item.btn} */ }
                    Book Your Journey Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )) }
      </Carousel>
    </div>
  );
};

export default HeroSection;

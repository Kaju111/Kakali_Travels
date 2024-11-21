import ImageGallery from '../../../components/ImageGallery';
import { useEffect, useState } from "react"
import axios from "axios"

interface CarouselItem {
  id: number;
  title: string;
  image_path: string;
  sub_title: string;
  imageUrl: string;
}


const Gallery: React.FC = () => {

  const [galleryData, setGalleryData] = useState<CarouselItem[]>([]);


  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/gallery-images`
        );
        console.log("API Response:", response.data);
        setGalleryData(response.data); // Assuming API response is the correct structure
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchGalleryData();
  }, []);



  return (
    <div className="max-w-6xl mx-auto py-16">
      <section className="flex justify-center items-center flex-col">
        <h1 className="font-secondary text-3xl">Our Inside Pictures</h1>
        <h1 className="font-primary text-xs sm:text-sm w-full sm:w-[90%] py-5 text-center">
          Take a look at some pretty pictures captured in and around our premises
        </h1>
      </section>

      <section>
        <div className="max-w-screen-2xl mx-auto px-4 py-8 lg:py-16 bg-white">
          <ImageGallery galleryData={galleryData} />
        </div>
      </section>
    </div>
  );
};

export default Gallery;

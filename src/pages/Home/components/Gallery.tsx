import hero1 from "../../../assets/images/galleryImage/image9.jpg"
import hero2 from "../../../assets/images/galleryImage/image6.jpg"
import hero3 from "../../../assets/images/galleryImage/image10.webp"
import hero4 from "../../../assets/images/galleryImage/image5.jpg"
import hero5 from "../../../assets/images/galleryImage/image7.jpg"
import hero6 from "../../../assets/images/galleryImage/image8.jpg"
import ImageGallery from '../../../components/ImageGallery';

const mainImage = [{
  src: hero1,
  alt: 'Main facility image',
},
{
  src: hero2,
  alt: 'Main facility image',
},
]

const smallImages = [
  {
    src: hero3,
    alt: 'Facility small image 1',
  },
  {
    src: hero4,
    alt: 'Facility small image 2',
  },
  {
    src: hero5,
    alt: 'Facility small image 3',
  },
  {
    src: hero6,
    alt: 'Facility small image 4',
  },
  {
    src: hero1,
    alt: 'Facility small image 5',
  },
  {
    src: hero4,
    alt: 'Facility small image 6',
  },
  {
    src: hero3,
    alt: 'Facility small image 7',
  },
  {
    src: hero5,
    alt: 'Facility small image 8',
  },
  {
    src: hero6,
    alt: 'Facility small image 8',
  },
];

const Gallery: React.FC = () => {
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
          <ImageGallery mainImages={ mainImage } smallImages={ smallImages } />
        </div>
      </section>
    </div>
  );
};

export default Gallery;

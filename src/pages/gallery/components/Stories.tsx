import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../assets/images/galleryImage/image10.webp";
import img2 from "../../../assets/images/galleryImage/image5.jpg";
import img3 from "../../../assets/images/galleryImage/image6.jpg";
import img4 from "../../../assets/images/galleryImage/image7.jpg";
import img5 from "../../../assets/images/galleryImage/image8.jpg";
import img6 from "../../../assets/images/galleryImage/image9.jpg";

const storisData = [
    {
        id: 1,
        imgSrc: img1,
        alt: "sq-sample27",
        description: "I say, if your knees aren't green by the end of the day.",
        date: "12 Nov 2017",
        title: "Holiday",
    },
    {
        id: 2,
        imgSrc: img2,
        alt: "sq-sample31",
        description: "The inside of my head was exploding with fireworks.",
        date: "12 Nov 2017",
        title: "Holiday",
    },
    {
        id: 3,
        imgSrc: img3,
        alt: "sq-sample32",
        description: "That's the difference between me and the rest phoria!",
        date: "12 Nov 2017",
        title: "Holiday",
    },
    {
        id: 4,
        imgSrc: img4,
        alt: "sq-sample27",
        description: "I say, if your knees aren't green by the end of the day.",
        date: "12 Nov 2017",
        title: "Holiday",
    },
    {
        id: 5,
        imgSrc: img5,
        alt: "sq-sample31",
        description: "The inside of my head was exploding with fireworks.",
        date: "12 Nov 2017",
        title: "Holiday",
    },
    {
        id: 6,
        imgSrc: img6,
        alt: "sq-sample32",
        description: "That's the difference between me and the rest of the world.",
        date: "12 Nov 2017",
        title: "Holiday",
    },
];

const Stories = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <div className="max-w-6xl m-auto px-4">
            <h1 className="font-secondary text-3xl mt-11 pb-3 text-center">Content</h1>
            <h2 className="font-primary text-xl text-center">
                Content... Content... Content... Content... Content...
            </h2>

            <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} className="mt-6">
                {storisData.map((story) => (
                    <div
                        key={story.id}
                        className=""
                    >
                        <Link to="" className="block">
                            <div className="relative h-[400px] w-[94%] overflow-hidden">
                                <img
                                    src={story.imgSrc}
                                    alt={story.alt}
                                    className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="w-[94%] absolute inset-0 bg-gradient-to-b from-transparent to-black/60">
                                <div className="absolute bottom-0 p-6 text-white space-y-6">
                                    <div className="flex items-center gap-4 text-sm">
                                        <div className="flex items-center gap-1">
                                            <h1 className="h-[6px] w-[6px] rounded-full bg-white"></h1> <span>{story.date}</span>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <h1 className="h-[6px] w-[6px] rounded-full bg-white"></h1> <span>{story.title}</span>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold">
                                        {story.description}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Stories;

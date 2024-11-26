import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "@tanstack/react-query";
import { fetchGalleryImages } from "../../../api/images-api";
import { QUERY_KEYS } from "../../../utils/queryKeys";
import Loader from "../../../components/common/loader/Loader";
import { GalleryStories } from "../../../utils/types";
import { formatDate } from "../../../utils/dateUtils";

// const storisData = [
//     {
//         id: 1,
//         imgSrc: img1,
//         alt: "sq-sample27",
//         description: "I say, if your knees aren't green by the end of the day.",
//         date: "12 Nov 2017",
//         title: "Holiday",
//     },
//     {
//         id: 2,
//         imgSrc: img2,
//         alt: "sq-sample31",
//         description: "The inside of my head was exploding with fireworks.",
//         date: "12 Nov 2017",
//         title: "Holiday",
//     },
//     {
//         id: 3,
//         imgSrc: img3,
//         alt: "sq-sample32",
//         description: "That's the difference between me and the rest phoria!",
//         date: "12 Nov 2017",
//         title: "Holiday",
//     },
//     {
//         id: 4,
//         imgSrc: img4,
//         alt: "sq-sample27",
//         description: "I say, if your knees aren't green by the end of the day.",
//         date: "12 Nov 2017",
//         title: "Holiday",
//     },
//     {
//         id: 5,
//         imgSrc: img5,
//         alt: "sq-sample31",
//         description: "The inside of my head was exploding with fireworks.",
//         date: "12 Nov 2017",
//         title: "Holiday",
//     },
//     {
//         id: 6,
//         imgSrc: img6,
//         alt: "sq-sample32",
//         description: "That's the difference between me and the rest of the world.",
//         date: "12 Nov 2017",
//         title: "Holiday",
//     },
// ];

const Stories = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: QUERY_KEYS.GALLERY_IMAGES,
        queryFn: fetchGalleryImages,
    })

    if (isLoading) return <div className="text-center mt-10"><Loader /></div>
    if (isError) return <div className="text-center mt-10 text-red-500">Please Refresh The Page</div>;

    return (
        <div className="max-w-6xl m-auto px-4">
            <h1 className="font-secondary text-3xl mt-11 pb-3 text-center">Travel Inspiration Starts Here</h1>
            <h2 className="font-primary text-xl text-center">
                Stay inspired with our latest posts! From expert tips and hidden gems to exciting
                travel itineraries, we bring you fresh content to help you plan your perfect gateway.
            </h2>

            <Carousel responsive={ responsive } infinite autoPlay autoPlaySpeed={ 3000 } className="mt-6">
                { data?.map((story: GalleryStories) => (
                    <div
                        key={ story.id }
                        className=""
                    >
                        <Link to="" className="block">
                            <div className="relative h-[400px] w-[94%] overflow-hidden rounded-md">
                                <img
                                    src={ story.image_path }
                                    alt={ story.title }
                                    className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="w-[94%] absolute inset-0 bg-gradient-to-b from-transparent to-black/60">
                                <div className="absolute bottom-0 p-6 text-white space-y-6">
                                    <div className="flex items-center gap-4 text-sm">
                                        <div className="flex items-center gap-1">
                                            <h1 className="h-[6px] w-[6px] rounded-full bg-white"></h1> <span>{ formatDate(story.created_at) }</span>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <h1 className="h-[6px] w-[6px] rounded-full bg-white"></h1> <span>{ story.category }</span>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold">
                                        { story.title }
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                )) }
            </Carousel>
        </div>
    );
};

export default Stories;

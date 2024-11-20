import React from "react";
import Img1 from "../../../assets/images/packages/desnination/Destination1.webp";
import Img2 from "../../../assets/images/packages/desnination/Destination2.jpg";
import Img3 from "../../../assets/images/packages/desnination/Destination3.webp";
import Img4 from "../../../assets/images/packages/desnination/Destination4.jpg";
import Img5 from "../../../assets/images/packages/desnination/Destination5.jpg";
import Img6 from "../../../assets/images/packages/desnination/Destination6.jpg";

// Define the card data
const destinationsData = [
    {
        id: 1,
        imgSrc: Img1,
        alt: "sq-sample27",
        description:
            "I say, if your knees aren't green by the end of the day, you ought to seriously re-examine your life.",
        title: "Tezpur",
    },
    {
        id: 2,
        imgSrc: Img2,
        alt: "sq-sample31",
        description:
            "The inside of my head was exploding with fireworks. Fortunately, my last thought turned out the lights when it left.",
        title: "Nagaon",
    },
    {
        id: 3,
        imgSrc: Img3,
        alt: "sq-sample32",
        description:
            "That's the difference between me and the rest of the world! Happiness isn't good enough for me! I demand euphoria!",
        title: "Kaziranga",
    },
    {
        id: 4,
        imgSrc: Img4,
        alt: "sq-sample27",
        description:
            "I say, if your knees aren't green by the end of the day, you ought to seriously re-examine your life.",
        title: "Majuli",
    },
    {
        id: 5,
        imgSrc: Img5,
        alt: "sq-sample31",
        description:
            "The inside of my head was exploding with fireworks. Fortunately, my last thought turned out the lights when it left.",
        title: "Shillong",
    },
    {
        id: 6,
        imgSrc: Img6,
        alt: "sq-sample32",
        description:
            "That's the difference between me and the rest of the world! Happiness isn't good enough for me! I demand euphoria!",
        title: "Tawang",
    },
];

const Destinations: React.FC = () => {
    return (
        <div className="max-w-6xl m-auto px-4 flex flex-col items-center justify-center font-primary">
            <h1 className="font-secondary text-3xl py-9">Top Destinations</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                { destinationsData.map((card) => (
                    <figure
                        key={ card.id }
                        className="snip1200 relative overflow-hidden text-white font-['Raleway'] bg-black shadow-lg rounded-xl transition-all ease-in-out duration-1000 w-full h-[300px] group"
                    >
                        <img
                            src={ card.imgSrc }
                            alt={ card.alt }
                            className="w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:opacity-25 group-hover:scale-110"
                        />
                        <figcaption className="absolute top-[45%] left-[7%] right-[7%] bottom-[45%] border border-white border-t-0 transition-all duration-500 group-hover:top-[7%] group-hover:bottom-[7%]">
                            <p className="absolute top-1/2 left-0 right-0 px-5 transform -translate-y-1/2 text-center opacity-0 transition-opacity delay-350 duration-500 ease-in-out group-hover:opacity-100">
                                { card.description }
                            </p>
                            <div className="heading absolute bottom-0 w-full text-center">
                                <h2 className="text-lg uppercase font-medium">
                                    { card.title.split(" ")[0] }{ " " }
                                    <span className="font-bold">{ card.title.split(" ")[1] }</span>
                                </h2>
                            </div>
                        </figcaption>
                        <a href="#" className="absolute inset-0 z-10"></a>
                    </figure>
                )) }
            </div>
        </div>
    );
};

export default Destinations;

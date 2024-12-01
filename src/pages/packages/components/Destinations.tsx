import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTopDestination } from "../../../api/images-api";
import { QUERY_KEYS } from "../../../utils/queryKeys";
import Loader from "../../../components/common/loader/Loader";

const Destinations: React.FC = () => {

    const { data, isLoading } = useQuery({
        queryKey: QUERY_KEYS.TOP_DESTINATION,
        queryFn: fetchTopDestination,
    })



    return (
        <div className="max-w-6xl m-auto px-4 flex flex-col items-center justify-center font-primary">
            <h1 className="font-secondary text-3xl py-9">Top Destinations</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                { isLoading ?
                    <Loader />
                    :
                    data?.map((card: any) => (
                        <figure
                            key={ card.id }
                            className="snip1200 relative overflow-hidden text-white font-['Raleway'] bg-black shadow-lg rounded-xl transition-all ease-in-out duration-1000 w-full h-[300px] group"
                        >
                            <img
                                src={ card.image_path }
                                alt={ card.title }
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
                            {/* <a href="#" className="absolute inset-0 z-10"></a> */ }
                        </figure>
                    )) }
            </div>
        </div>
    );
};

export default Destinations;

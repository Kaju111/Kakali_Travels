import React from "react";
import { MdOutlineStar } from "react-icons/md";

interface CardProps {
    imgUrl: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ imgUrl, title, description }) => {
    return (
        <div className="w-full md:w-1/3 p-4">
            <div className="pro bg-white border shadow-md hover:shadow-lg rounded-xl overflow-hidden transition-shadow flex flex-col">
                <img
                    src={imgUrl}
                    alt={title}
                    className="w-full h-64 object-cover"
                />
                <div className="p-4 flex items-center gap-2">
                    <MdOutlineStar className="w-4 h-4 text-[#FA5636]" />
                    <MdOutlineStar className="w-4 h-4 text-[#FA5636]" />
                    <MdOutlineStar className="w-4 h-4 text-[#FA5636]" />
                    <MdOutlineStar className="w-4 h-4 text-[#FA5636]" />
                </div>
                <div className="des px-4 pb-4 flex-grow">
                    <h4 className="font-secondary text-xl">{title}</h4>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                        {description}
                    </p>
                    {/* <button className="bg-gray-700 text-white py-1 px-10 mt-4">
                        Book Now
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Card;

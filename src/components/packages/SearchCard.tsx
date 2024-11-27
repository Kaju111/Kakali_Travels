import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

interface CardProps {
    image_path: string;
    name: string;
    description: string;
    location: string;
    price: string;
}

const SearchCard: React.FC<CardProps> = ({ image_path, name, description, location, price }) => {
    return (
        <div className="w-full md:w-1/3 p-4">
            <div className="pro bg-white border shadow-md hover:shadow-lg rounded-xl overflow-hidden transition-shadow flex flex-col">
                <img
                    src={image_path}
                    alt={name}
                    className="w-full h-64 object-cover"
                />
                <div className="p-4 flex items-center gap-2">
                    <MdOutlineStar className="w-4 h-4 text-[#FA5636]" />
                    <MdOutlineStar className="w-4 h-4 text-[#FA5636]" />
                    <MdOutlineStar className="w-4 h-4 text-[#FA5636]" />
                    <MdOutlineStar className="w-4 h-4 text-[#FA5636]" />
                </div>
                <div className="flex px-4 gap-14 mb-3"><h1>{price}</h1> <h1 className="flex items-center gap-1"> <IoLocationOutline />{location}</h1></div>

                <div className="des px-4 pb-4 flex-grow">
                    <h4 className="font-secondary text-xl">{name}</h4>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                        {description}
                    </p>
                    <button className="bg-gray-700 text-white py-1 px-10 mt-4">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;

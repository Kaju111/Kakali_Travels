import React from "react";
import { MapPin, Star } from "lucide-react";


interface tags {
    value: string
}

interface CardProps {
    image_path: string;
    name: string;
    description: string;
    location: string;
    price: string;
    tags: tags[],
}

const SearchCard: React.FC<{ item: CardProps }> = ({ item }) => {
    const { image_path, name, description, location, price, tags } = item;

    return (
        <div className="w-full max-w-4xl h- bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                        alt="Kathiatoli Waterfall"
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        src={ image_path }
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium">{ location }</span>
                    </div>
                </div>
                <div className="p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                { [...Array(4)].map((_, i) => (
                                    <Star
                                        key={ i }
                                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                    />
                                )) }
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900 capitalize">
                                { name }
                            </h3>
                            <p className="text-sm text-gray-500 line-clamp-4 capitalize">
                                { description }
                            </p>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-gray-900">₹{ price }</span>
                            <span className="text-sm text-gray-500">onwards</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            { tags?.map((tag, index) => (
                                <span
                                    key={ index }
                                    className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800"
                                >
                                    { tag.value }
                                </span>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="px-6 pb-6 md:col-span-2">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101">
                    Book Now
                </button>
            </div> */}
        </div>
    );
};

export default SearchCard;

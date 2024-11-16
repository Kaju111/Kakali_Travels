import { FacilityCardProps } from "../types/types";

export const FacilityCard: React.FC<FacilityCardProps> = ({ item }) => (
    <div className="p-4">
        <div className="bg-white overflow-hidden">
            <img src={ item.img }
                alt={ item.title }
                width={ 500 }
                height={ 300 }
                className="w-full h-96 object-cover" />

            <div className="py-6">
                <h3 className="text-xl font-secondary">{ item.title }</h3>
                <p className="text-sm mt-2 line-clamp-none font-primary">
                    { item.description.replace(/'/g, '&#39;') }
                </p>

                <button className="mt-4 pt-2 border-b-black font-primary border-b-2 text-sm uppercase">
                    { item.btn }
                </button>
            </div>
        </div>
    </div>
);

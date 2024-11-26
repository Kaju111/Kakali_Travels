import { Link } from "react-router-dom";
import { FacilityCardProps } from "../../utils/types";

export const FacilityCard: React.FC<FacilityCardProps> = ({ item }) => (
    <div className="p-4">
        <div className="bg-white overflow-hidden">
            <img src={ item.image_path }
                alt={ item.title }
                width={ 500 }
                height={ 300 }
                className="w-full h-96 object-cover" />

            <div className="pt-6 h-32">
                <h3 className="text-xl font-secondary">{ item.title }</h3>
                <p className="text-sm mt-2 font-primary line-clamp-3">
                    { item.sub_title }
                </p>
            </div>
            <Link to={ item.read_more_link } className="mt-4 pt-2 border-b-black font-primary border-b-2 text-sm uppercase">
                Read More
            </Link>
        </div>
    </div>
);

import { useState } from "react";
import { OffersCardProps } from "../types/types";

const OffersCard: React.FC<OffersCardProps> = ({ title, description, imgUrl }) => {

    const [loading, setLoading] = useState(false);
    
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    return (
      <div className="max-w-md p-4 bg-white rounded-lg shadow-md flex items-center gap-4 border border-gray-200">
        <img
          src={imgUrl}
          alt={title}
          className="w-24 h-24 rounded-md object-cover"
        />
        <div className="flex-1">
          <p className="text-xs text-gray-500 text-right">T&C'S APPLY</p>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <button
          onClick={handleClick}
          className={`text-blue-600 font-semibold text-sm mt-2 px-4 py-2 rounded-md transition ${
            loading ? "" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "BOOK NOW"}
        </button>
        </div>
      </div>
    );
  };
  
  export default OffersCard;
  
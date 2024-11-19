import React from 'react';
import { HeaderImagesProps } from '../types/types';

const HeaderSection: React.FC<HeaderImagesProps> = ({ img, title, desc }) => {
    return (
        <div className="relative w-full h-[55vh]">
            <img src={ img } alt={ title } className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4">
                <p className="text-white text-3xl md:text-5xl font-semibold mb-2 font-secondary">{ title }</p>
                <h1 className="text-white text-sm md:text-base font-primary w-[80%] md:w-[50%] mx-auto">{ desc }</h1>
            </div>
        </div>
    );
};

export default HeaderSection;

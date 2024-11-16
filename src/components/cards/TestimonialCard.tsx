import React from 'react';
import { TestimonialCardProps } from '../types/types';

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, position, company, testimonial, imageUrl }) => {
    return (
        <div className="relative z-10 bg-white shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] rounded-sm flex flex-col lg:items-center justify-between lg:flex-row gap-10 p-7">
            <div>
                <p className="my-3 2xl:text-lg">{ testimonial }</p>
                <p className="text-gray-400">
                    <span className="name text-gray-900 capitalize font-bold">{ name }</span> &#8212; { company }, { position }
                </p>
            </div>
            <div className="relative shrink-0">
                <img src={ imageUrl } alt={ name } className="rounded-full w-24 h-24 2xl:w-28 2xl:h-28 object-cover" />
                <div className="rounded-full w-24 h-24 2xl:w-28 2xl:h-28 bg-gradient-to-r from-[#deb2b280] to-[#deb2b280] absolute inset-0"></div>
            </div>
        </div>
    );
};

export default TestimonialCard;

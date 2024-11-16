import React from "react";
import MoreImg from "../../../assets/images/packages/guide/more.jpg";

const More: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <section className="flex flex-col lg:flex-row border w-full lg:h-[50vh] mt-16 shadow-xl rounded-2xl">
                {/* Image Section */}
                <div className="w-full lg:w-[50%] h-[200px] lg:h-full">
                    <img
                        src={MoreImg}
                        alt="MoreImg"
                        className="object-cover w-full h-full rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-[50%] h-auto lg:h-full flex items-center justify-center flex-col bg-gray-100 p-6 lg:p-0">
                    <div className="lg:w-[64%] w-full text-center">
                        <p className="font-secondary text-2xl lg:text-4xl">
                            Get special offers, and more from Traveler
                        </p>
                        <p className="font-primary text-sm lg:text-base mt-4">
                            Subscribe to see secret deals, prices drop the moment you sign up!
                        </p>
                        <div className="mt-5 relative w-full">
                            <input
                                type="text"
                                className="w-full border border-black rounded-3xl py-2 px-5 pr-[120px]"
                                placeholder="Enter your email"
                            />
                            <button
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-3xl py-2 px-5"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default More;

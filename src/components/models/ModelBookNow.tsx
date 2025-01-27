import React from "react";
import CoverImg from "../../assets/images/galleryImage/image6.jpg";
import CloseIcon from "@mui/icons-material/Close";

interface ModelBookNowProps {
    open: boolean;
    onClose: () => void;
}

const ModelBookNow: React.FC<ModelBookNowProps> = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="fixed inset-0"
                onClick={onClose}
                role="button"
                aria-hidden="true"
                aria-label="Close Modal"
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-4xl z-20">
                <div className="flex flex-wrap md:flex-nowrap">

                    {/* Image Section */}
                    <section className="w-full md:w-1/2">
                        <img
                            src={CoverImg}
                            alt="Enquiry"
                            className="object-cover h-full w-full rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
                        />
                    </section>

                    {/* Form Section */}
                    <section className="w-full md:w-1/2 p-4">
                        <div className="flex justify-end">
                            <button
                                onClick={onClose}
                                className="hover:text-gray-600 transition duration-300"
                                aria-label="Close Modal"
                            >
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="px-4 py-2">
                            <h1 className="text-center text-2xl font-bold mb-4">Enquiry Form</h1>
                            <p className="text-sm text-gray-600 mb-6">
                                Enter your details and our consultants will help you with the best quotes.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium">
                                        Full Name
                                    </label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        className="border border-gray-300 px-3 py-2 w-full rounded focus:ring focus:ring-blue-300"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="border border-gray-300 px-3 py-2 w-full rounded focus:ring focus:ring-blue-300"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="border border-gray-300 px-3 py-2 w-full rounded focus:ring focus:ring-blue-300"
                                        placeholder="Enter your phone number"
                                        maxLength={10}
                                    />
                                </div>
                                <div className="flex justify-center">

                                    <button className="text-white bg-blue-700 px-4 py-1">Send Enquiry</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ModelBookNow;

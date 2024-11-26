import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../utils/queryKeys";
import { fetchGalleryImages } from "../../../api/images-api";
import Loader from "../../../components/common/loader/Loader";


const Images = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

    const openModal = (image: string) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(undefined);
    };


    const { data, isLoading, isError } = useQuery({
        queryKey: QUERY_KEYS.GALLERY_IMAGES,
        queryFn: fetchGalleryImages,
    })

    if (isLoading) return <div className="text-center mt-10"><Loader /></div>
    if (isError) return <div className="text-center mt-10 text-red-500">Please Refresh The Page</div>;

    return (
        <div className="max-w-6xl m-auto px-4">
            <h1 className="font-secondary text-3xl py-9 text-center">Your Ultimate Travel Guide to Northeast India</h1>
            <figure className="grid grid-cols-1 auto-rows-auto gap-[2svmin] grid-flow-dense justify-items-stretch items-stretch md:grid-cols-2 lg:grid-cols-4 lg:gap-[1svmin]">
                { data.map((image: any, index: number) => (
                    <div
                        key={ index }
                        onClick={ () => openModal(image.image_path) }
                        className={ `cursor-pointer w-full aspect-[16/9] overflow-hidden
                            ${index + 1 === 11 ? "md:row-span-2" : ""}
                            ${[3, 12].includes(index + 1) ? "lg:row-span-2 lg:col-span-2" : ""}
                            ${index + 1 === 5 || index + 1 === 15 ? "lg:col-span-2" : ""}` }
                    >
                        <img
                            src={ image.image_path }
                            className="w-full h-full object-cover"
                            alt={ `Gallery Image ${index + 1}` }
                        />
                    </div>
                )) }
            </figure>

            { isModalOpen && selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={ closeModal }
                >
                    <div
                        className="relative bg-white p-4 shadow-lg max-w-3xl w-full"
                        onClick={ (e) => e.stopPropagation() }
                    >
                        <button
                            className="absolute top-2 right-2 text-white bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
                            onClick={ closeModal }
                        >
                            ✕
                        </button>
                        <img
                            src={ selectedImage }
                            alt="Selected"
                            className="w-full h-auto max-h-[80vh] object-contain"
                        />
                    </div>
                </div>
            ) }
        </div>
    );
};

export default Images;

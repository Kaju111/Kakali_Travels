import img1 from "../../../assets/images/galleryImage/image10.webp";
import img2 from "../../../assets/images/galleryImage/image5.jpg";
import img3 from "../../../assets/images/galleryImage/image6.jpg";
import img4 from "../../../assets/images/galleryImage/image7.jpg";
import img5 from "../../../assets/images/galleryImage/image8.jpg";
import img6 from "../../../assets/images/galleryImage/image9.jpg";
import img7 from "../../../assets/images/galleryImage/image10.webp";
import img8 from "../../../assets/images/galleryImage/image5.jpg";
import img9 from "../../../assets/images/galleryImage/image6.jpg";
import img10 from "../../../assets/images/galleryImage/image7.jpg";
import img11 from "../../../assets/images/galleryImage/image8.jpg";
import img12 from "../../../assets/images/galleryImage/image9.jpg";
import img13 from "../../../assets/images/galleryImage/image10.webp";
import img14 from "../../../assets/images/galleryImage/image5.jpg";
import img15 from "../../../assets/images/galleryImage/image6.jpg";
import img16 from "../../../assets/images/galleryImage/image7.jpg";
import img17 from "../../../assets/images/galleryImage/image8.jpg";
import img18 from "../../../assets/images/galleryImage/image9.jpg";
import { useState } from "react";

const importedImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18,
];

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

    return (
        <div className="max-w-6xl m-auto px-4">
            <h1 className="font-secondary text-3xl py-9 text-center">Latest Post</h1>
            <figure className="grid grid-cols-1 auto-rows-auto gap-[2svmin] grid-flow-dense justify-items-stretch items-stretch md:grid-cols-2 lg:grid-cols-4 lg:gap-[1svmin]">
                { importedImages.map((image, index) => (
                    <div
                        key={ index }
                        onClick={ () => openModal(image) }
                        className={ `cursor-pointer w-full aspect-[16/9] overflow-hidden
                            ${index + 1 === 11 ? "md:row-span-2" : ""}
                            ${[3, 12].includes(index + 1) ? "lg:row-span-2 lg:col-span-2" : ""}
                            ${index + 1 === 5 || index + 1 === 15 ? "lg:col-span-2" : ""}` }
                    >
                        <img
                            src={ image }
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

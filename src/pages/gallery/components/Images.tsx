import React from "react";
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

const importedImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18,
];

const Images = () => {
    return (
        <div className="max-w-6xl m-auto px-4">
            <h1 className="font-secondary text-3xl py-9 text-center">Latest Post</h1>
            <figure className="grid grid-cols-1 auto-rows-auto gap-[2svmin] grid-flow-dense justify-items-stretch items-stretch md:grid-cols-2 lg:grid-cols-4 lg:gap-[1svmin]">
                {importedImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`w-full aspect-[16/9] object-cover
              ${index + 1 === 11 ? "md:row-span-2" : ""}
              ${[3, 12].includes(index + 1) ? "lg:row-span-2 lg:col-span-2" : ""}
              ${index + 1 === 5 || index + 1 === 15 ? "lg:col-span-2" : ""}
            `}
                        alt={`Gallery Image ${index + 1}`}
                    />
                ))}
            </figure>
        </div>
    );
};

export default Images;

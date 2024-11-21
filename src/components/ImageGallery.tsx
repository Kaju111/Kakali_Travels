import React from 'react';

interface ImageData {
  image_path: string;
}

interface ImageGalleryProps {
  galleryData: ImageData[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ galleryData }) => {
  const limitedImages = galleryData.slice(0, 10);

  // Separate images into main and small categories
  const mainImages = limitedImages.slice(0, 2);
  const smallImages = limitedImages.slice(2, 10);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1">
          <img
            className="object-cover h-full"
            src={mainImages[0]?.image_path}
            alt={`Main Image`}
            height={1000}
            width={1000}
          />
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2">
          {smallImages.slice(0, 4).map((image, index) => (
            <img
              key={index}
              className="object-cover h-full"
              src={image.image_path}
              alt={`Small Image ${index + 1}`}
              height={1000}
              width={1000}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 mt-12">
        <div className="flex-1 grid grid-cols-2 gap-2">
          {smallImages.slice(4).map((image, index) => (
            <img
              key={index}
              className="object-cover h-full"
              src={image.image_path}
              alt={`Small Image ${index + 5}`}
              height={1000}
              width={1000}
            />
          ))}
        </div>
        {mainImages[1] && (
          <div className="flex-1">
            <img
              className="object-cover h-full"
              src={mainImages[1].image_path}
              alt={`Main Image 2`}
              height={1000}
              width={1000}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;

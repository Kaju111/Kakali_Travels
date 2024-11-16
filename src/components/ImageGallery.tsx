import React from 'react';
import { ImageGalleryProps } from './types/types';


const ImageGallery: React.FC<ImageGalleryProps> = ({ mainImages, smallImages }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1">
          <img className="object-cover h-full" src={ mainImages[0]?.src } alt={ mainImages[0]?.src } height={ 1000 } width={ 1000 } />
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2">
          { smallImages.slice(0, 4)?.map((image: any, index: number) => (
            <img key={ index } className="object-cover h-full" src={ image.src } alt={ image.alt } height={ 1000 } width={ 1000 } />
          )) }
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 mt-12">
        <div className="flex-1 grid grid-cols-2 gap-2">
          { smallImages.slice(4, 8).map((image: any, index: number) => (
            <img key={ index } className="object-cover h-full" src={ image.src } alt={ image.alt } height={ 1000 } width={ 1000 } />
          )) }
        </div>
        <div className="flex-1">
          <img className="object-cover h-full" src={ mainImages[1].src } alt={ mainImages[1].alt } height={ 1000 } width={ 1000 } />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

export interface TestimonialCardProps {
    name: string;
    position: string;
    company: string;
    testimonial: string;
    imageUrl: string;
}

export interface ImageGalleryProps {
  mainImages : any;
  smallImages: any;
}

export interface HeaderImagesProps {
    img: string;
    title: string;
    desc: string;
}

export interface OffersCardProps{
  title: string, 
  description: string, 
  imgUrl: string
}
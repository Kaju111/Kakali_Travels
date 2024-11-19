export interface TestimonialCardProps {
    name: string;
    position: string;
    company: string;
    testimonial: string;
    imageUrl: string;
}

export interface FacilityItem {
    id: string;
    img: string;
    title: string;
    description: string;
    btn: string;
}

export interface FacilityCardProps {
    item: FacilityItem;
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
// export interface TestimonialCardProps {
//     name: string;
//     position: string;
//     company: string;
//     testimonial: string;
//     imageUrl: string;
// }

export interface SliderImages {
  id: number;
  title: string;
  image_path: string;
  sub_title: string;
}

export interface AmenitiesFacilities {
  id: number;
  title: string;
  sub_title: string;
  image_path: string;
  read_more_link: string;
}

export interface FacilityCardProps {
  item: AmenitiesFacilities;
}

export interface ContactFormValues {
  first_name: string;
  last_name: string;
  email: string;
  contact_number: string;
}
export interface GalleryStories {
  id: number;
  image_path: string;
  title: string;
  category: string;
  created_at: string;
}
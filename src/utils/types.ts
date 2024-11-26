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

// id: 4,
//         imgSrc: img4,
//         alt: "sq-sample27",
//         description: "I say, if your knees aren't green by the end of the day.",
//         date: "12 Nov 2017",
//         title: "Holiday",


  //   "id": 6,
  //   "image_path": "https://admin.kakalitravels.com/storage/gallery/images/9293688image5_bhq5rrav__1_.jpg",
  //   "category": "test",
  //   "tags": "test",
  //   "title": "test",
  //   "created_at": "2024-11-26T07:10:11.000000Z"
  // },
export interface GalleryStories {
  id: number;
  image_path: string;
  title: string;
  category: string;
  created_at: string;
}
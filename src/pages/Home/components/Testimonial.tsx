import TestimonialCard from "../../../components/cards/TestimonialCard";

const testimonials = [
  {
    name: 'Kaju Saikia',
    position: 'CTO',
    company: 'Assam Adventure',
    testimonial: 'Assam’s tea gardens and Kaziranga were amazing! The trip was well-organized and gave me a deep connection to the region.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwDcEwtWdCyIydwNaTUdtAzRN7fLmW7322A&s',
  },
  {
    name: 'Devid Koch',
    position: 'CEO',
    company: 'ANITEK',
    testimonial: 'Meghalaya’s landscapes and culture blew me away. From living root bridges to waterfalls, it’s a hidden paradise',
    imageUrl: 'https://scontent.fgau5-1.fna.fbcdn.net/v/t1.6435-9/54462886_150712802620832_5164993143203954688_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pe-Qpl2VLmUQ7kNvgHg9oXF&_nc_zt=23&_nc_ht=scontent.fgau5-1.fna&_nc_gid=AgD5PNFchX8mSHLZXObgUkB&oh=00_AYBA7AYTdOBdS39W9pIDRB4aKh9gUa24vd8GfgzqlnarHg&oe=676CD024',
  },
  {
    name: 'Afreen Ahmed',
    position: 'CEO',
    company: 'Arunachal Pradesh Exploration',
    testimonial: 'Arunachal Pradesh’s mountains and monasteries were unforgettable. The experience was truly unique and beautifully curated.',
    imageUrl: 'https://scontent.fgau5-1.fna.fbcdn.net/v/t39.30808-6/431310793_1561510394634424_5138866839623774939_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=d0jckNroTKEQ7kNvgGjjAt_&_nc_zt=23&_nc_ht=scontent.fgau5-1.fna&_nc_gid=AlAAIxRbUwC3OIR-EpthAoX&oh=00_AYAXidJJbkk5DXXN4m9tgMiLYWyor8G1h85GKKC4cSHM0Q&oe=674B575D',
  },
];

const Testimonial = () => {
  return (
    <div>
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 place-content-center lg:place-items-center lg:gap-16 max-w-7xl mx-auto px-6 py-10">
        <div className="relative z-10 mb-10 lg:mb-0 col-span-6">
          <div className="hidden xl:block 3xl:hidden absolute top-[-6rem] left-[-5rem] w-64 h-64 bg-red-50 rounded-full"></div>
          <h1 className="relative z-10 sm:text-5xl text-3xl 2xl:text-6xl font-bold sm:leading-snug 2xl:leading-tight font-secondary">
            What Our Guests Say
          </h1>
          <p className="mt-4 mb-7 text-gray-500 max-w-sm 2xl:text-lg 2xl:mt-4 2xl:mb-8 z-10 relative font-primary">
            We take pride in serving our guests with the best experience. Read
            what they say
          </p>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-5 col-span-6">
          { testimonials.map((testimonial, index) => (
            <TestimonialCard key={ index } { ...testimonial } />
          )) }
        </div>
        <div className="hidden xl:block absolute bottom-[-6rem] right-[25rem] w-72 h-72 bg-red-50 rounded-full"></div>
      </section>
    </div>
  );
};

export default Testimonial;

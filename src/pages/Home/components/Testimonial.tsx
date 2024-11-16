import TestimonialCard from "../../../components/cards/TestimonialCard";

const testimonials = [
  {
    name: 'Timothy Quano',
    position: 'Designer',
    company: 'Symph',
    testimonial: 'This product really helped my brand expand in a very manageable way. Would really use this for any future expansion.',
    imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Jane Doe',
    position: 'CEO',
    company: 'ANI',
    testimonial: 'Scalability will never be an issue now for my brand!',
    imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Rowen Smith',
    position: 'CEO',
    company: 'Golden Bowl',
    testimonial: 'The product is really easy to use that I didn’t have to set up any training for my employees.',
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const Testimonial = () => {
  return (
    <div>
      <section className="overflow-hidden relative min-h-screen grid grid-cols-1 lg:grid-cols-12 place-content-center lg:place-items-center lg:gap-16 max-w-7xl mx-auto px-6 py-10">
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

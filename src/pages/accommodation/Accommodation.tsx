import HeaderSection from '../../components/common/HeaderSection'
import accommodationImg from "../../assets/images/about/Accommodation.jpg"
import Img1 from "../../assets/images/Accommodation/img1.jpg"
import Img2 from "../../assets/images/Accommodation/img2.webp"
import Img3 from "../../assets/images/Accommodation/img3.webp"
import Img4 from "../../assets/images/Accommodation/img4.webp"
import Img5 from "../../assets/images/Accommodation/img5.jpg"
import Img6 from "../../assets/images/Accommodation/img6.jpg"
import OffersCard from '../../components/cards/OffersCard'


const data = [
    {
      "id": 1,
      "title": "Charming Bed & Breakfast in Countryside",
      "description": "Enjoy a cozy stay in this traditional bed & breakfast with scenic countryside views and homemade breakfast.",
      "imgUrl": Img1
    },
    {
      "id": 2,
      "title": "Boutique Hotel in City Center",
      "description": "A stylish boutique hotel with modern amenities, located in the heart of the city for a convenient stay.",
      "imgUrl": Img2
    },
    {
      "id": 3,
      "title": "Luxury Beachfront Resort",
      "description": "Stay in a luxurious beachfront resort with private beach access, spa services, and fine dining options.",
      "imgUrl": Img3
    },
    {
      "id": 4,
      "title": "Mountain Retreat with Panoramic Views",
      "description": "A peaceful mountain retreat offering breathtaking views, hiking trails, and cozy fireplaces.",
      "imgUrl": Img4
    },
    {
      "id": 5,
      "title": "Modern Capsule Hotel Experience",
      "description": "A futuristic capsule hotel providing a unique, budget-friendly stay with high-tech amenities.",
      "imgUrl": Img5
    },
    {
      "id": 6,
      "title": "Luxury Villa with Private Pool",
      "description": "Indulge in a high-end villa featuring a private pool, spacious interiors, and premium facilities.",
      "imgUrl": Img6
    },
    {
      "id": 7,
      "title": "Traditional Ryokan in Japan",
      "description": "Experience Japanese culture in an authentic Ryokan with tatami floors, futon beds, and onsen baths.",
      "imgUrl": Img3
    },
    {
      "id": 8,
      "title": "Treehouse Stay in the Rainforest",
      "description": "Stay amidst nature in a cozy treehouse with stunning rainforest views and wildlife encounters.",
      "imgUrl": Img1
    },
    {
      "id": 9,
      "title": "Historic Castle Hotel",
      "description": "Live like royalty in this beautifully restored castle hotel with elegant suites and medieval charm.",
      "imgUrl": Img3
    },
    {
      "id": 10,
      "title": "Desert Glamping Under the Stars",
      "description": "A unique desert glamping experience with luxury tents, campfires, and mesmerizing night skies.",
      "imgUrl": Img2
    },
    {
      "id": 11,
      "title": "Floating Bungalow Over the Water",
      "description": "Stay in a serene overwater bungalow with direct access to crystal-clear waters and marine life.",
      "imgUrl": Img6
    },
    {
      "id": 12,
      "title": "Eco-Friendly Jungle Lodge",
      "description": "An eco-conscious jungle lodge offering sustainable living, adventure activities, and organic cuisine.",
      "imgUrl": Img5
    }
  ];
  


const Accommodation = () => {
    return (
        <div>
            <HeaderSection img={accommodationImg} title="Wander Beyond the Horizon" desc="Simplifying travel to create exceptional experiences for all travelers." />
       
            <h1 className="font-secondary text-3xl py-9 text-center">Accommodation</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto ">
    {data.map((offer) => (
        <OffersCard key={offer.id} title={offer.title} description={offer.description} imgUrl={offer.imgUrl} />
    ))}
</div>
       
        </div>
    )
}

export default Accommodation

import HeaderSection from '../../components/common/HeaderSection'
import rentImg from "../../assets/images/about/rent.jpg"
import Img1 from "../../assets/images/tickets/ticket1.png"
import Img2 from "../../assets/images/tickets/ticket2.webp"
import Img3 from "../../assets/images/tickets/ticket3.webp"
import Img4 from "../../assets/images/tickets/ticket4.webp"
import Img5 from "../../assets/images/tickets/ticket5.png"
import Img6 from "../../assets/images/tickets/ticket6.webp"
import OffersCard from '../../components/cards/OffersCard'

const data =[
    {
      "id": 1,
      "title": "Luxury 2BHK Apartment in Downtown",
      "description": "Experience modern living in this spacious 2BHK apartment with city views, high-end furnishings, and top-notch amenities.",
      "imgUrl": Img1
    },
    {
      "id": 2,
      "title": "Cozy Studio Near Central Park",
      "description": "A fully-furnished studio apartment with great connectivity, perfect for working professionals and students.",
      "imgUrl": Img2
    },
    {
      "id": 3,
      "title": "Spacious 3BHK Villa with Garden",
      "description": "Enjoy privacy and comfort in this 3BHK villa with a lush green garden and private parking.",
      "imgUrl": Img3
    },
    {
      "id": 4,
      "title": "Modern Loft with Skyline View",
      "description": "A stunning loft apartment featuring floor-to-ceiling windows and a breathtaking skyline view.",
      "imgUrl": Img4
    },
    {
      "id": 5,
      "title": "Beachfront Cottage for a Peaceful Stay",
      "description": "Wake up to ocean waves in this beautiful beachfront cottage with a private deck.",
      "imgUrl": Img5
    },
    {
      "id": 6,
      "title": "Fully-Furnished 1BHK Apartment",
      "description": "Move in hassle-free to this cozy, fully-furnished 1BHK apartment located in a prime area.",
      "imgUrl": Img6
    },
    {
      "id": 7,
      "title": "Rustic Cabin in the Woods",
      "description": "Escape the city and enjoy nature in this charming rustic cabin surrounded by trees.",
      "imgUrl": Img3
    },
    {
      "id": 8,
      "title": "Penthouse with Rooftop Pool",
      "description": "Live in style in this luxurious penthouse featuring a private rooftop pool and terrace.",
      "imgUrl": Img1
    },
    {
      "id": 9,
      "title": "Elegant Duplex in Prime Location",
      "description": "A beautifully designed duplex apartment with a spacious living area and modern interiors.",
      "imgUrl": Img3
    },
    {
      "id": 10,
      "title": "Lakeview Cottage with Private Dock",
      "description": "A serene getaway featuring a private dock, ideal for fishing and boating enthusiasts.",
      "imgUrl": Img2
    },
    {
      "id": 11,
      "title": "Compact Micro Apartment for Minimalists",
      "description": "A smartly designed micro apartment with multi-functional furniture and space-saving features.",
      "imgUrl": Img6
    },
    {
      "id": 12,
      "title": "Family-Friendly Townhouse with Backyard",
      "description": "A spacious townhouse perfect for families, featuring a backyard and children's play area.",
      "imgUrl": Img5
    }
  ]
  

const Rental = () => {
    return (
        <div>
            <HeaderSection img={rentImg} title="Discover. Travel. Live. Repeat." desc="Luxury vacations tailored to fit your dreams and budget." />
      
      
      
      
            <h1 className="font-secondary text-3xl py-9 text-center">Rentels</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto ">
    {data.map((offer) => (
        <OffersCard key={offer.id} title={offer.title} description={offer.description} imgUrl={offer.imgUrl} />
    ))}
</div>
      
        </div>
    )
}

export default Rental

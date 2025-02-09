import HeaderSection from '../../components/common/HeaderSection'
import ticketImg from "../../assets/images/about/tickets.jpeg"
import OffersCard from '../../components/cards/OffersCard'
import Img1 from "../../assets/images/tickets/ticket1.png"
import Img2 from "../../assets/images/tickets/ticket2.webp"
import Img3 from "../../assets/images/tickets/ticket3.webp"
import Img4 from "../../assets/images/tickets/ticket4.webp"
import Img5 from "../../assets/images/tickets/ticket5.png"
import Img6 from "../../assets/images/tickets/ticket6.webp"

const data = [
    { id: 1, title: "Presenting TRIP GUARANTEE on Trains", description: "Waitlisted tickets no more. Convert your unconfirmed train tickets to flights, cabs & more.", imgUrl: Img1 },
    { id: 2, title: "#SUPERSAVER OFFER: Up to 15% OFF*", description: "on domestic flights & hotels.", imgUrl: Img2 },
    { id: 3, title: "Meals for Your Flights @ up to 20% Lower Prices!", description: "Now book your meal in advance & save BIG bucks on your journey.", imgUrl: Img3 },
    { id: 4, title: "Avail Interest-free EMI* + Up to 35% OFF*", description: "on flights, hotels & holiday packages in India & abroad.", imgUrl: Img4 },
    { id: 5, title: "Big Savings for You:", description: "Grab Up to ₹7500 OFF* on Flights", imgUrl: Img5 },
    { id: 6, title: "Grab Up to 30% OFF* on", description: "domestic + international flights, hotels & holiday packages for a memo...", imgUrl: Img6 },
    { id: 7, title: "For Worry-free Travel: Grab Up to 30% OFF*", description: "+ 3- & 6-months interest-free EMI on flights, stays and holiday packag...", imgUrl: Img4 },
    { id: 8, title: "AVAIL: Up to 8% OFF* + Interest-free EMI on", description: "domestic & international flights.", imgUrl: Img1 },
    { id: 9, title: "GOOD NEWS FOR YOUR NEXT TRIP:", description: "Grab up to 15% OFF* on flights, hotels & homestays!", imgUrl: Img2 },
];

const Tickets = () => {
    return (
        <div>
            <HeaderSection img={ticketImg} title="Travel Made Easy Always" desc="Affordable travel experiences that create unforgettable memories." />
            
<h1 className="font-secondary text-3xl py-9 text-center">Tickets</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto ">
                {data.map((offer) => (
                    <OffersCard key={offer.id} title={offer.title} description={offer.description} imgUrl={offer.imgUrl} />
                ))}
            </div>
        </div>
    );
};

export default Tickets;

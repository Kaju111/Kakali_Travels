import { useState } from "react"
import Img1 from "../../../assets/images/packages/desnination/Destination1.webp"
import Img2 from "../../../assets/images/packages/desnination/Destination2.jpg"
import Img3 from "../../../assets/images/packages/desnination/Destination3.webp"
import Img4 from "../../../assets/images/packages/desnination/Destination4.jpg"
import Img5 from "../../../assets/images/packages/desnination/Destination5.jpg"
import Img6 from "../../../assets/images/packages/desnination/Destination6.jpg"
import Card from "../../../components/packages/Card"

const packagesData = [
    {
        id: 1,
        title: "Tezpur",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img1,
    },
    {
        id: 2,
        title: "Nagaon",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img2,
    },
    {
        id: 3,
        title: "Majuli",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img3,
    },
    {
        id: 4,
        title: "Shillong",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img4,
    },
    {
        id: 5,
        title: "Shikim",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img5,
    },
    {
        id: 6,
        title: "Tawang",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img6,
    },
];


const ticketsData = [
    {
        id: 1,
        title: "Ticktes",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img1,
    },
    {
        id: 2,
        title: "Nagaon",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img2,
    },
    {
        id: 3,
        title: "Majuli",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img3,
    },
    {
        id: 4,
        title: "Shillong",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img4,
    },
    {
        id: 5,
        title: "Shikim",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img5,
    },
    {
        id: 6,
        title: "Tawang",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img6,
    },
];

const carsData = [
    {
        id: 1,
        title: "Cars",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img1,
    },
    {
        id: 2,
        title: "Nagaon",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img2,
    },
    {
        id: 3,
        title: "Majuli",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img3,
    },
    {
        id: 4,
        title: "Shillong",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img4,
    },
    {
        id: 5,
        title: "Shikim",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img5,
    },
    {
        id: 6,
        title: "Tawang",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img6,
    },
];
const accommodationsData = [
    {
        id: 1,
        title: "acco",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img1,
    },
    {
        id: 2,
        title: "Nagaon",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img2,
    },
    {
        id: 3,
        title: "Majuli",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img3,
    },
    {
        id: 4,
        title: "Shillong",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img4,
    },
    {
        id: 5,
        title: "Shikim",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img5,
    },
    {
        id: 6,
        title: "Tawang",
        description: "Hadii add garaneyso sida loo dabaasho waxaad taqaanaa xirfad aad u qiimo badan. Waxaad ogaandoontaa maalinta aad harqato.",
        imgUrl: Img6,
    },
];

const Recommended = () => {



    const [activeCategory, setActiveCategory] = useState('packages');

    // Determine which data to display based on the active category
    const dataToDisplay = () => {
        switch (activeCategory) {
            case 'tickets':
                return ticketsData;
            case 'cars':
                return carsData;
            case 'accommodations':
                return accommodationsData;
            default:
                return packagesData;
        }
    };


    return (
        <div className="max-w-6xl m-auto px-4 flex flex-col items-center justify-center font-primary">
            <h1 className="font-secondary text-3xl pt-14">Recommended For You</h1>

            <div className="flex flex-wrap font-primary font-semibold text-base gap-5 pt-9 justify-center lg:justify-start">
                <button
                    onClick={() => setActiveCategory('packages')}
                    className={`py-2 px-6 rounded-md ${activeCategory === 'packages'
                            ? 'text-white bg-gray-700'
                            : 'text-gray-700 border border-gray-700'
                        }`}
                >
                    Package
                </button>
                <button
                    onClick={() => setActiveCategory('tickets')}
                    className={`py-2 px-6 rounded-md ${activeCategory === 'tickets'
                            ? 'text-white bg-gray-700'
                            : 'text-gray-700 border border-gray-700'
                        }`}
                >
                    Tickets
                </button>
                <button
                    onClick={() => setActiveCategory('cars')}
                    className={`py-2 px-6 rounded-md ${activeCategory === 'cars'
                            ? 'text-white bg-gray-700'
                            : 'text-gray-700 border border-gray-700'
                        }`}
                >
                    Car
                </button>
                <button
                    onClick={() => setActiveCategory('accommodations')}
                    className={`py-2 px-6 rounded-md ${activeCategory === 'accommodations'
                            ? 'text-white bg-gray-700'
                            : 'text-gray-700 border border-gray-700'
                        }`}
                >
                    Accommodation
                </button>
            </div>


            <div className="container mx-auto py-6 flex flex-row flex-wrap justify-around items-center">
                {dataToDisplay().map((destination) => (
                    <Card
                        key={destination.id}
                        imgUrl={destination.imgUrl}
                        title={destination.title}
                        description={destination.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Recommended;

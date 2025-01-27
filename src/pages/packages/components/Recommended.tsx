import { useState } from "react"
import Card from "../../../components/packages/Card"
import Img7 from "../../../assets/images/packages/cherry_blossom_in_shillong.png"
import Img8 from "../../../assets/images/packages/majuli.jpg"
import Img9 from "../../../assets/images/packages/meghalaya.png"
import Img10 from "../../../assets/images/packages/tawang.png"
import Img11 from "../../../assets/images/galleryImage/image7.jpg"
import Img12 from "../../../assets/images/galleryImage/image5.jpg"

const packagesData = [
    {
        id: 1,
        title: "Tezpur",
        description: "Tezpur was under the rule of the Koch dynasty in the 9th century, and later became a part of the Ahom kingdom in the 16th century. The Ahoms, known for their administrative prowess and patronage of art and culture, played a vital role in shaping Tezpur's heritage.",
        imgUrl: Img11,
        docLink: "https://en.wikipedia.org/wiki/Tezpur"
    },
    {
        id: 2,
        title: "Cherry Blossom In Shillong",
        description: "Every year, during mid-November, Shillong comes alive as cherry trees bloom, painting the city in soft shades of pink and white. This stunning natural display, paired with the comfortable weather, creates the perfect setting for visitors to explore the outdoors.",
        imgUrl: Img7,
        docLink: "https://en.wikipedia.org/wiki/Shillong_Cherry_Blossom_Festival"
    },
    {
        id: 3,
        title: "Majuli",
        description: "Majuli (Mazuli,) is a large river island located in Assam,(a north eastern state) India. It is formed by the Brahmaputra River to the south and east, the Subansiri River to the west, and an anabranch of the Brahmaputra River.",
        imgUrl: Img8,
        docLink: "https://en.wikipedia.org/wiki/Majuli"
    },
    {
        id: 4,
        title: "Meghalaya",
        description: "Meghalaya is a state in northeast India. Meghalaya was formed on 21 January 1972 by carving out two districts from the state of Assam:  the United Khasi Hills and Jaintia Hills and the Garo Hills. The estimated population of Meghalaya in 2014 was 3,211,474.",
        imgUrl: Img9,
        docLink: "https://en.wikipedia.org/wiki/Meghalaya"
    },
    {
        id: 5,
        title: "Tawang",
        description: "Tawang is a town and administrative headquarter of Tawang district in the Indian state of Arunachal Pradesh.It lies on NH-13 section of Trans-Arunachal Highway. The town was once the headquarter of the Tawang Tract, which is now divided into the Tawang district and the West Kameng district.",
        imgUrl: Img10,
        docLink: "https://en.wikipedia.org/wiki/Tawang"
    },
    {
        id: 6,
        title: "Sivasagar",
        description: "Sivasagar is a town and headquarter of the Sivasagar district, Assam. Sivasagar is situated about 360 kilometers (224 mi) northeast of Guwahati. It is well known for its Ahom palaces and monuments. Sivasagar is an important centre for tea and oil industries today.",
        imgUrl: Img12,
        docLink: "https://en.wikipedia.org/wiki/Sivasagar"
    },
];


const ticketsData = [
    {
        id: 1,
        title: "Tezpur",
        description: "Tezpur was under the rule of the Koch dynasty in the 9th century, and later became a part of the Ahom kingdom in the 16th century. The Ahoms, known for their administrative prowess and patronage of art and culture, played a vital role in shaping Tezpur's heritage.",
        imgUrl: Img11,
        docLink: "https://en.wikipedia.org/wiki/Tezpur"
    },
    {
        id: 2,
        title: "Cherry Blossom In Shillong",
        description: "Every year, during mid-November, Shillong comes alive as cherry trees bloom, painting the city in soft shades of pink and white. This stunning natural display, paired with the comfortable weather, creates the perfect setting for visitors to explore the outdoors.",
        imgUrl: Img7,
        docLink: "https://en.wikipedia.org/wiki/Shillong_Cherry_Blossom_Festival"
    },
    {
        id: 3,
        title: "Majuli",
        description: "Majuli (Mazuli,) is a large river island located in Assam,(a north eastern state) India. It is formed by the Brahmaputra River to the south and east, the Subansiri River to the west, and an anabranch of the Brahmaputra River.",
        imgUrl: Img8,
        docLink: "https://en.wikipedia.org/wiki/Majuli"
    },
    {
        id: 4,
        title: "Meghalaya",
        description: "Meghalaya is a state in northeast India. Meghalaya was formed on 21 January 1972 by carving out two districts from the state of Assam:  the United Khasi Hills and Jaintia Hills and the Garo Hills. The estimated population of Meghalaya in 2014 was 3,211,474.",
        imgUrl: Img9,
        docLink: "https://en.wikipedia.org/wiki/Meghalaya"
    },
    {
        id: 5,
        title: "Tawang",
        description: "Tawang is a town and administrative headquarter of Tawang district in the Indian state of Arunachal Pradesh.It lies on NH-13 section of Trans-Arunachal Highway. The town was once the headquarter of the Tawang Tract, which is now divided into the Tawang district and the West Kameng district.",
        imgUrl: Img10,
        docLink: "https://en.wikipedia.org/wiki/Tawang"
    },
    {
        id: 6,
        title: "Sivasagar",
        description: "Sivasagar is a town and headquarter of the Sivasagar district, Assam. Sivasagar is situated about 360 kilometers (224 mi) northeast of Guwahati. It is well known for its Ahom palaces and monuments. Sivasagar is an important centre for tea and oil industries today.",
        imgUrl: Img12,
        docLink: "https://en.wikipedia.org/wiki/Sivasagar"
    },
];

const carsData = [
    {
        id: 1,
        title: "Tezpur",
        description: "Tezpur was under the rule of the Koch dynasty in the 9th century, and later became a part of the Ahom kingdom in the 16th century. The Ahoms, known for their administrative prowess and patronage of art and culture, played a vital role in shaping Tezpur's heritage.",
        imgUrl: Img11,
        docLink: "https://en.wikipedia.org/wiki/Tezpur"
    },
    {
        id: 2,
        title: "Cherry Blossom In Shillong",
        description: "Every year, during mid-November, Shillong comes alive as cherry trees bloom, painting the city in soft shades of pink and white. This stunning natural display, paired with the comfortable weather, creates the perfect setting for visitors to explore the outdoors.",
        imgUrl: Img7,
        docLink: "https://en.wikipedia.org/wiki/Shillong_Cherry_Blossom_Festival"
    },
    {
        id: 3,
        title: "Majuli",
        description: "Majuli (Mazuli,) is a large river island located in Assam,(a north eastern state) India. It is formed by the Brahmaputra River to the south and east, the Subansiri River to the west, and an anabranch of the Brahmaputra River.",
        imgUrl: Img8,
        docLink: "https://en.wikipedia.org/wiki/Majuli"
    },
    {
        id: 4,
        title: "Meghalaya",
        description: "Meghalaya is a state in northeast India. Meghalaya was formed on 21 January 1972 by carving out two districts from the state of Assam:  the United Khasi Hills and Jaintia Hills and the Garo Hills. The estimated population of Meghalaya in 2014 was 3,211,474.",
        imgUrl: Img9,
        docLink: "https://en.wikipedia.org/wiki/Meghalaya"
    },
    {
        id: 5,
        title: "Tawang",
        description: "Tawang is a town and administrative headquarter of Tawang district in the Indian state of Arunachal Pradesh.It lies on NH-13 section of Trans-Arunachal Highway. The town was once the headquarter of the Tawang Tract, which is now divided into the Tawang district and the West Kameng district.",
        imgUrl: Img10,
        docLink: "https://en.wikipedia.org/wiki/Tawang"
    },
    {
        id: 6,
        title: "Sivasagar",
        description: "Sivasagar is a town and headquarter of the Sivasagar district, Assam. Sivasagar is situated about 360 kilometers (224 mi) northeast of Guwahati. It is well known for its Ahom palaces and monuments. Sivasagar is an important centre for tea and oil industries today.",
        imgUrl: Img12,
        docLink: "https://en.wikipedia.org/wiki/Sivasagar"
    },
];
const accommodationsData = [
    {
        id: 1,
        title: "Tezpur",
        description: "Tezpur was under the rule of the Koch dynasty in the 9th century, and later became a part of the Ahom kingdom in the 16th century. The Ahoms, known for their administrative prowess and patronage of art and culture, played a vital role in shaping Tezpur's heritage.",
        imgUrl: Img11,
        docLink: "https://en.wikipedia.org/wiki/Tezpur"
    },
    {
        id: 2,
        title: "Cherry Blossom In Shillong",
        description: "Every year, during mid-November, Shillong comes alive as cherry trees bloom, painting the city in soft shades of pink and white. This stunning natural display, paired with the comfortable weather, creates the perfect setting for visitors to explore the outdoors.",
        imgUrl: Img7,
        docLink: "https://en.wikipedia.org/wiki/Shillong_Cherry_Blossom_Festival"
    },
    {
        id: 3,
        title: "Majuli",
        description: "Majuli (Mazuli,) is a large river island located in Assam,(a north eastern state) India. It is formed by the Brahmaputra River to the south and east, the Subansiri River to the west, and an anabranch of the Brahmaputra River.",
        imgUrl: Img8,
        docLink: "https://en.wikipedia.org/wiki/Majuli"
    },
    {
        id: 4,
        title: "Meghalaya",
        description: "Meghalaya is a state in northeast India. Meghalaya was formed on 21 January 1972 by carving out two districts from the state of Assam:  the United Khasi Hills and Jaintia Hills and the Garo Hills. The estimated population of Meghalaya in 2014 was 3,211,474.",
        imgUrl: Img9,
        docLink: "https://en.wikipedia.org/wiki/Meghalaya"
    },
    {
        id: 5,
        title: "Tawang",
        description: "Tawang is a town and administrative headquarter of Tawang district in the Indian state of Arunachal Pradesh.It lies on NH-13 section of Trans-Arunachal Highway. The town was once the headquarter of the Tawang Tract, which is now divided into the Tawang district and the West Kameng district.",
        imgUrl: Img10,
        docLink: "https://en.wikipedia.org/wiki/Tawang"
    },
    {
        id: 6,
        title: "Sivasagar",
        description: "Sivasagar is a town and headquarter of the Sivasagar district, Assam. Sivasagar is situated about 360 kilometers (224 mi) northeast of Guwahati. It is well known for its Ahom palaces and monuments. Sivasagar is an important centre for tea and oil industries today.",
        imgUrl: Img12,
        docLink: "https://en.wikipedia.org/wiki/Sivasagar"
    },
];

const Recommended = () => {



    const [activeCategory,] = useState('packages');

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
        <div className="max-w-6xl m-auto flex flex-col items-center justify-center font-primary">
            <h1 className="font-secondary text-3xl pt-14">Packages</h1>




            <div className="container mx-auto py-6 flex flex-row flex-wrap justify-around items-center">
                {dataToDisplay().map((destination) => (
                    <Card
                        key={destination.id}
                        imgUrl={destination.imgUrl}
                        title={destination.title}
                        description={destination.description}
                        docLink={destination?.docLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Recommended;

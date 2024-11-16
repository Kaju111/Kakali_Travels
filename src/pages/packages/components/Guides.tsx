import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Img1 from "../../../assets/images/packages/guide/img1.jpg";
import Img2 from "../../../assets/images/packages/guide/img2.webp";
import Img3 from "../../../assets/images/packages/guide/img3.jpg";
import Img4 from "../../../assets/images/packages/guide/img4.webp";
import Img5 from "../../../assets/images/packages/guide/img5.jpg";
import Img6 from "../../../assets/images/packages/guide/img6.jpg";
import Img7 from "../../../assets/images/packages/guide/img7.jpg";
import Img8 from "../../../assets/images/packages/guide/img8.jpg";

const guidesData = [
    { id: 1, sec: "travel", title: "Tezpur", description: "Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho.", imgUrl: Img1 },
    { id: 2, sec: "booking", title: "Nagaon", description: "Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho.", imgUrl: Img2 },
    { id: 3, sec: "hotel", title: "Majuli", description: "Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho.", imgUrl: Img3 },
    { id: 4, sec: "stay", title: "Shillong", description: "Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho.", imgUrl: Img4 },
    { id: 5, sec: "car", title: "Shikim", description: "Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho.", imgUrl: Img5 },
    { id: 6, sec: "ticket", title: "Tawang", description: "Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho.", imgUrl: Img6 },
    { id: 7, sec: "package", title: "Shikim", description: "Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho.", imgUrl: Img7 },
    { id: 8, sec: "accommodation", title: "Tawang", description: "Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho. Hadii add garaneyso sida loo dabaasho.", imgUrl: Img8 },
];


const colorClasses = [
    'text-red-500 bg-red-500',
    'text-blue-500 bg-blue-500',
    'text-green-500 bg-green-500',
    'text-yellow-500 bg-yellow-500',
    'text-purple-500 bg-purple-500',
    'text-pink-500 bg-pink-500',
    'text-orange-500 bg-orange-500',
    'text-teal-500 bg-teal-500',
];

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Guides = () => {
    return (
        <div className="max-w-6xl m-auto px-4 flex flex-col items-center justify-center font-primary">
        <h1 className="font-secondary text-3xl pt-14">Stories, Tips, and Guides</h1>

        <Carousel responsive={responsive} infinite={true} className="w-full py-10">
            {guidesData.map((guide, index) => {
                const colorClass = colorClasses[index % colorClasses.length];
                const textColor = colorClass.split(' ')[0];
                const bgColor = colorClass.split(' ')[1];

                return (
                    <div key={guide.id} className="box w-full p-4">
                        <div className={`pro border shadow-md hover:shadow-lg transition-shadow flex flex-col ${bgColor}`}>
                            <img
                                src={guide.imgUrl}
                                alt={guide.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="des mt-4 p-4 flex-grow bg-white bg-opacity-90">
                                <div className='flex items-center gap-1'>
                                    <p className={`h-[5px] w-[5px] rounded-full ${bgColor}`}></p>
                                    <h1 className={`uppercase text-xs font-semibold ${textColor}`}>
                                        {guide.sec}
                                    </h1>
                                </div>
                                <h4 className="font-secondary text-xl mt-2">{guide.title}</h4>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    {guide.description}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Carousel>
    </div>
    );
};

export default Guides;

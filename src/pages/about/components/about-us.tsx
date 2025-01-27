
const AboutUs = () => {
    return (
        <div className="bg-gray-50 py-10">
            <div className="max-w-6xl mx-auto px-4 font-primary">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-800 font-secondary">Majestic North East India</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Discover the awe-inspiring landscapes, vibrant cultures, and unforgettable adventures awaiting you in the heart of India’s Northeast.
                    </p>
                </div>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4 font-secondary">Introduction</h2>
                    <p className="text-gray-700 leading-relaxed">
                        India, one of the world’s oldest civilizations, is a beautiful blend of diverse cultures, rich heritage, and natural wonders. From the snow-capped peaks of the Himalayas to the lush tropical rainforests, India offers an unmatched experience for travelers. With its northern boundary graced by the mighty Himalayas and surrounded by seas, this country promises endless opportunities for adventure and discovery.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4 font-secondary">Northeast India Highlights</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Northeast India, comprising the eight distinct states of Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, and Tripura, is a treasure trove of natural beauty and cultural heritage. This region offers everything from serene hill stations to vibrant tribal cultures, making it a must-visit for any traveler.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-secondary">Assam</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li><strong className='font-secondary'>Kaziranga National Park</strong>: A UNESCO World Heritage Site, renowned for its population of one-horned rhinos.</li>
                                <li><strong className='font-secondary'>Manas National Park</strong>: A biodiversity hotspot offering river rafting and birdwatching.</li>
                                <li><strong className='font-secondary'>Majuli Island</strong>: The world’s largest river island, home to vibrant Vaishnavite monasteries.</li>
                                <li><strong className='font-secondary'>Kamakhya Temple</strong>: A significant Hindu pilgrimage site dedicated to the goddess Kamakhya.</li>
                                <li>Explore the festivals of Bihu, lush tea gardens, and silk weaving in Sualkuchi.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-secondary">Meghalaya</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li><strong className='font-secondary'>Shillong</strong>: Known as the ‘Scotland of the East,’ famous for its charming waterfalls and gardens.</li>
                                <li><strong className='font-secondary'>Cherrapunji</strong>: Home to the living root bridges and spectacular waterfalls like Nohkalikai Falls.</li>
                                <li><strong className='font-secondary'>Clean Villages</strong>: Mawlynnong, Asia’s cleanest village, is a must-visit for eco-conscious travelers.</li>
                                <li>For adventure seekers, Dawki offers opportunities for trekking, caving, and river rafting.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-secondary">Nagaland</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li><strong className='font-secondary'>Kohima War Cemetery</strong>: A tribute to soldiers who fought in WWII.</li>
                                <li><strong className='font-secondary'>Dzukou Valley</strong>: Famous for its scenic meadows and excellent trekking trails.</li>
                                <li><strong className='font-secondary'>Hornbill Festival</strong>: A colorful celebration of Naga tribal culture, music, and dance.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-secondary">Arunachal Pradesh</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li><strong className='font-secondary'>Tawang Monastery</strong>: One of the largest Buddhist monasteries in India, perched in the mountains.</li>
                                <li><strong className='font-secondary'>Ziro Valley</strong>: Known for its Apatani tribal culture and annual Ziro Music Festival.</li>
                                <li><strong className='font-secondary'>Sela Pass</strong>: A high-altitude mountain pass with breathtaking views of snow-covered peaks.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-secondary">Manipur</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li><strong className='font-secondary'>Loktak Lake</strong>: Famous for its floating islands and endangered Sangai deer.</li>
                                <li><strong className='font-secondary'>Imphal</strong>: A historical city featuring the iconic Kangla Fort and Govindajee Temple.</li>
                                <li><strong className='font-secondary'>Keibul Lamjao National Park</strong>: The world’s only floating national park, home to the rare Sangai deer.</li>
                            </ul>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default AboutUs;

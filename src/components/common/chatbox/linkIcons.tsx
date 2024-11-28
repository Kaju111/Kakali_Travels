import Email from "../../../assets/images/icons/mail.png"
import Whatsapp from "../../../assets/images/icons/whatsapp.png"

const LinkIcons = () => {
    return (
        <div>
            <div className="">
                <div className='fixed bottom-24 z-10'>
                    <a href="mailto:contact@kakalitravels.com" className='transition-all duration-1000 -ml-20 hover:ml-0 py-1 flex items-center border-2 rounded-r-lg border-blue-500 px-4 gap-5 font-primary text-lg font-bold bg-gray-800 text-blue-500 hover:bg-blue-600  hover:text-white'>
                        <p>Email</p>
                        <div>
                            <img src={Email} alt='Email' width={40} height={40} />
                        </div>
                    </a>
                </div>
                <div className='fixed bottom-8 z-10'>

                    <a href="https://wa.me/919954977701"
                        target="_blank"
                        rel="noopener noreferrer" className='transition-all duration-1000 -ml-[120px] hover:ml-0 py-2 flex items-center border-2 rounded-r-lg border-green-500 px-4 gap-5 font-primary text-lg font-bold bg-gray-800 text-green-500 hover:bg-green-600  hover:text-white'>
                        <p>Whatsapp</p>
                        <div>
                            <img src={Whatsapp} alt='Whatsapp' width={40} height={40} />
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default LinkIcons;

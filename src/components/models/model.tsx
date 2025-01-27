import { useState } from "react";

interface ModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


function Modal({ open, setOpen }: ModalProps) {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone_number: '',
        email: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };


    const handleSubmit = () => {
        localStorage.setItem('username', `${formData.firstname} ${formData.lastname}`);
        localStorage.setItem('phone_number', formData.phone_number);
        localStorage.setItem('email', formData.email)

        setOpen(false);
    };


    const closeModal = () => setOpen(false);


    return (
        <div className='font-primary'>


            { open && (
                <div
                    className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="fixed inset-0"
                        onClick={ closeModal }
                    />


                    <div className="antialiased z-20">

                        <div className="w-full bg-grey-lightest" style={ { paddingTop: "4rem" } }>
                            <div className="container mx-auto py-8">
                                <div className="w-5/6 lg:w-full mx-auto bg-white rounded shadow">
                                    <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                                        Book Now
                                    </div>
                                    <div className="py-4 px-8">
                                        <div className="flex mb-4">
                                            <div className="w-full mr-1">
                                                <label
                                                    className="block text-grey-darker text-sm font-bold mb-2"
                                                    htmlFor="firstname"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                    id="firstname"
                                                    type="text"
                                                    value={ formData.firstname }
                                                    onChange={ handleInputChange }
                                                    placeholder="Your first name"
                                                />
                                            </div>
                                            <div className="w-full ml-1">
                                                <label
                                                    className="block text-grey-darker text-sm font-bold mb-2"
                                                    htmlFor="lastname"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                    id="lastname"
                                                    value={ formData.lastname }
                                                    onChange={ handleInputChange }
                                                    type="text"
                                                    placeholder="Your last name"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                className="block text-grey-darker text-sm font-bold mb-2"
                                                htmlFor="phone_number"
                                            >
                                                Contact Number
                                            </label>
                                            <input
                                                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                id="phone_number"
                                                type="tel"
                                                maxLength={ 10 }
                                                value={ formData.phone_number }
                                                onChange={ handleInputChange }
                                                placeholder="Your contact number"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                className="block text-grey-darker text-sm font-bold mb-2"
                                                htmlFor="email"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                id="email"
                                                value={ formData.email }
                                                onChange={ handleInputChange }
                                                type="email"
                                                placeholder="Your email address"
                                            />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <button className='bg-gray-700 px-11 py-1 text-white' onClick={ handleSubmit }>Submit</button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            ) }
        </div>
    );
}

export default Modal;

import React, { useState } from 'react';

function Modal() {
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <div className='font-primary'>
            <button
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={openModal}
                aria-controls="basic-modal"
            >
                Open Basic Modal
            </button>

            {open && (
                <div
                    className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="fixed inset-0"
                        onClick={closeModal}
                    />


                    <div className="antialiased z-20">

                        <div className="w-full bg-grey-lightest" style={{ paddingTop: "4rem" }}>
                            <div className="container mx-auto py-8">
                                <div className="w-5/6 lg:w-full mx-auto bg-white rounded shadow">
                                    <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                                        Register for a free account
                                    </div>
                                    <div className="py-4 px-8">
                                        <div className="flex mb-4">
                                            <div className="w-1/2 mr-1">
                                                <label
                                                    className="block text-grey-darker text-sm font-bold mb-2"
                                                    htmlFor="first_name"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                    id="first_name"
                                                    type="text"
                                                    placeholder="Your first name"
                                                />
                                            </div>
                                            <div className="w-1/2 ml-1">
                                                <label
                                                    className="block text-grey-darker text-sm font-bold mb-2"
                                                    htmlFor="last_name"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                    id="last_name"
                                                    type="text"
                                                    placeholder="Your last name"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                className="block text-grey-darker text-sm font-bold mb-2"
                                                htmlFor="email"
                                            >
                                                Contact Number
                                            </label>
                                            <input
                                                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                id="number"
                                                type="tel"
                                                maxLength={10}
                                                placeholder="Your email address"
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
                                                type="email"
                                                placeholder="Your email address"
                                            />
                                        </div>
                                        <div className='flex items-center justify-center'>

                                            <button className='bg-gray-700 px-11 py-1 text-white'> Submit</button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;

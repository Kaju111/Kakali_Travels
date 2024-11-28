import React, { useRef } from 'react';
import ContactImg from "../../assets/images/contact/contact.jpg";
import HeaderSection from '../../components/common/HeaderSection';
import { useMutation } from '@tanstack/react-query';
import { sendContactForm } from '../../api/images-api';
import toast from 'react-hot-toast';
import { ContactFormValues } from '../../utils/types';


const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const { mutate, isPending: mutating } = useMutation({
        mutationFn: sendContactForm,
        onSuccess(data) {
            if (data?.success) {
                toast.success(data?.message ?? "Submitted Successfully!");
                formRef.current?.reset();
            } else {
                toast(data?.message ?? "Something went wrong!")
            }
        },
        onError(error) {
            toast.error(error.message);
        },
    })


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as Record<string, string>;

        const formValues: ContactFormValues = {
            first_name: data.first_name || '',
            last_name: data.last_name || '',
            email: data.email || '',
            contact_number: data.contact_number || '',
            message: data.message || '' // Include the `message` field here
        };

        mutate(formValues);
    };


    return (
        <div>
            <HeaderSection
                img={ContactImg}
                title="Contact Us"
                desc="Do you want to enquire about our pricing, currect offers and arrangements we can help with? Give us a callor send in your concerns through the form below"
            />
            <div className="container px-4 max-w-6xl mx-auto">
                <div className="innerwrap">

                    <section className="section1 text-center mt-12">
                        <div className="text-center font-secondary mb-10">
                            <h1 className="border-b border-black w-9 mx-auto mt-5 mb-5"></h1>
                            <h1 className="text-3xl md:text-4xl font-normal">Drop Us a Mail</h1>
                        </div>
                    </section>

                    <section className="section2 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 font-primary">
                        <div className="col2 first">
                            <div className="sec2map overflow-hidden h-[300px] md:h-[450px] w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7220.88208979812!2d92.8385890236567!3d26.41637605442627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744e194c0000001%3A0x94860eb451345656!2sBukakhat!5e1!3m2!1sen!2sin!4v1731496480612!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        <div className="col2 last">
                            <div className="sec2innercont">
                                <div className="sec2addr mb-6">
                                    <p>Ward No 6,Bokakhat,Dist-Golagaht,785612</p>
                                    <p><span className="text-gray-500 mr-2 inline-block">Phone:</span> +91 9954977701</p>
                                    <p><span className="text-gray-500 mr-2 inline-block">Email:</span> contact@kakalitravels.com</p>
                                    <p><span className="text-gray-500 mr-2 inline-block">Fax:</span> +91 9954977701</p>
                                </div>

                                <div className="sec2contactform mt-6">
                                    <h3 className="sec2frmtitle text-xl mt-7 mb-4 pb-5 border-b border-gray-300">Want to Know More? Drop Us a Mail</h3>
                                    <form ref={formRef} onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input className="py-2 px-4 border border-gray-500 mb-3 w-full" type="text" name='first_name' placeholder="First Name" />
                                            <input className="py-2 px-4 border border-gray-500 mb-3 w-full" type="text" name='last_name' placeholder="Last Name" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input className="py-2 px-4 border border-gray-500 mb-3 w-full" name='email' type="email" placeholder="Email" />
                                            <input className="py-2 px-4 border border-gray-500 mb-3 w-full" maxLength={10} name='contact_number' type="tel" placeholder="Contact Number" />
                                        </div>
                                        <div>
                                            <textarea className="w-full p-4 border border-gray-500 mb-3" name='message' rows={4} placeholder="Your message here..."></textarea>
                                        </div>
                                        <div className="flex justify-center">
                                            <input className="py-2 px-20 bg-gray-700 text-white uppercase font-semibold cursor-pointer" type="submit" value={mutating ? "Sending..." : "Send"} disabled={mutating} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contact;


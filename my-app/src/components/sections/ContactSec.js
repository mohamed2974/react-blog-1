import React from 'react';

const ContactSec = () => {
    return (
        <section className="bg-gray-100 py-20 md:px-20 shadow-2xl">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
                <form className=" mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-between flex-wrap">
                    <div className='w-full md:w-[40%]' >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                required
                                minLength={3}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6 w-full md:w-[60%] pl-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-screen"
                            id="message"
                            rows="10"
                            placeholder="Your Message"
                            required
                            minLength={20}
                        ></textarea>
                    </div>
                    <div className='flex justify-center w-full'>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactSec;
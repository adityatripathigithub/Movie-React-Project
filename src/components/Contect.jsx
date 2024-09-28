import React from "react";

const Contact = () => {
    return (
        <div className=" min-h-screen w-screen p-8 ">
            <div className="max-w-4xl mx-auto">
                <header className="text-center bg-blue-900 text-zinc-300 p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                </header>
                <section className="mt-8 bg-zinc-900 p-6 rounded-lg shadow-lg">
                    <p className="text-gray-400 mb-4">We’d love to hear from you! If you have any questions, suggestions, or concerns, feel free to reach out.</p>
                    <h2 className="text-xl font-bold text-blue-900 mb-2">Customer Support</h2>
                    <p className="text-gray-400 mb-4">For any issues related to your account or technical support, contact us at:</p>
                    <p className="text-gray-400 font-bold">Email:</p>
                    <p className="text-gray-400 mb-4">tripathiaditya163@gmail.com</p>
                    <p className="text-gray-400 font-bold">Phone:</p>
                    <p className="text-gray-400 mb-4">+91-9993914321</p>

                    <h2 className="text-xl font-bold text-blue-900 mb-2">Media & Partnerships</h2>
                    <p className="text-gray-400 mb-4">For media inquiries or partnerships, contact:</p>
                    <p className="text-gray-400 font-bold">Email:</p>
                    <p className="text-gray-400 mb-4">tripathiaditya163@gmail.com</p>

                    <h2 className="text-xl font-bold text-blue-900 mb-2">General Feedback</h2>
                    <p className="text-gray-400 mb-4">We value your feedback and suggestions. Feel free to reach out at:</p>
                    <p className="text-gray-400 font-bold">Email:</p>
                    <p className="text-gray-400">tripathiaditya163@gmail.com</p>
                </section>
            </div>
        </div>
    );
};

export default Contact;

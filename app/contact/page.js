'use client'
import Navbar from '../../components/Navbar.js';
import { useState } from 'react';
import Button from '../../components/Button.js';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="bg-white text-gray-800">
            <Navbar />
            <main className="pt-24 pb-16">
                <section className="container mx-auto px-6">
                    <h1 className="text-5xl font-heading text-center mb-12">Contact Us</h1>
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-lg font-body mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-body mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-body mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <Button type="submit">Send Message</Button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ContactPage;
import { NotebookTabs } from 'lucide-react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const AnimatedSection = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true, });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls]);


    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}      // for initial load
            animate={controls}                   // for scroll-triggered
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

const faqs = [
    {
        q: "How can I upload a research paper to PaperPedia?",
        a: "You can upload a PDF directly or paste a DOI to automatically fetch the paper and metadata."
    },
    {
        q: "Does PaperPedia generate summaries automatically?",
        a: "Yes, our AI generates concise, accurate summaries along with topic tags to help you quickly understand any research paper."
    },
    {
        q: "Can I track citations or references across papers?",
        a: "Absolutely. PaperPedia maps citation graphs to show how papers are interconnected."
    },
    {
        q: "Is there a way to organize my papers into collections?",
        a: "Yes, you can create collections or folders to group related papers and add personal notes to each."
    },
    {
        q: "Do I need an account to use PaperPedia?",
        a: "Basic features are accessible without an account, but signing up unlocks paper history, custom collections, and syncing."
    }
];

const Contact = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(i === openIndex ? null : i);
    };

    return (
        <section className="relative min-h-[100vh] bg-white overflow-hidden px-6 text-center ">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img
                    src="/bgc.png"
                    alt="background"
                    className="w-full h-full object-cover"
                    style={{
                        maskImage: 'linear-gradient(to bottom, rgb(0, 0, 0), rgba(0,0,0,0))',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0))'
                    }}
                />
            </div>
            <AnimatedSection>
                <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center relative">
                    {/* Floating Button */}
                    <AnimatedSection>
                        <div className="flex gap-4 flex-wrap justify-center mb-[40px] z-1 mt-20">
                            <button
                                className="border text-[#787878] font-small py-1 px-4 rounded-lg text-xs bg-white border-[#f7e7cc] flex items-center gap-2"
                                style={{
                                    boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)'
                                }}
                            >
                                <NotebookTabs className="w-4 h-4 text-[#888]" /> Contact us
                            </button>
                        </div>


                        {/* Heading */}
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="text-[#444] mt-4 max-w-xl">
                            Empowering students and researchers with AI-driven tools to simplify, explore, and elevate academic discovery.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection>
                        {/* Form Box */}
                        <form className="bg-white rounded-2xl p-8 mt-10 w-full max-w-2xl shadow-sm space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="First name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" />
                                <input type="text" placeholder="Last name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" />
                                <input type="email" placeholder="Email address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" />
                                <input type="tel" placeholder="Phone number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" />
                            </div>
                            <textarea
                                placeholder="Your text"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="text-white py-2 px-6 rounded-lg text-sm font-medium hover:brightness-115 transition z-1" style={{
                                    backgroundImage: 'linear-gradient(180deg, #5baf99, #264940)'
                                }}
                            >
                                Submit
                            </button>

                        </form>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="mb-[20px] z-1 mt-20 flex flex-col items-center">
                            <button
                                className="border text-[#787878] font-small py-1 px-4 rounded-lg text-xs bg-white border-[#f7e7cc] flex items-center gap-2"
                                style={{
                                    boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)'
                                }}
                            >
                                Opening Times
                            </button>
                            <p className="mt-5 text-lg text-[#777]">
                                Monday - Saturday: <span className="text-black">8 a.m. - 6 p.m.</span>
                            </p>
                        </div>
                    </AnimatedSection>

                </div>
            </AnimatedSection>

            <div className="border-t border-gray-200 w-full max-w-7xl mx-auto"></div>
            <AnimatedSection>
                <div className="px-6 py-25 max-w-7xl mx-auto z-10 relative">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left */}
                        <div className="lg:w-1/3">
                            <div className="flex gap-4 flex-wrap justify-center mb-[40px] z-1">
                                <button
                                    className="border text-[#787878] font-small py-1 px-4 rounded-lg text-xs bg-white border-[#f7e7cc] flex items-center gap-2"
                                    style={{
                                        boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)'
                                    }}
                                >
                                    FAQ's
                                </button>
                            </div>
                            <h2 className="text-4xl font-semibold leading-tight">
                                Our Frequently Asked<br />Questions
                            </h2>
                        </div>

                        {/* Right */}
                        <div className="lg:w-2/3 space-y-4">
                            {faqs.map(({ q, a }, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <AnimatedSection key={i}>
                                        <div className="bg-[#fdf7f0] border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                            <button
                                                className={`w-full flex justify-between items-center px-6 py-5 transition-all duration-300 text-left ${isOpen ? "text-[#264940]" : "text-gray-800"}`}
                                                onClick={() => toggle(i)}
                                            >
                                                <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? "text-[#4d8e7d]" : "text-gray-800"}`}>
                                                    {q}
                                                </span>

                                                <motion.span
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-xl ml-4"
                                                >
                                                    ⌄
                                                </motion.span>
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        key="content"
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    >
                                                        <div className="px-6 pb-5 text-gray-700">{a}</div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </AnimatedSection>


            <div className="border-t border-gray-200 w-full max-w-7xl mx-auto"></div>

            <AnimatedSection>
                <div className="px-2 py-25 max-w-[1400px] mx-auto z-10 relative">
                    <h2 className="text-4xl font-semibold mb-4 text-left">Office location</h2>
                    <p className="text-gray-600 max-w-2xl mb-10 text-left">
                        We operate across India with a central office in Bengaluru. Whether you're in North or South India, our team is here to provide expert guidance and support. Feel free to reach out or visit us at our headquarters.
                    </p>

                    <div className="rounded-xl overflow-hidden shadow-md">
                        <div className="relative">
                            {/* Image */}
                            <img
                                src="/buildings.jpg"
                                alt="Bangalore office"
                                className="w-full h-[450px] object-cover filter brightness-[0.6]"
                            />

                            {/* Overlay Contact Info */}
                            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3 justify-start z-20">
                                <span className="bg-black/70 text-white text-sm px-4 py-2 rounded-md">
                                    +91 98765 43210
                                </span>
                                <span className="bg-black/70 text-white text-sm px-4 py-2 rounded-md">
                                    support@paperpedia.in
                                </span>
                                <span className="bg-black/70 text-white text-sm px-4 py-2 rounded-md">
                                    #42, MG Road, Bengaluru, KA 560001
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Contact;

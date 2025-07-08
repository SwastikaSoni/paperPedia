import React from 'react';
import { Instagram } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

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




const AboutComponent = () => {
    const stats = [
        { value: '1.2K+', label: 'Papers Summarized' },
        { value: '95%', label: 'User Satisfaction' },
        { value: '300+', label: 'Researchers Joined' },
        { value: '50+', label: 'Institutions Reached' },
        { value: '20+', label: 'AI Tools Integrated' },
        { value: '2025', label: 'Launched In' },
    ];

    const steps = [
        {
            number: '1',
            title: 'Discovery',
            description:
                'We begin by understanding your goals, background, and preferences. This helps us tailor your experience and suggestions.',
        },
        {
            number: '2',
            title: 'Smart Strategy',
            description:
                'Our AI suggests personalized pathways — summarizing, recommending, and tracking relevant academic papers.',
        },
        {
            number: '3',
            title: 'Implementation',
            description:
                'Start reading, saving, and discussing papers that align with your research — all in one place.',
        },
        {
            number: '4',
            title: 'Refinement & Insights',
            description:
                'We learn and evolve with you — optimizing suggestions and showing trends in your research journey.',
        },
    ];

    return (
        <section className="relative min-h-[100vh] bg-white overflow-hidden px-6 text-center mt-24">
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
                {/* Top Content */}
                <div className="relative z-10 pt-20">
                    <AnimatedSection>
                        <div className="flex gap-4 flex-wrap justify-center mb-[40px] z-1">
                            <button
                                className="border text-[#787878] font-small py-1 px-4 rounded-lg text-xs bg-white border-[#f7e7cc] flex items-center gap-2"
                                style={{
                                    boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)'
                                }}
                            >
                                <Instagram className="w-4 h-4 text-[#888]" /> About Us
                            </button>
                        </div>
                    </AnimatedSection>
                    <h1 className='text-5xl font-medium'>Get to know us</h1>
                    <p className="text-[#5c5c5c] text-[clamp(14px,3vw,15px)] mt-4 max-w-[600px] mx-auto z-1 font-normal">
                        At PaperPedia, we believe research should be accessible, insightful, and efficient. Our mission is to empower scholars, students, and curious minds with AI tools that simplify and enhance the way you read and explore academic content.
                    </p>
                    {/* Responsive Feature Tags */}
                    {/* Responsive Feature Tags with Rotation */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 justify-center max-w-4xl mx-auto">
                        {[
                            { text: 'Summaries', rotate: '-4deg' },
                            { text: 'Insight', rotate: '4deg' },
                            { text: 'Discovery', rotate: '-4deg' },
                            { text: 'Context', rotate: '4deg' },
                            { text: 'Citations', rotate: '-4deg' },
                            { text: 'Exploration', rotate: '4deg' },
                            { text: 'Navigation', rotate: '-4deg' },
                            { text: 'Trends', rotate: '4deg' }
                        ].map(({ text, rotate }, idx) => (
                            <div
                                key={idx}
                                className="bg-white shadow-md rounded px-3 py-1 text-xs xs:text-xs text-[#787878] border border-[#fcefda] text-center"
                                style={{
                                    transform: `rotate(${rotate})`
                                }}
                            >
                                {text}
                            </div>
                        ))}
                    </div>

                </div>
            </AnimatedSection>


            <AnimatedSection>
                {/* Two Column Layout */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-30 my-20 relative z-10">
                    {/* Left - Image */}
                    <AnimatedSection>
                        <div className="relative bg-[#2e7a66] rounded-2xl p-6 flex justify-center items-center overflow-hidden">
                            {/* Diamond fade layer */}
                            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(#ffffff1a_20%,transparent_21%)] [background-size:16px_16px]"
                                style={{
                                    maskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                                }}
                            />
                            <img
                                src="/center.png"
                                alt="Graph showing research progress"
                                className="rounded-lg z-10"
                            />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection>
                        {/* Right - Text Content */}
                        <div className="text-[#333] text-left px-4 md:px-10">
                            <div className="mb-4">
                                <span className="inline-block px-4 py-1 text-sm rounded-lg bg-white text-[#787878] font-small border border-[#f7e7cc] flex items-center gap-2" style={{
                                    boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)'
                                }}>
                                    What drives us
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-medium mb-4">
                                In a world where academic research can feel overwhelming and slow, we’re here to simplify it.
                            </h2>
                            <p className="text-[#666] mb-4">
                                Through intelligent summarization, smart discovery tools, and a vibrant research community, PaperPedia empowers you to dive deeper, faster — without the burnout.
                            </p>
                            <p className="text-[#666] mb-6">
                                Our mission is to help learners and researchers at every level navigate academic literature with clarity, insight, and confidence.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </AnimatedSection>



            <AnimatedSection>
                {/* Two Column Layout */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-20 my-20 relative z-10">
                    {/* Right - Text Content */}
                    <AnimatedSection>
                        <div className="text-[#333] text-left px-4 md:px-10">
                            <div className="mb-4">
                                <span className="inline-block px-4 py-1 text-sm rounded-lg bg-white text-[#787878] font-small border border-[#f7e7cc] flex items-center gap-2" style={{
                                    boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)'
                                }}>
                                    Our Values
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-medium mb-4">
                                What we stand for
                            </h2>
                            <p className="text-[#666] mb-4">
                                At the heart of PaperPedia lies a commitment to transforming the way knowledge is accessed, understood, and shared. Our values shape every tool we build and every experience we design — making academic research smarter, faster, and more meaningful.
                            </p>
                            {/* Progress Bars */}
                            <div className="space-y-5 mt-6">
                                {[
                                    { label: 'AI-Powered Innovation', value: 95 },
                                    { label: 'User-Centered Design', value: 90 },
                                    { label: 'Accuracy & Trust', value: 93 },
                                    { label: 'Openness & Collaboration', value: 88 },
                                ].map(({ label, value }, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[17px] font-normal text-[#1e1e1e]">{label}</span>
                                            <span className="text-[17px] font-medium text-[#1e1e1e]">{value}%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-200 rounded-full">
                                            <div
                                                className="h-1.5 bg-[#2e7a66] rounded-full"
                                                style={{ width: `${value}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Left - Image */}
                    <div className="relativerounded-2xl p-6 flex justify-center items-center overflow-hidden">
                        {/* Diamond fade layer */}
                        <div className="absolute inset-0 z-0 pointer-events-none"
                            style={{
                                maskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                            }}
                        />
                        <img
                            src="/about.png"
                            alt="About Us   "
                            className="rounded-lg z-10"
                        />
                    </div>
                </div>
            </AnimatedSection>


            <AnimatedSection>
                {/* Insights */}
                <div >
                    <hr className="border-t border-gray-200 mb-10" />
                    <div className="max-w-7xl mx-auto my-13 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10">
                        {stats.map(({ value, label }, i) => (
                            <div key={i}>
                                <h3 className="text-3xl font-semibold text-black">{value}</h3>
                                <p className="text-sm text-gray-600 mt-2">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection>
                <div className="max-w-7xl mx-auto my-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left Intro */}
                    <div className="bg-[#2e7a66] text-white rounded-2xl px-8 pt-8 flex flex-col justify-between col-span-1 relative">
                        <div>
                            <h2 className="text-2xl sm:text-xl font-semibold mb-4">
                                We believe learning should be intuitive and inspiring.
                            </h2>
                            <p className="text-sm sm:text-base font-light">
                                Academic progress starts with understanding key ideas, exploring context, and uncovering patterns. PaperPedia is here to simplify the path.
                            </p>
                        </div>
                        <img
                            src="/pic2.png"
                            alt="Progress graph on laptop"
                            className="mt-6 rounded-lg"
                        />
                    </div>
                    {/* Right Steps */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {steps.map(({ number, title, description }, i) => (
                            <div key={i} className="bg-[#fff8f4] p-6 rounded-xl shadow-sm border border-[#f0e9e0]">
                                <div className="w-8 h-8 bg-white shadow text-center font-medium rounded-md mb-3 text-[#444]">
                                    {number}
                                </div>
                                <h3 className="font-semibold text-lg text-[#222] mb-1 text-left">{title}</h3>
                                <p className="text-sm text-[#666] text-left">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default AboutComponent;

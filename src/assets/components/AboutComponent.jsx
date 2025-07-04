import React from 'react';
import { Instagram } from 'lucide-react';

const AboutComponent = () => {
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

            {/* Top Content */}
            <div className="relative z-10 pt-20">
                <div className="flex gap-4 flex-wrap justify-center mb-[40px] z-1">
                    <button
                        className="border text-[#787878] font-small py-2 px-4 rounded-lg text-xs bg-white border-[#f7e7cc] flex items-center gap-2"
                        style={{
                            boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)'
                        }}
                    >
                        <Instagram className="w-4 h-4 text-[#888]" /> About Us
                    </button>
                </div>

                <p className="text-[#5c5c5c] text-[clamp(14px,3vw,15px)] mt-4 max-w-[600px] mx-auto z-1 font-normal">
                    At PaperPedia, we believe research should be accessible, insightful, and efficient. Our mission is to empower scholars, students, and curious minds with AI tools that simplify and enhance the way you read and explore academic content.
                </p>
            </div>

            {/* Two Column Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-30 relative z-10">
                {/* Left - Image */}
                <div className="bg-[#2e7a66] rounded-2xl p-6 flex justify-center items-center">
                    <img
                        src="/graph-placeholder.png"
                        alt="Graph showing research progress"
                        className="rounded-lg shadow-xl"
                    />
                </div>

                {/* Right - Text Content */}
                <div className="text-[#333] text-left px-4 md:px-0">
                    <div className="mb-4">
                        <span className="inline-block px-4 py-1 text-sm rounded-full bg-white shadow-sm text-[#555]">
                            What drives us
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        In a world where academic research can feel overwhelming and slow, we’re here to simplify it.
                    </h2>
                    <p className="text-[#666] mb-4">
                        Through intelligent summarization, smart discovery tools, and a vibrant research community, PaperPedia empowers you to dive deeper, faster — without the burnout.
                    </p>
                    <p className="text-[#666] mb-6">
                        Our mission is to help learners and researchers at every level navigate academic literature with clarity, insight, and confidence.
                    </p>
                    <button className="px-5 py-2 rounded-md text-white font-medium" style={{
                        backgroundImage: 'linear-gradient(180deg, #5baf99, #264940)'
                    }}>
                        About PaperPedia
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutComponent;

import { Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    'Clarity', 'Reliability', 'Growth', 'Confidence',
    'Empowerment', 'Simplicity', 'Transparency', 'Expertise'
];

const Hero = () => {
    return (
        <section className="relative min-h-[100vh] bg-white overflow-hidden px-6 text-center">

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
            {/* Animated Content */}
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >

                {/* Top Content */}
                <div className="relative z-10 pt-37">
                    <div className="flex gap-4 flex-wrap justify-center mb-[60px] z-1">
                        <button
                            className="border text-[#787878] font-normal py-2 px-6 rounded-lg text-sm bg-white border-[#f7e7cc] flex items-center gap-2"
                            style={{
                                boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)'
                            }}
                        >
                            <Upload className="w-4 h-4 text-[#333]" /> Upload a Paper
                        </button>
                    </div>

                    {/* Title and Subtitle */}
                    <h1 className="text-[#333333] font-medium leading-snug text-[clamp(30px,5vw,45px)] max-w-[900px] mx-auto z-1">
                        Read Smarter. Discover Faster. Research Better.
                    </h1>
                    <p className="text-[#818181] text-[clamp(14px,3vw,15px)] mt-4 max-w-[600px] mx-auto z-1 font-light">
                        AI-powered companion for summarizing, exploring, and discussing academic papers.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-6 flex gap-4 flex-wrap justify-center z-1">
                        <button className="text-white py-2 px-6 rounded-lg text-sm font-medium hover:brightness-115 transition z-1" style={{
                            backgroundImage: 'linear-gradient(180deg, #5baf99, #264940)'
                        }}>
                            Start Exploring
                        </button>
                    </div>
                </div>

                {/* Floating Features & Center Image */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Floating Tags */}
                    {[
                        { text: 'Summarization', top: '5%', left: '10%', rotate: '-5deg' },
                        { text: 'Insight', top: '10%', left: '75%', rotate: '4deg' },
                        { text: 'Discovery', top: '25%', left: '18%', rotate: '2deg' },
                        { text: 'Context', top: '30%', left: '90%', rotate: '-3deg' },
                        { text: 'Citations', top: '45%', left: '25%', rotate: '-2deg' },
                        { text: 'Exploration', top: '50%', left: '77%', rotate: '3deg' },
                        { text: 'Navigation', top: '65%', left: '15%', rotate: '1deg' },
                        { text: 'Trends', top: '70%', left: '85%', rotate: '-1deg' }
                    ].map(({ text, top, left, rotate }, idx) => (
                        <div
                            key={idx}
                            className="absolute bg-white shadow-md rounded-md px-4 py-2 text-sm text-[#787878] border-[#fcefda]  border"
                            style={{
                                top,
                                left,
                                transform: `translateX(-50%) rotate(${rotate})`,
                                zIndex: 10,
                            }}
                        >
                            {text}
                        </div>
                    ))}

                    {/* Centered Image */}
                    <div className="relative w-full max-w-md z-20">
                        <img
                            src="/center.png"
                            alt="Example"
                            className="w-full object-contain drop-shadow-xl"
                        />
                    </div>
                </div>
            </motion.div>
        </section >
    );
};

export default Hero;

const Contact = () => {

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
            <div className="relative z-10 pt-20">
                {/* Floating Button */}
                <div className="absolute top-6">
                    <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-full shadow text-sm">
                        <span role="img" aria-label="discord">🎮</span> Contact us
                    </button>
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-bold mt-16">Get in touch</h1>
                <p className="text-[#444] mt-4 max-w-xl">
                    Nexoro empowers aspiring and experienced investors with expert-led
                    courses designed to build wealth and financial confidence.
                </p>

                {/* Form Box */}
                <form className="bg-white rounded-2xl p-8 mt-10 w-full max-w-2xl shadow-sm space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="First name" className="input-style" />
                        <input type="text" placeholder="Last name" className="input-style" />
                        <input type="email" placeholder="Email address" className="input-style" />
                        <input type="tel" placeholder="Phone number" className="input-style" />
                    </div>
                    <textarea
                        placeholder="Your text"
                        rows={4}
                        className="input-style resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-green-700 to-green-600 text-white font-medium py-2 px-6 rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

import { Linkedin, Github, Instagram, Phone, Camera } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-[#f0f0f0] py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo and Subscribe */}
                <div className="md:col-span-1 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Logo" className="h-18 w-auto" />
                        <h2 className="text-xl font-medium text-[#333]">PaperPedia</h2>
                    </div>
                    <p className="text-sm text-[#777]">Stay updated with latest features & research tips.</p>
                    <div className="flex gap-1">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="px-4 py-2 text-[#333] placeholder-gray-400 border-2 border-[#cdcdcd] focus:border-[#333] hover:border-[#a5a5a5] focus:outline-none w-full md:w-64  rounded-md text-sm w-2/3"
                        />
                        <button className="px-3 py-2 rounded-lg text-sm text-white font-medium hover:brightness-115 transition z-1" style={{
                            backgroundImage: 'linear-gradient(180deg, #5baf99, #264940)'
                        }}>
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2 text-sm text-[#999]">
                    <h3 className="font-medium text-[#333] text-lg mb-2">Navigation</h3>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/community">Community</a>
                    <a href="/help">Help</a>
                    <a href="/profile">Profile</a>
                </div>

                {/* Social */}
                <div className="flex flex-col gap-2 text-sm text-[#999]">
                    <h3 className="font-medium text-[#333] text-lg mb-2">Connect</h3>
                    <a href="https://linkedin.com" target="_blank" className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a href="https://github.com" target="_blank" className="flex items-center gap-2">
                        <Github className="w-4 h-4" /> GitHub
                    </a>
                    <a href="https://instagram.com" target="_blank" className="flex items-center gap-2">
                        <Instagram className="w-4 h-4" /> Instagram
                    </a>
                </div>

                {/* Address */}
                <div className="flex flex-col gap-2 text-sm text-[#999]">
                    <h3 className="font-medium text-[#333] text-lg mb-2">Contact</h3>
                    <p>123 Research Street<br />Paper City, AI 400001</p>
                    <p><Phone className="w-4 h-4" /> +919608532294</p>
                    <p><Camera className="w-4 h-4" /> support@paperpedia.com</p>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="mt-10 text-center text-xs text-[#999]">
                © 2025 PaperPedia. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
import React, { useState, useEffect } from "react";
import { Bell, Search, Menu } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 px-4 py-1 w-full flex items-center justify-between transition-all duration-300
                ${isScrolled ? 'bg-[#fff8f4] border-b border-[#fff6f1] shadow-sm' : 'bg-white border-b border-transparent'}`}
        >
            {/* Left Section - Logo */}
            <div className="flex items-center gap-4">
                <img src="/logo.png" alt="logo" className="h-16 w-auto" />
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu className="w-6 h-6 text-[#333]" />
                </button>
            </div>

            {/* Center - Nav Links */}
            <ul className="hidden md:flex gap-6 text-sm font-normal">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/profile" className="nav-link">Profile</Link></li>
                <li><Link to="/community" className="nav-link">Community</Link></li>
                <li><Link to="/help" className="nav-link">Help</Link></li>
            </ul>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                <div className={`relative ${isSearchOpen ? 'block' : 'hidden'} md:block`}>
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-10 py-2 rounded-lg text-[#333] placeholder-gray-400 
                        border-2 border-[#cdcdcd] focus:border-[#333] hover:border-[#a5a5a5] 
                        focus:outline-none w-full md:w-64"
                    />
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                </div>

                <button className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    <Search className="w-5 h-5 text-[#333]" />
                </button>

                <Bell className="text-gray-400 hover:text-[#cdcdcd] cursor-pointer w-6 h-6" />

                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover border-2 border-gray-400"
                />
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
                    <ul className="flex flex-col items-start gap-4 px-4 py-2">
                        <li><Link to="/" className="nav-link w-full">Home</Link></li>
                        <li><Link to="/about" className="nav-link w-full">About</Link></li>
                        <li><Link to="/profile" className="nav-link w-full">Profile</Link></li>
                        <li><Link to="/community" className="nav-link w-full">Community</Link></li>
                        <li><Link to="/help" className="nav-link w-full">Help</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

import React from "react";
import { Bell, Search } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="text-black px-3 py-1 flex items-center justify-between shadow">
            <div className="flex items-center gap-10">
                {/* Logo */}
                <img src="/public/logo.png" alt="logo" className="w-23 h-20" />

                {/* Navigation Links */}
                <ul className="flex gap-6 text-sm font-medium">
                    <li className="text-black">Dashboard</li>
                    <li className="hover:text-indigo-300 cursor-pointer">About</li>
                    <li className="hover:text-indigo-300 cursor-pointer">Profile</li>
                    <li className="hover:text-indigo-300 cursor-pointer">Community</li>
                    <li className="hover:text-indigo-300 cursor-pointer">Help</li>
                </ul>
            </div>

            {/* Right - Search + Icons */}
            <div className="flex items-center gap-6">
                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-800 text-white px-10 py-2 rounded-lg placeholder-gray-400 focus:outline-none"
                    />
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>

                {/* Notification Bell */}
                <Bell className="text-gray-400 hover:text-white cursor-pointer" />

                {/* Profile Avatar */}
                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover border-2 border-gray-700"
                />
            </div>
        </nav>
    );
};

export default Navbar;

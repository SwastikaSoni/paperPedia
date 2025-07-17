import { useState } from "react";
import { motion } from "framer-motion";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("saved");

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                <div className="flex items-center gap-6">
                    <img
                        src="https://i.pravatar.cc/100"
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-[#fdf7f0] shadow-md"
                    />
                    <div>
                        <h2 className="text-3xl font-semibold text-[#264940]">Swastika Soni</h2>
                        <p className="text-gray-600">swastika@example.com</p>
                        <p className="text-gray-600">IIT Madras · Machine Learning</p>
                        <button className="mt-3 px-4 py-2 text-sm rounded-lg bg-[#fdf7f0] border border-[#e7e7e7] shadow-sm hover:bg-[#fbeedb]">
                            ✏️ Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-gray-200">
                <button
                    className={`pb-2 px-4 text-sm font-medium ${activeTab === "saved" ? "border-b-2 border-[#264940] text-[#264940]" : "text-gray-500"}`}
                    onClick={() => setActiveTab("saved")}
                >
                    📚 Saved Papers
                </button>
                <button
                    className={`pb-2 px-4 text-sm font-medium ${activeTab === "notes" ? "border-b-2 border-[#264940] text-[#264940]" : "text-gray-500"}`}
                    onClick={() => setActiveTab("notes")}
                >
                    📝 My Notes
                </button>
                <button
                    className={`pb-2 px-4 text-sm font-medium ${activeTab === "collections" ? "border-b-2 border-[#264940] text-[#264940]" : "text-gray-500"}`}
                    onClick={() => setActiveTab("collections")}
                >
                    🗂️ Collections
                </button>
                <button
                    className={`pb-2 px-4 text-sm font-medium ${activeTab === "settings" ? "border-b-2 border-[#264940] text-[#264940]" : "text-gray-500"}`}
                    onClick={() => setActiveTab("settings")}
                >
                    ⚙️ Settings
                </button>
            </div>

            {/* Content */}
            {activeTab === "saved" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-[#fdf7f0] rounded-2xl p-5 shadow border border-[#f0e6d5]">
                            <h3 className="text-lg font-semibold mb-2 text-[#264940]">Paper Title #{i + 1}</h3>
                            <p className="text-sm text-gray-700 mb-3">Short summary of the research paper in 2-3 lines...</p>
                            <div className="flex gap-2 flex-wrap text-xs text-white mb-3">
                                <span className="bg-[#264940] px-2 py-1 rounded">NLP</span>
                                <span className="bg-[#264940] px-2 py-1 rounded">Transformer</span>
                            </div>
                            <div className="flex gap-4 text-sm text-[#264940]">
                                <button className="hover:underline">🔍 View</button>
                                <button className="hover:underline">📥 Download</button>
                                <button className="hover:underline text-red-500">🗑️ Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "notes" && (
                <div className="space-y-6">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-[#fdf7f0] p-5 rounded-xl shadow border border-[#f0e6d5]">
                            <h4 className="text-md font-semibold mb-2 text-[#264940]">Notes for Paper #{i + 1}</h4>
                            <textarea
                                placeholder="Write your notes or summary here..."
                                rows="5"
                                className="w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "collections" && (
                <div className="grid md:grid-cols-3 gap-6">
                    {['Thesis 2025', 'To Read This Week', 'Citation Demos'].map((name, i) => (
                        <div key={i} className="bg-[#fdf7f0] rounded-xl p-6 shadow border border-[#f0e6d5]">
                            <h4 className="text-lg font-semibold mb-2 text-[#264940]">📁 {name}</h4>
                            <p className="text-sm text-gray-600 mb-4">{Math.floor(Math.random() * 10) + 1} papers</p>
                            <button className="text-sm text-[#264940] hover:underline">📂 View Folder</button>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "settings" && (
                <div className="space-y-6 max-w-xl">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Change Password</label>
                        <input type="password" placeholder="New password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300" />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium">Notification Preferences</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300">
                            <option>Email Alerts</option>
                            <option>Mobile Push</option>
                            <option>None</option>
                        </select>
                    </div>
                    <button className="px-4 py-2 rounded bg-red-100 text-red-700 hover:bg-red-200">Delete Account</button>
                </div>
            )}
        </div>
    );
}

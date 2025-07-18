import React, { useState } from 'react';

const CommunityPage = () => {
    const [search, setSearch] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [sortBy, setSortBy] = useState('recent');

    const discussions = [
        {
            title: "Any lightweight BERT alternative for edge inference?",
            author: "Arjun M.",
            timestamp: "2 hours ago",
            tags: ["NLP", "Edge AI"],
            content: "Looking for something faster than DistilBERT on edge devices...",
        },
        {
            title: "Best datasets for cancer gene expression?",
            author: "Neha R.",
            timestamp: "1 day ago",
            tags: ["Cancer Research", "Genomics"],
            content: "I'm working on cancer classification and need gene expression datasets...",
        },
    ];

    const popularTags = ["NLP", "Transformer", "Bioinformatics", "Quantum ML", "LLMs"];

    return (
        <div>
            <section className="relative min-h-[60vh] bg-white overflow-hidden px-6 text-center ">
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
                    <div className="flex gap-4 flex-wrap justify-center mb-[40px] z-1 mt-20">
                        <button
                            className="border text-[#787878] font-small py-1 px-4 rounded-lg text-xs bg-white border-[#f7e7cc] flex items-center gap-2"
                            style={{
                                boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)'
                            }}
                        >
                            Community
                        </button>
                    </div>
                    <h1 className='text-5xl font-medium'>Join the Research Conversation</h1>
                    <p className="text-[#5c5c5c] text-[clamp(14px,3vw,15px)] mt-4 max-w-[600px] mx-auto z-1 font-normal">
                        Dive into discussions, ask questions, and share insights with fellow researchers. The PaperPedia community is where ideas meet collaboration — connecting scholars across fields to solve problems, share resources, and grow together.
                    </p>

                </div>

            </section>
            <div className="max-w-7xl mx-auto px-6 py-25">
                {/* Top Search & Filter Bar */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="Search discussions..."
                        className="w-full md:w-1/2 border px-4 py-2 rounded-md"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className="flex gap-4 items-center">
                        <select
                            className="border px-3 py-2 rounded-md"
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.target.value)}
                        >
                            <option value="">All Tags</option>
                            {popularTags.map((tag, i) => (
                                <option key={i} value={tag}>{tag}</option>
                            ))}
                        </select>

                        <select
                            className="border px-3 py-2 rounded-md"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="recent">Recent</option>
                            <option value="popular">Popular</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Discussion Feed */}
                    <div className="flex-1 space-y-6">
                        {discussions.map((d, i) => (
                            <div
                                key={i}
                                className="border border-gray-200 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-semibold text-[#264940]">{d.title}</h3>
                                    <span className="text-sm text-gray-400">{d.timestamp}</span>
                                </div>
                                <p className="text-gray-600 mb-2">{d.content}</p>
                                <div className="flex gap-3 text-sm text-gray-500 flex-wrap">
                                    {d.tags.map((tag, j) => (
                                        <span key={j} className="bg-gray-100 px-2 py-1 rounded-full">#{tag}</span>
                                    ))}
                                </div>
                                <div className="mt-3 flex gap-4 text-sm text-gray-600">
                                    <button className="hover:text-green-600">👍 Upvote</button>
                                    <button className="hover:text-blue-600">💬 Comment</button>
                                    <button className="hover:text-yellow-600">🔖 Bookmark</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar - Popular Tags */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        <div className="bg-[#fdf7f0] p-4 rounded-xl border">
                            <h4 className="font-semibold text-lg mb-3">Popular Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {popularTags.map((tag, i) => (
                                    <button
                                        key={i}
                                        className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm hover:bg-[#264940] hover:text-white transition"
                                        onClick={() => setSelectedTag(tag)}
                                    >
                                        #{tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className="w-full bg-[#264940] text-white py-3 rounded-xl shadow hover:bg-[#1b3630] transition">
                            🧠 Ask a Question / Start Discussion
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;

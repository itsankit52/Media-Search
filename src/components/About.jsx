import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
            <div className="max-w-3xl mx-auto px-4 sm:px-4 py-2 sm:py-2 lg:py-2">

                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-10 animate-slideUp">
                    <div className="inline-block mb-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        About Media Scope
                    </h1>

                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-3 rounded-full"></div>
                </div>

                {/* Content Cards */}
                <div className="space-y-4">
                    {/* Introduction Card */}
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 animate-slideUp">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">👋</span>
                            <p className="text-gray-700">
                                Hi, I'm <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-s">Ankit Thakur</span>
                            </p>
                        </div>
                    </div>

                    {/* Project Overview Card */}
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 animate-slideUp">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">🎯</span>
                            <h2 className="font-semibold text-gray-800">Project Overview</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            I developed <span className="font-semibold text-black">Media Scope</span>, a modern and user-friendly web application
                            that allows users to search and explore images, GIFs, and videos from across the web in real time.
                            This project provides a fast, clean, and visually engaging platform for discovering media content effortlessly.
                        </p>
                    </div>

                    {/* Tech Stack Card */}
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 animate-slideUp">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">⚙️</span>
                            <h2 className="font-semibold text-gray-800">Tech Stack</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            This application is built using a powerful frontend stack including
                            <span className="font-semibold text-black"> HTML, CSS, Tailwind CSS, JavaScript, React.js, and Redux Toolkit</span>.
                            For fetching real-time data, I used APIs integrated through <span className="font-semibold text-black">Axios</span>.
                        </p>

                     
                    </div>

                    {/* Features Card */}
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 animate-slideUp">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">✨</span>
                            <h2 className="font-semibold text-gray-800">Key Features</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-2">
                            Media Scope focuses on performance, scalability, and responsive design.
                            It ensures a smooth experience across all devices — whether mobile, tablet, or desktop.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 gap-1.5 mt-2">
                            {['🔍 Real-time Search', '📸 Images, Gifs, and Videos', '💾 Save Collection', '📱 Fully Responsive'].map((feature, index) => (
                                <div key={index} className="flex items-center gap-1 text-gray-600 text-xs sm:text-sm">
                                    <span className="text-blue-500">•</span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Future Updates Card */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 animate-slideUp">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">🚀</span>
                            <h2 className="font-semibold text-gray-800">Future Updates</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            I am continuously working on improving this platform and will keep updating this website
                            with new features, better performance, and enhanced user experience in the future.
                        </p>
                    </div>
                    <div>
                        {/* Back button */}
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-gray-100 active:scale-95"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Back
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default About
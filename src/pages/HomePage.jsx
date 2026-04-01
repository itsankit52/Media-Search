import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'

const HomePage = () => {
    const { query } = useSelector((store) => store.search)

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-300 via-white to-gray-300 animate-fadeIn">
            {/* Navbar (Full Width + Sticky with Glassmorphism) */}
            <div className="w-full bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-200/50 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4 sm:py-5">
                        {/* Logo with Animation */}
                        <Link to="/" className="group">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 transform">
                                Media Scope
                            </h2>
                            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"></div>
                        </Link>

                        {/* Navigation Links */}
                        <div className="flex gap-3 sm:gap-4 lg:gap-6">
                            <Link
                                to="/about"
                                className="relative px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold text-gray-700 hover:text-white transition-all duration-300 rounded-xl overflow-hidden group active:scale-90"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    Description
                                </span>
                            </Link>

                            <Link
                                to="/collection"
                                className=" relative px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold text-gray-700 hover:text-white transition-all duration-300 rounded-xl overflow-hidden group  active:scale-90"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                    </svg>
                                    Collection
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Section (Full Width Content) */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                {/* Search Bar with Enhanced Styling */}
                <div className="flex justify-center transform transition-all duration-500 hover:scale-[1.01]">
                    <div className="w-full max-w-3xl">
                        <SearchBar />
                    </div>
                </div>

                {/* Tabs + Results with Smooth Animation */}
                {query?.trim() && (
                    <div className="mt-8 sm:mt-10 lg:mt-12 space-y-6 sm:space-y-8 animate-slideUp">
                        <div className="transform transition-all duration-500">
                            <Tabs />
                        </div>
                        <div className="transform transition-all duration-500 delay-150">
                            <ResultGrid />
                        </div>
                    </div>
                )}

                {/* Empty State with Animation */}
                {!query?.trim() && (
                    <div className="flex flex-col items-center justify-center mt-16 sm:mt-20 lg:mt-24 animate-fadeIn">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            <svg className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-gray-300 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-700">Start Your Search</h3>
                        <p className="mt-2 text-sm sm:text-base text-gray-500 text-center max-w-md">
                            Enter a keyword to discover amazing images, Gifs, and videos from around the web
                        </p>
                        <div className="mt-8 flex gap-3">
                            <div className="px-4 py-2 bg-gray-100 rounded-full text-xs text-gray-600">🎨 Images</div>
                            <div className="px-4 py-2 bg-gray-100 rounded-full text-xs text-gray-600">🎬 Videos</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage
import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { Link } from 'react-router-dom'

const CollectionPage = () => {
  const collection = useSelector(state => state.collection.items)

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 animate-fadeIn">
      {/* Navbar (Full Width + Sticky with Glassmorphism) */}
      <div className="w-full bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-5">
            {/* Logo with Animation and Back Link */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-gray-700 group-hover:text-blue-600 transition-colors duration-300 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 transform origin-left">
                  Media Scope
                </h2>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"></div>
              </div>
            </Link>

            {/* Optional: Add a back button for mobile */}
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 rounded-lg hover:bg-gray-100 active:scale-90"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12 animate-slideUp">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Your Collections
                </h1>
              </div>
              <p className="text-sm sm:text-base text-gray-500 ml-4">
                {collection.length === 0
                  ? "Start building your media library"
                  : `You have ${collection.length} item${collection.length !== 1 ? 's' : ''} saved`}
              </p>
            </div>
          </div>
        </div>

        {/* Collections Grid */}
        {collection.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 animate-fadeIn">
            {collection.map((item, index) => (
              <div
                key={index}
                className="transform transition-all duration-500 hover:scale-[1.02] animate-slideUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CollectionCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State with Animation */
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 animate-fadeIn">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-full p-6 sm:p-8 shadow-xl">
                <svg className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
            </div>
            <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold text-gray-700">No collections yet</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-500 text-center max-w-md">
              Start saving your favorite images, and videos from the search page
            </p>
            <Link
              to="/"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              Start Searching
            </Link>

            {/* Tips Section */}
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3">
              <div className="px-3 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600 flex items-center gap-1"> Search for media
              </div>
              <div className="px-3 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600 flex items-center gap-1">Save to collection
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Optional: Floating Action Button for Mobile (if you want to add functionality) */}
      {collection.length > 0 && (
        <div className="fixed bottom-6 right-6 sm:hidden">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default CollectionPage
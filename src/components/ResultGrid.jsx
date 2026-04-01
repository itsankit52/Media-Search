import { useState, useEffect } from 'react'
import { fetchGifs, fetchPhoto, fetchVideo } from '../api/mediaapi'
import { setLoading, setError, setResults } from '../redux/features/SearchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'
const ResultGrid = () => {
    const dispatch = useDispatch()

    const { query, activeTab, result, loading, error } = useSelector((store) => store.search)

    const [page, setPage] = useState(1);
    //// eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setPage(1);
    }, [query, activeTab]);

    useEffect(() => {
        if (!query) return

        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []
                if (activeTab === 'photos') {
                    let res = await fetchPhoto(query, page)
                    data = res.results.map((item) => ({
                        id: item.id,
                        title: item.alt_description,
                        type: 'photo',
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        user: item.user?.name,
                        likes: item.likes
                    }))
                }

                if (activeTab === "gifs") {
                    data = await fetchGifs(query);
                }

                if (activeTab === 'videos') {
                    let res = await fetchVideo(query, page)
                    data = res.videos.map((item) => ({
                        id: item.id,
                        title: item.user.name || 'Video',
                        type: 'video',
                        thumbnail: item.image,
                        src: item.video_files?.[0]?.link,
                        user: item.user?.name,
                        duration: item.duration,
                        likes: item.likes
                    }))
                }

                dispatch(setResults(
                    page === 1 ? data : [...(result || []), ...data]
                ))
            } catch (err) {
                dispatch(setError(err.message))
            }
        }

        getData()
    }, [query, activeTab, page, dispatch])

    // Error UI with Animation
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] animate-fadeIn">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <div className="relative bg-white rounded-full p-6 shadow-xl">
                        <svg className="w-16 h-16 sm:w-20 sm:h-20 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <h1 className="mt-6 text-lg sm:text-xl font-semibold text-gray-700">
                    Something went wrong
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-500 text-center max-w-md">
                    {error || 'Unable to fetch results. Please try again.'}
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-6 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                    Try Again
                </button>
            </div>
        )
    }

    // Loading UI with Skeleton
    if (loading) {
        return (
            <div className="w-full px-2 sm:px-4 md:px-6 lg:px-2 animate-fadeIn">
                {/* Results Header Skeleton */}
                <div className="mb-6 flex justify-between items-center">
                    <div className="h-6 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="h-6 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>

                {/* Grid Skeleton */}
                <div className="
                    grid 
                    grid-cols-2
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    xl:grid-cols-5 
                    gap-4 sm:gap-5 lg:gap-6
                ">
                    {[...Array(10)].map((_, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl overflow-hidden shadow-md animate-pulse"
                        >
                            <div className="aspect-square bg-gray-200"></div>
                            <div className="p-3 space-y-2">
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // Empty Results State
    if (result.length === 0 && query) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] animate-fadeIn">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-2xl opacity-20"></div>
                    <div className="relative bg-white rounded-full p-6 shadow-xl">
                        <svg className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <h1 className="mt-6 text-lg sm:text-xl font-semibold text-gray-700">
                    No results found
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-500 text-center max-w-md">
                    We couldn't find any {activeTab} for "{query}". Try searching with different keywords.
                </p>
                <div className="mt-6 flex gap-3">
                    <div className="px-4 py-2 bg-gray-100 rounded-full text-xs text-gray-600">Try "nature"</div>
                    <div className="px-4 py-2 bg-gray-100 rounded-full text-xs text-gray-600">Try "Animals"</div>
                    <div className="px-4 py-2 bg-gray-100 rounded-full text-xs text-gray-600">Try "Flowers"</div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-2 animate-fadeIn">
            {/* Results Header with Count */}
            {result.length > 0 && (
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 animate-slideUp">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                            {
                                activeTab === 'photos'
                                    ? '📸 Photos'
                                    : activeTab === 'videos'
                                        ? '🎬 Videos'
                                        : '🎞️ GIFs'
                            }
                        </h2>
                    </div>
                    <div className="text-sm text-gray-500">
                        Found <span className="font-semibold text-blue-600">{result.length}</span> results
                    </div>
                </div>
            )}

            {/* Responsive Grid with Staggered Animation */}
            <div className="
                grid 
                grid-cols-2
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5 
                gap-4 sm:gap-5 lg:gap-6
            ">
                {result.map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        className="animate-slideUp"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <ResultCard item={item} />
                    </div>
                ))}
            </div>

            {/* Load More Button (Optional) */}
            {result.length > 0 && result.length >= 20 && (
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={() => setPage((prev) => prev + 1)}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer text-white rounded-xl active:scale-90"
                    >
                        Load More
                    </button>
                </div>
            )
            }
        </div >
    )
}

export default ResultGrid
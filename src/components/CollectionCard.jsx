import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removetoast } from '../redux/features/CollectionSlice';

const CollectionCard = ({ item }) => {
    const [isRemoving, setIsRemoving] = useState(false)
    const dispatch = useDispatch()

    const removefromCollection = (item) => {
        setIsRemoving(true)
        dispatch(removeCollection(item))
        dispatch(removetoast())
        
        // Reset after animation
        setTimeout(() => setIsRemoving(false), 300)
    }

    return (
        <div className={`
            bg-white 
            rounded-xl 
            overflow-hidden 
            shadow-md 
            hover:shadow-xl 
            transition-all 
            duration-300 
            group
            transform
            hover:-translate-y-1
            ${isRemoving ? 'animate-fadeOut scale-95' : ''}
        `}>
            {/* Media Container */}
            <div className="relative w-full h-40 sm:h-40 md:h-40 lg:h-40 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {/* Type Badge */}
                <div className="absolute top-3 left-3 z-10">
                    <span className="
                        px-2 py-1 
                        text-xs font-semibold 
                        bg-black/60 
                        backdrop-blur-sm
                        text-white 
                        rounded-lg 
                        flex items-center gap-1
                        shadow-lg
                    ">
                        {item.type === 'photo' ? (
                            <>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Photo
                            </>
                        ) : (
                            <>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Video
                            </>
                        )}
                    </span>
                </div>

                {/* Media Content */}
                {item.type === 'photo' && (
                    <img
                        src={item.thumbnail}
                        alt={item.title || "Untitled"}
                        className="
                            w-full h-full object-cover 
                            group-hover:scale-110 
                            transition-transform 
                            duration-500
                            ease-out
                        "
                        loading="lazy"
                    />
                )}

                {item.type === 'video' && (
                    <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="
                            w-full h-full object-cover 
                            group-hover:scale-110 
                            transition-transform 
                            duration-500
                        "
                    />
                )}
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4 flex flex-direction-col gap-2">
                {/* Title with Icon */}
                <div className="flex items-start gap-2">
                    {item.type === 'photo' ? (
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    )}
                    <h1 className="
                        text-sm sm:text-base 
                        font-semibold 
                        text-gray-800 
                        line-clamp-2
                        flex-1
                    ">
                        {item.title || "Untitled"}
                    </h1>
                </div>

                {/* Remove Button */}
                <button
                    onClick={() => removefromCollection(item)}
                    disabled={isRemoving}
                    className="
                        w-full 
                        mt-2
                        flex items-center justify-center gap-2
                        bg-gradient-to-r 
                        from-red-500 
                        to-pink-600
                        hover:from-red-600
                        hover:to-pink-700
                        text-white 
                        px-4 sm:px-5 
                        py-2 
                        text-sm sm:text-base 
                        font-semibold 
                        rounded-lg 
                        cursor-pointer
                        transition-all 
                        duration-300
                        transform
                        hover:scale-105
                        active:scale-95
                        shadow-md 
                        hover:shadow-lg
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                        disabled:hover:scale-100
                    "
                >
                    {isRemoving ? (
                        <>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>Removing...</span>
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <span>Remove</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}

export default CollectionCard
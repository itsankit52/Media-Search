import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addtoast } from '../redux/features/CollectionSlice'

const ResultCard = ({ item }) => {

    const dispatch = useDispatch()
    const addToCollection = (item) => {

        dispatch(addCollection(item))
        dispatch(addtoast())

    }
    return (
        <div className="
            bg-white 
            rounded-xl 
            overflow-hidden 
            shadow-md 
            hover:shadow-xl 
            transition-all duration-300 
            group
            flex flex-col h-full 
        ">

            {/* Media */}
            <div className="w-full h-40 sm:h-40 md:h-40 lg:h-40 overflow-hidden">
                {item.type === 'photo' && (
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="
                            w-full h-full object-cover 
                            group-hover:scale-105 
                            transition-transform duration-300
                        "
                    />
                )}
                {item.type === 'gif' && (
                    <img
                        src={item.src}
                        alt="gif"
                        className="w-full h-full object-cover"
                    />
                )}
                {item.type === 'video' && (
                    <video
                        src={item.src}
                        autoPlay
                        muted
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4 flex flex-col gap-2">

                {/* Title */}
                <h1 className="
                    text-sm sm:text-base 
                    font-semibold 
                    text-gray-800 
                    line-clamp-2
                ">
                    {item.title || "Untitled"}
                </h1>

                {/* Button */}
                <button
                    onClick={() => {
                        addToCollection(item)
                    }}
                    className="
                    w-full 
                    sm:w-auto 
                    self-start
                    flex items-center justify-center
                    bg-blue-500 
                    hover:bg-blue-600 
                    text-white 
                    px-4 sm:px-5 
                    py-1.5 
                    text-sm sm:text-base 
                    font-medium 
                    rounded-lg 
                    cursor-pointer
                    transition-all duration-200 
                    active:scale-95
                    shadow-md hover:shadow-lg
                ">
                    Save
                </button>

            </div>
        </div>
    )
}

export default ResultCard
import React from 'react'


const ResultCard = ({ item }) => {
    const addToCollection = (item) => {

        const oldData = JSON.parse(localStorage.getItem('collection')) || []
        console.log(oldData);
        // console.log(item);

        const newData = [...oldData, item]
        // console.log(newData);
        localStorage.setItem('collection', JSON.stringify(newData))
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
        ">

            {/* Media */}
            <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
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

                {item.type === 'video' && (
                    <video
                        src={item.src}
                        autoPlay
                        loop
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
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/SearchSlice'

const Tabs = () => {
    const tabs = useMemo(() => [
        { id: 'photos', label: 'Photos', icon: '📷' },
        { id: 'videos', label: 'Videos', icon: '📹' },
        { id: 'gifs', label: 'GIFs', icon: '🎞️' }
    ], [])

    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

    // 🔥 Dynamic slider position
    const activeIndex = tabs.findIndex(tab => tab.id === activeTab)

    // Handle case where activeTab doesn't exist in tabs
    const isValidTab = activeIndex !== -1

    return (
        <div className="w-full flex justify-center">
            <div className="
                relative
                flex 
                bg-gray-100/80 
                backdrop-blur-sm
                p-1.5 
                rounded-2xl 
                gap-1.5 
                w-full 
                max-w-md
                shadow-lg
                border
                border-gray-200/50
            ">
                {/*Animated Slider - Only render if tab is valid */}
                {isValidTab && (
                    <div
                        className="absolute top-1.5 bottom-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl transition-all duration-300 ease-out"
                        style={{
                            transform: `translateX(calc(${activeIndex} * (100% + 6px)))`, // Accounts for gap
                            width: `calc(${100 / tabs.length}% - ${(tabs.length - 1) * 6 / tabs.length}px)` // Accounts for gaps
                        }}
                    />
                )}

                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => dispatch(setActiveTab(tab.id))}
                        className={`
                            group
                            relative
                            flex-1 
                            py-2.5 sm:py-3.5 
                            text-sm sm:text-base 
                            font-semibold 
                            rounded-xl 
                            transition-all 
                            duration-300
                            uppercase
                            flex
                            items-center
                            justify-center
                            gap-2
                            z-10
                            cursor-pointer
                            focus:outline-none
                            focus:ring-offset-1
                            ${activeTab === tab.id
                                ? 'text-white scale-[0.98]'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'}
                        `}
                        aria-pressed={activeTab === tab.id}
                        aria-label={`Switch to ${tab.label} tab`}
                    >
                        <span className="text-base sm:text-lg transition-transform duration-300 group-hover:scale-110 inline-block">
                            {tab.icon}
                        </span>

                        <span className="hidden sm:inline">
                            {tab.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Tabs
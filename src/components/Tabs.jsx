import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/SearchSlice'

const Tabs = () => {
    const tabs = [
        { id: 'photos', label: 'Photos', icon: '🖼️' },
        { id: 'videos', label: 'Videos', icon: '🎬' }
    ]
    const dispatch = useDispatch()
    const activetab = useSelector((state) => state.search.activetab)

    return (
        <div className="w-full flex justify-center animate-fadeIn">
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
                {/* Animated Background Slider */}
                <div 
                    className="absolute top-1.5 bottom-1.5 w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl transition-all duration-300 ease-out shadow-md"
                    style={{
                        transform: `translateX(${activetab === 'photos' ? '0%' : '100%'})`,
                        width: 'calc(50% - 6px)'
                    }}
                />

                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => dispatch(setActiveTabs(tab.id))}
                        className={`
                            relative
                            flex-1 
                            py-2.5 sm:py-3.5 
                            text-sm sm:text-base 
                            font-semibold 
                            rounded-xl 
                            transition-all 
                            duration-300
                            uppercase
                            cursor-pointer
                            flex
                            items-center
                            justify-center
                            gap-2
                            z-10
                            ${activetab === tab.id
                                ? 'text-white scale-[0.98]'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'}
                        `}
                    >
                        <span className="text-base sm:text-lg transition-transform duration-300 transform group-hover:scale-110">
                            {tab.icon}
                        </span>
                        <span className="hidden xs:inline">
                            {tab.label}
                        </span>
                        <span className="xs:hidden">
                            {tab.id === 'photos' ? '📷' : '📹'}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Tabs
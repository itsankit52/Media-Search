import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/SearchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos']
    const dispatch = useDispatch()
    const activetab = useSelector((state) => state.search.activetab)

    return (
        <div className="w-full flex justify-center">

            <div className="
                flex 
                bg-gray-200 
                p-1 
                rounded-xl 
                gap-1 
                w-full 
                max-w-md
            ">

                {tabs.map((element) => (
                    <button
                        key={element}
                        onClick={() => dispatch(setActiveTabs(element))}
                        className={`
                            flex-1 
                            py-2 sm:py-3 
                            text-sm sm:text-base 
                            font-medium 
                            rounded-lg 
                            transition-all duration-200 
                            uppercase
                            cursor-pointer
                            active:scale-90
                            ${activetab === element
                                ? 'bg-blue-500 text-white shadow-md'
                                : 'text-gray-700 hover:bg-gray-300'}
                        `}
                    >
                        {element}
                    </button>
                ))}

            </div>
        </div>
    )
}

export default Tabs
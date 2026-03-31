import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuary } from '../redux/features/SearchSlice'

const SearchBar = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        dispatch(setQuary(text))
        setText('')
    }

    return (
        <div className="w-full flex justify-center">
            <form
                onSubmit={submitHandler}
                className="
                    w-full 
                    max-w-2xl 
                    flex 
                    items-center 
                    gap-2 
                    bg-white 
                    shadow-md 
                    rounded-xl 
                    p-2 sm:p-3
                "
            >

                {/* Input */}
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    type="text"
                    placeholder="Search Photos & Videos..."
                    className="
                        flex-1 
                        px-3 sm:px-4 
                        py-2 
                        text-sm sm:text-base 
                        outline-none 
                        border-none 
                        bg-transparent
                    "
                />

                {/* Button */}
                <button
                    type="submit"
                    className="
                    active:scale-90
                    cursor-pointer
                        bg-blue-500 
                        hover:bg-blue-600 
                        text-white 
                        px-4 sm:px-5 
                        py-2 
                        text-sm sm:text-base 
                        rounded-lg 
                        transition-all duration-200
                    "
                >
                    Search
                </button>

            </form>
        </div>
    )
}

export default SearchBar
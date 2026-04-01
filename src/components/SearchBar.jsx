import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/SearchSlice'

const SearchBar = () => {
    const [text, setText] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        dispatch(setQuery(text))
        setText('')
        inputRef.current?.blur()
    }

    // Optional: Add keyboard shortcut (Cmd+K or Ctrl+K)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                inputRef.current?.focus()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <div className="w-full flex justify-center animate-fadeIn">
            <form
                onSubmit={submitHandler}
                className={`
                    w-full 
                    max-w-2xl 
                    relative
                    group
                    transition-all 
                    duration-300
                    ${isFocused ? 'scale-[1.02]' : 'scale-100'}
                `}
            >
                {/* Animated Background Glow */}
                <div className={`
                    absolute -inset-0.5 
                    bg-gradient-to-r from-blue-500 to-purple-600 
                    rounded-2xl 
                    opacity-0 
                    group-hover:opacity-30 
                    transition-all 
                    duration-300
                    blur-md
                    ${isFocused ? 'opacity-50' : ''}
                `} />

                {/* Search Container */}
                <div className="
                    relative
                    flex 
                    items-center 
                    gap-2 
                    bg-white/90 
                    backdrop-blur-sm
                    shadow-xl 
                    rounded-xl 
                    p-1.5 sm:p-2
                    border
                    border-gray-200/50
                    transition-all
                    duration-300
                    group-hover:shadow-2xl
                    group-hover:bg-white
                ">
                    {/* Search Icon */}
                    <div className="pl-2 sm:pl-3">
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-colors duration-300 group-hover:text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    {/* Input Field */}
                    <input
                        ref={inputRef}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        required
                        type="text"
                        placeholder="Search photos, and videos"
                        className="
                            flex-1 
                            px-2 sm:px-3 
                            py-2 sm:py-3
                            text-sm sm:text-base 
                            outline-none 
                            border-none 
                            bg-transparent
                            placeholder:text-gray-400
                            text-gray-700
                            font-medium
                        "
                    />

                    {/* Clear Button (appears when text exists) */}
                    {text && (
                        <button
                            type="button"
                            onClick={() => setText('')}
                            className="
                                p-1.5
                                text-gray-400
                                hover:text-gray-600
                                hover:bg-gray-100
                                rounded-lg
                                transition-all
                                duration-200
                                active:scale-90
                            "
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}

                    {/* Search Button */}
                    <button
                        type="submit"
                        disabled={!text.trim()}
                        className="
                            relative
                            overflow-hidden
                            bg-gradient-to-r 
                            from-blue-500 
                            to-purple-600
                            hover:from-blue-600
                            hover:to-purple-700
                            text-white 
                            px-4 sm:px-6 
                            py-2 sm:py-2.5
                            text-sm sm:text-base 
                            font-semibold
                            rounded-lg 
                            transition-all 
                            duration-300
                            transform
                            hover:scale-105
                            active:scale-95
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                            disabled:hover:scale-100
                            shadow-md
                            hover:shadow-lg
                            flex
                            items-center
                            gap-2
                            group/btn
                        "
                    >
                        <span className="hidden sm:inline">Search</span>
                        <svg
                            className="w-4 h-4 sm:hidden"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <svg
                            className="w-4 h-4 hidden sm:block group-hover/btn:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
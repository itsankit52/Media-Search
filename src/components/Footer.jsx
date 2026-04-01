import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full bg-white/80 backdrop-blur-sm border-t border-gray-200/50 mt-auto">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-5 py-3 sm:py-3">
                <div className="flex flex-col sm:flex-col items-center justify-between gap-4">
                    {/* Copyright Text */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                            © {currentYear}
                        </span>
                        <span className="text-sm text-gray-500">
                            Ankit Thakur
                        </span>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
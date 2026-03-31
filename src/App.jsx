import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/collection' element={<CollectionPage />} />
        </Routes>
      </div>

      {/* Enhanced Toast Container with Styling */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="!rounded-lg !shadow-lg !font-sans"
        bodyClassName="!text-sm !font-medium"
        progressClassName="!bg-gradient-to-r !from-blue-500 !to-purple-600"
      />
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center px-4 sm:px-6 lg:px-8">

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

    </div>
  )
}

export default App
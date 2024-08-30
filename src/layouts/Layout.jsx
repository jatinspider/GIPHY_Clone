import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
function Layout() {
  return (
    
   <div className="bg-gray-950 min-h-screen text-white">
    <div className='container px-6 py-4 mx-auto'></div>
    <Header/>
   <Outlet/>
   </div>
  )
}

export default Layout
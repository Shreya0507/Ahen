import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('/image/bgimg.webp')" }}>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout
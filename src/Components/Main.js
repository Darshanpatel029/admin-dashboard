import React from 'react'
import NavBar from './Navbar/NavBar'
import MainDashboard from "./MainDashboard"
import SideBar from './Sidebar/SideBar'
import Footer from './Footer/Footer'

const Main = () => {
    return (
        <div>
            <NavBar />
            <SideBar />
            <MainDashboard />
            <Footer />
        </div>
    )
}

export default Main;
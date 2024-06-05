import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        document.body.classList.toggle("toggle-sidebar");
    };

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/ViewEnquiry" className="logo d-flex align-items-center">
                    {/* <img src="assets/img/logo.png" alt="" /> */}
                    <span className="d-none d-lg-block">ESPI CRM</span>
                </Link>
                <i
                    className="bi bi-list toggle-sidebar-btn"
                    onClick={toggleSidebar}
                ></i>
            </div>

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item dropdown pe-3">
                        <Link
                            className="nav-link nav-profile d-flex align-items-center pe-0"
                            data-bs-toggle="dropdown"
                        >
                            <img
                                src="assets/img/profile-img.jpg"
                                alt="Profile"
                                className="rounded-circle"
                            />
                            <span className="d-none d-md-block dropdown-toggle ps-2">
                                Admin
                            </span>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li>
                                <Link
                                    className="dropdown-item d-flex align-items-center"
                                    to="/"
                                >
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Sign Out</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;

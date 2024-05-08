import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const NavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        document.body.classList.toggle('toggle-sidebar');
    };

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/ViewEnquiry" className="logo d-flex align-items-center">
                    {/* <img src="assets/img/logo.png" alt="" /> */}
                    <span className="d-none d-lg-block">ESPI CRM</span>
                </Link>
                <i className="bi bi-list toggle-sidebar-btn" onClick={toggleSidebar}></i>
            </div>

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">

                    <li className="nav-item d-block d-lg-none">
                        <Link className="nav-link nav-icon search-bar-toggle ">
                            <i className="bi bi-search"></i>
                        </Link>
                    </li>
                    {/* <li className="nav-item dropdown">

                            <Link className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-bell"></i>
                                <span className="badge bg-primary badge-number">4</span>
                            </Link>

                            <ul
                                className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                                    You have 4 new notifications
                                    <Link ><span
                                        className="badge rounded-pill bg-primary p-2 ms-2">View
                                        all</span></Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-exclamation-circle text-warning"></i>
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>30 min. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-x-circle text-danger"></i>
                                    <div>
                                        <h4>Atque rerum nesciunt</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>1 hr. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-check-circle text-success"></i>
                                    <div>
                                        <h4>Sit rerum fuga</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>2 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-info-circle text-primary"></i>
                                    <div>
                                        <h4>Dicta reprehenderit</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-footer">
                                    <Link >Show all notifications</Link>
                                </li>

                            </ul>

                        </li>

                        <li className="nav-item dropdown">

                            <Link className="nav-link nav-icon" data-bs-toggle="dropdown">
                                <i className="bi bi-chat-left-text"></i>
                                <span className="badge bg-success badge-number">3</span>
                            </Link>

                            <ul
                                className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                                <li className="dropdown-header">
                                    You have 3 new messages
                                    <Link ><span
                                        className="badge rounded-pill bg-primary p-2 ms-2">View
                                        all</span></Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="message-item">
                                    <Link >
                                        <img src="assets/img/messages-1.jpg" alt=""
                                            className="rounded-circle" />
                                        <div>
                                            <h4>Maria Hudson</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore
                                                officia est ut...</p>
                                            <p>4 hrs. ago</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="message-item">
                                    <Link>
                                        <img src="assets/img/messages-2.jpg" alt=""
                                            className="rounded-circle" />
                                        <div>
                                            <h4>Anna Nelson</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore
                                                officia est ut...</p>
                                            <p>6 hrs. ago</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="message-item">
                                    <Link >
                                        <img src="assets/img/messages-3.jpg" alt=""
                                            className="rounded-circle" />
                                        <div>
                                            <h4>David Muldon</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore
                                                officia est ut...</p>
                                            <p>8 hrs. ago</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="dropdown-footer">
                                    <Link >Show all messages</Link>
                                </li>

                            </ul>

                        </li> */}

                    <li className="nav-item dropdown pe-3">

                        <Link className="nav-link nav-profile d-flex align-items-center pe-0"
                            data-bs-toggle="dropdown">
                            <img src="assets/img/profile-img.jpg" alt="Profile"
                                className="rounded-circle" />
                            <span className="d-none d-md-block dropdown-toggle ps-2">Admin</span>
                        </Link>
                        <ul
                            className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li>
                                <Link className="dropdown-item d-flex align-items-center" to="/">
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Sign Out</span>
                                </Link>
                            </li>

                        </ul>
                    </li>

                </ul>
            </nav>

        </header >
    )
}

export default NavBar
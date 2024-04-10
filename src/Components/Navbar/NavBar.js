import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <body>
            <header id="header" className="header fixed-top d-flex align-items-center">
                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Dashboard</Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/ViewEnquiry">Enquiry</Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/ViewDetailEnquiry">Detail-Enquiry</Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/ViewAssessments">Assessments</Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/ViewApplication">Application</Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/ViewPayment">Payment</Link>
                            </li>

                        </ul>

                    </div>
                </nav> */}

                <div class="d-flex align-items-center justify-content-between">
                    <Link to="/" class="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <span class="d-none d-lg-block">NiceAdmin</span>
                    </Link>
                    <i class="bi bi-list toggle-sidebar-btn"></i>

                </div>

                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST"
                        action="#">
                        <input type="text" name="query" placeholder="Search"
                            title="Enter search keyword" />
                        <button type="submit" title="Search"><i
                            className="bi bi-search"></i></button>
                    </form>
                </div>
                {/* <div className='container'>
                    <ul className="sidebar-nav d-flex" id="sidebar-nav">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="bi bi-grid"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/ViewEnquiry">
                                <i className="bi bi-journal-text"></i>
                                <span>Enquiry</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to="/ViewDetailEnquiry">
                                <i className="bi bi-bar-chart"></i>
                                <span>Detail-Enquiry</span>

                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to="/ViewAssessments">
                                <i className="bi bi-file-earmark-fill"></i>
                                <span>Assessments</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/ViewApplication">
                                <i className="bi bi-window-stack"></i>
                                <span>Application</span>
                            </Link>
                        </li>
                    </ul>
                </div> */}

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
                                <span className="d-none d-md-block dropdown-toggle ps-2">K.
                                    Anderson</span>
                            </Link>
                            <ul
                                className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" href="#">
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </nav>

            </header>
        </body>
    )
}

export default NavBar
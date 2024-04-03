import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <Link className="nav-link " to="/">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                {/* <li className="nav-item">
                    <Link className="nav-link " to="/Enquiry">
                        <i className="bi bi-journal-text"></i>
                        <span>Enquiry</span>
                    </Link>
                </li> */}
                <li class="nav-item">
                    <Link class="nav-link collapsed" data-bs-target="#forms-nav"
                        data-bs-toggle="collapse" href="#">
                        <i className="bi bi-journal-text"></i>
                        <span>Enquiry</span>
                    </Link>
                    <ul id="forms-nav" class="nav-content collapse "
                        data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="forms-elements.html">
                                <i class="bi bi-circle"></i><span>Add Enquiry</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-layouts.html">
                                <i class="bi bi-circle"></i><span>View Enquiry</span>
                            </a>
                        </li>

                    </ul>
                </li>

                <li className="nav-item">
                    <Link className="nav-link " to="/DetailEnquiry">
                        <i className="bi bi-bar-chart"></i>
                        <span>Detail-Enquiry</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link " to="/Assesments">
                        <i class="bi bi-file-earmark-fill"></i>
                        <span>Assesments</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/Application">
                        <i class="bi bi-window-stack"></i>
                        <span>Application</span>
                    </Link>
                </li>




                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <Link to="/Profile" className="nav-link collapsed" >
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </Link>
                </li>



                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-contact.html">
                        <i className="bi bi-envelope"></i>
                        <span>Contact</span>
                    </a>
                </li>

                <li className="nav-item">
                    <Link to="/Register" className="nav-link collapsed" >
                        <i className="bi bi-card-list"></i>
                        <span>Register</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/LogIn" className="nav-link collapsed" >
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Login</span>
                    </Link>
                </li>

                {/* <li className="nav-item">
                    <Link to="/Error" className="nav-link collapsed" >
                        <i className="bi bi-dash-circle"></i>
                        <span>Error 404</span>
                    </Link>
                </li> */}

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-blank.html">
                        <i className="bi bi-file-earmark"></i>
                        <span>Blank</span>
                    </a>
                </li>

            </ul>

        </aside>
    )
}

export default SideBar
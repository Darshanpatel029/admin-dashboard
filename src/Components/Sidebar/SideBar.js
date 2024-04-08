import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <body>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

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


                </ul>

            </aside>

        </body>
    )
}

export default SideBar
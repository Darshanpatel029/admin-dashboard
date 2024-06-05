import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SideBar = () => {
    const location = useLocation();

    return (
        <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className={`nav-item ${location.pathname === '/ViewEnquiry' ? 'active' : ''}`}>
                        <Link className="nav-link" to="/ViewEnquiry" data-bs-toggle="tooltip" data-bs-placement="right" title="Dashboard">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/ViewDetailEnquiry' ? 'active' : ''}`}>
                        <Link className="nav-link collapsed" to="/ViewDetailEnquiry" data-bs-toggle="tooltip" data-bs-placement="right" title="Detail-Enquiry">
                            <i className="bi bi-bar-chart"></i>
                            <span>Detail-Enquiry</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/ViewAssessments' ? 'active' : ''}`}>
                        <Link className="nav-link collapsed" to="/ViewAssessments" data-bs-toggle="tooltip" data-bs-placement="right" title="Assessments">
                            <i className="bi bi-file-earmark-fill"></i>
                            <span>Assessments</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/ViewApplication' ? 'active' : ''}`}>
                        <Link className="nav-link collapsed" to="/ViewApplication" data-bs-toggle="tooltip" data-bs-placement="right" title="Application">
                            <i className="bi bi-window-stack"></i>
                            <span>Application</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/Payments' ? 'active' : ''}`}>
                        <Link className="nav-link collapsed" to="/Payments" data-bs-toggle="tooltip" data-bs-placement="right" title="Payment">
                            <i className="bi bi-credit-card-fill"></i>
                            <span>Payment</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                        <Link to="/" className="nav-link collapsed" data-bs-toggle="tooltip" data-bs-placement="right" title="Login">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span>Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default SideBar

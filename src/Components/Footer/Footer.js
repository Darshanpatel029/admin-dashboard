import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="copyright">
                &copy; Copyright <strong><span>ESPI</span></strong>. All Rights
                Reserved
            </div>
            <div className="credits">

                Designed by <Link to="/https://anantsoftcomputing.com/">Anant Soft Computing
                </Link>
            </div>
        </footer>
    )
}

export default Footer
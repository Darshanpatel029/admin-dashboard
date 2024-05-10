import React from 'react'
import { Link } from "react-router-dom";

const Breadcrumbs = ({ main }) => {
    return (
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/ViewEnquiry">Home</Link>
            </li>
            <li className="breadcrumb-item active">{main}</li>
        </ol>
    )
}

export default Breadcrumbs
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import NavBar from "../Navbar/NavBar";
import SideBar from "../Sidebar/SideBar";
import Footer from "../Footer/Footer";
import Modal from "react-bootstrap/Modal";
import AddEnquiry from "./AddEnquiry";

const ViewEnquiry = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [EnquiryData, setEnquiryData] = useState([]);

    useEffect(() => {
        fetchEnquiries();
    }, []);

    const fetchEnquiries = async () => {
        try {
            const response = await fetch(
                "https://cloudconnectcampaign.com/espicrmnew/api/enquiries/"
            );
            const data = await response.json();
            const enquiriesWithNo = data.map((enquiry, index) => ({
                ...enquiry,
                no: index + 1,
            }));
            setEnquiryData(enquiriesWithNo);
        } catch (error) {
            console.error("Error fetching enquiries:", error);
        }
    };

    console.log(EnquiryData);

    const columnDefs = [
        { headerName: "No", field: "no" },
        { headerName: "Student First Name", field: "student_First_Name" },
        { headerName: "Student Last Name", field: "student_Last_Name" },
        { headerName: "Student Email", field: "student_email" },
        { headerName: "Country Interested", field: "country_interested" },
        { headerName: "University Interested", field: "university_interested" },
        { headerName: "Interested Service", field: "Interested_Services" },
        { headerName: "Course Interested", field: "course_interested" },
        { headerName: "Level Applying For", field: "level_applying_for" },
        { headerName: "Intake Interested", field: "intake_interested" },
        { headerName: "Assigned Users", field: "assigned_users" },
        { headerName: "Enquiry Status", field: "enquiry_status" },
        { headerName: "Notes", field: "notes" },
        { headerName: "Total Price", field: "" },
        { headerName: "Source Inquiry", field: "Source_Enquiry" },
    ];

    return (
        <div>
            <NavBar />
            <SideBar />
            <main id="main" className="main">
                <div className="pagetitle d-flex justify-content-between align-items-center">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">View-Enquiry</li>
                        </ol>
                    </nav>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Extra Large Modal
                        </button>
                    </div>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div
                                        className="ag-theme-alpine"
                                        style={{ height: "500px", width: "100%" }}
                                    >
                                        <AgGridReact
                                            rowData={EnquiryData}
                                            columnDefs={columnDefs}
                                            pagination={true}
                                            paginationPageSize={10}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            {isModalOpen && (
                <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Add Enquiry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddEnquiry />
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default ViewEnquiry;

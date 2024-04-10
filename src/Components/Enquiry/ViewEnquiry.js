import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Modal from "react-bootstrap/Modal";
import AddEnquiry from "./AddEnquiry";

const ViewEnquiry = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [EnquiryData, setEnquiryData] = useState([]);
    const [errs, setErrs] = useState("");

    useEffect(() => {
        fetchEnquiries();
    }, []);

    const fetchEnquiries = async () => {
        try {
            const response = await fetch(
                "https://cloudconnectcampaign.com/espicrmnew/api/enquiries/"
            );
            console.log(response);
            if (response.status === 200) {
                const data = await response.json();
                const enquiriesWithNo = data.map((enquiry, index) => ({
                    ...enquiry,
                    no: index + 1,
                }));
                setEnquiryData(enquiriesWithNo);
            } else if (response.status === 500) {
                setErrs("No Inquiry found");
            }
            else {
                setErrs("Error While Fetching Data");
            }
        } catch (error) {
            console.log("error", error);
        }
    };


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
            <main id="main" className="main">
                <div className="pagetitle d-flex justify-content-between align-items-center">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Enquiry</li>
                        </ol>
                    </nav>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Add Enquiry
                        </button>
                    </div>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div>
                                <div className="card-body">
                                    {errs ? (
                                        <div className="alert alert-danger text-center" role="alert">
                                            {errs}
                                        </div>
                                    ) : (
                                        <div className="ag-theme-alpine" style={{ height: "500px", width: "100%" }}>
                                            <AgGridReact
                                                rowData={EnquiryData}
                                                columnDefs={columnDefs}
                                                pagination={true}
                                                paginationPageSize={10}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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

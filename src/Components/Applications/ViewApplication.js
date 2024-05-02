import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Modal from "react-bootstrap/Modal";
import AddApplication from "./AddApplication";

const ViewApplication = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [applicationData, setapplicationData] = useState([]);
    const [errs, setErrs] = useState("");

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchData = async (url, setter, errorMessage) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 200) {
                const data = await response.json();
                setter(data);
            } else if (response.status === 500) {
                setErrs(errorMessage);
            } else {
                setErrs("No Data Found");
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    const fetchApplications = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/application/",
            setapplicationData,
            "No Detail Inquiry found"
        );

    const columnDefs = [
        { headerName: "Application", field: "application.enquiry.Current_Enquiry.student_First_Name" },
        { headerName: "Application Status", field: "application_status.App_status" },
        { headerName: "SOP", field: "sop" },
        { headerName: "Passport", field: "passport" },
        { headerName: "CV", field: "cv" },
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
                            <li className="breadcrumb-item active">Assesments</li>
                        </ol>
                    </nav>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Add Application
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
                                                rowData={applicationData}
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
                        <Modal.Title>Add Application</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddApplication />
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default ViewApplication;

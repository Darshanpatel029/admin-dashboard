import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import NavBar from "../Navbar/NavBar";
import SideBar from "../Sidebar/SideBar";
import Footer from "../Footer/Footer";
import Modal from "react-bootstrap/Modal";
import AddAssesment from "./AddAssesment";

const ViewAssesment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [EnquiryData, setEnquiryData] = useState([]);
    const [errs, setErrs] = useState("");

    useEffect(() => {
        fetchEnquiries();
    }, []);

    const fetchEnquiries = async () => {
        try {
            const response = await fetch(
                "https://cloudconnectcampaign.com/espicrmnew/api/assesment/"
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
        { headerName: "Current Enquiry", field: "Current_Enquiry" },
        { headerName: "IELTS Exam", field: "ielts_Exam" },
        { headerName: "Toefl Exam", field: "Toefl_Exam" },
        { headerName: "Current Education Details", field: "Current_Education_Details" },
        { headerName: "Father Occupation", field: "Father_Occupation" },
        { headerName: "Father Annual Income", field: "Father_Annual_Income" },
        { headerName: "Refusal", field: "Refusal" },
        { headerName: "Pending Amount", field: "0" },

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
                            <li className="breadcrumb-item active">Assesments</li>
                        </ol>
                    </nav>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Add Assesment
                        </button>
                    </div>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
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
            <Footer />
            {isModalOpen && (
                <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Add Detail-Enquiry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddAssesment />
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default ViewAssesment;

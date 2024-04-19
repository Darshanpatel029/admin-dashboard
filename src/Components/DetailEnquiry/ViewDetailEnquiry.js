import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Modal from "react-bootstrap/Modal";
import AddDetailEnquiry from "./AddDetailEnquiry";

const ViewDetailEnquiry = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [EnquiryData, setEnquiryData] = useState([]);

    const [errs, setErrs] = useState("");

    useEffect(() => {
        fetchDetailEnquiries();
    }, []);

    // const fetchEnquiries = async () => {
    //     try {
    //         const response = await fetch(
    //             "https://cloudconnectcampaign.com/espicrmnew/api/detailsEnquiry/"
    //         );
    //         console.log(response);
    //         if (response.status === 200) {
    //             const data = await response.json();
    //             const enquiriesWithNo = data.map((enquiry, index) => ({
    //                 ...enquiry,
    //                 no: index + 1,
    //             }));
    //             setEnquiryData(enquiriesWithNo);
    //         } else if (response.status === 500) {
    //             setErrs("No Inquiry found");
    //         }
    //         else {
    //             setErrs("Error While Fetching Data");
    //         }
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // };

    const fetchData = async (url, setter, errorMessage) => {
        try {
            const response = await fetch(url);
            if (response.status === 200) {
                const data = await response.json();
                setter(data);
            } else if (response.status === 500) {
                setErrs(errorMessage);
            } else {
                setErrs("Error While Fetching Data");
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    const fetchDetailEnquiries = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/detailsEnquiry/",
            setEnquiryData,
            "No Detail Inquiry found"
        );


    const columnDefs = [
        // { headerName: "No", field: "no" },
        { headerName: "Current Enquiry", field: "Current_Enquiry.student_First_Name" },
        { headerName: "IELTS Exam", field: "ielts_Exam" },
        { headerName: "Toefl Exam", field: "Toefl_Exam" },
        { headerName: "Current Education Details", field: "Current_Education_Details.level" },
        { headerName: "Father Occupation", field: "Father_Occupation" },
        { headerName: "Father Annual Income", field: "Father_Annual_Income" },
        { headerName: "Refusal", field: "Refusal" },
        { headerName: "Pending Amount", field: "0" },

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
                            <li className="breadcrumb-item active">DetailEnquiry</li>
                        </ol>
                    </nav>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Add Detail-Enquiry
                        </button>
                    </div>
                </div>
                <section className="section">
                    <div className="row">
                        <div>
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
                        <Modal.Title>Add Detail-Enquiry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddDetailEnquiry />
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default ViewDetailEnquiry;

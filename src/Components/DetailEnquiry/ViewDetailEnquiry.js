import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Modal from "react-bootstrap/Modal";
import AddDetailEnquiry from "./AddDetailEnquiry";

const ViewDetailEnquiry = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [DetailEnquiryData, setDetailEnquiryData] = useState([]);
    const [EnquiryData, setEnquiryData] = useState([]);
    const [EducationData, setEducationData] = useState([]);
    const [WorkExperience, setWorkExperience] = useState([]);
    const [ToeflData, setToeflData] = useState([]);
    const [IeltsData, setIeltsData] = useState([]);
    const [PteData, setPteData] = useState([]);
    const [DuolingoData, setDuolingoData] = useState([]);
    const [GreData, setGreData] = useState([]);
    const [GmatData, setGmatData] = useState([]);
    const [RefusalData, setRefusalData] = useState([]);
    const [ServicesData, setServicesData] = useState([]);
    const [statusData, setStatusData] = useState([]);
    // const [followupData, setFollowupData] = useState([]);

    const [errs, setErrs] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetchDetailEnquiries(token);
        fetchEnquiry();
        EduLevel();
        WorkExperienceData();
        ToeflExam();
        Ielts();
        Pte();
        DuolingoExam();
        GreExam();
        GmatExam();
        Refusal();
        AvailableServices();
        EnquiryStatus();
        // FollowUpStatus();
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

    const fetchDetailEnquiries = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/detailsEnquiry/",
            setDetailEnquiryData,
            "No Detail Inquiry found"
        );

    const fetchEnquiry = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/enquiries/",
            setEnquiryData,
            "No Enquiry found"
        );

    const EduLevel = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/edu-levels/",
            setEducationData,
            "No Detail found"
        );


    const WorkExperienceData = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/work-experiences/",
            setWorkExperience,
            "No Detail found"
        );

    const ToeflExam = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/toefl_exams/",
            setToeflData,
            "No Detail found"
        );

    const Ielts = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/ielts_exams/",
            setIeltsData,
            "No Detail found"
        );

    const Pte = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/pte_exams/",
            setPteData,
            "No Detail found"
        );

    const DuolingoExam = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/duolingo_exams/",
            setDuolingoData,
            "No Detail found"
        );

    const GreExam = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/gre_exams/",
            setGreData,
            "No Detail found"
        );
    const GmatExam = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/gmat_exams/",
            setGmatData,
            "No Detail found"
        );

    const Refusal = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/rejection_reasons/",
            setRefusalData,
            "No Detail found"
        );

    const AvailableServices = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/available-services/",
            setServicesData,
            "No Detail found"
        );

    const EnquiryStatus = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/enquiry-statuses/",
            setStatusData,
            "No Detail found"
        );

    // const FollowUpStatus = () =>
    //     fetchData(
    //         "https://cloudconnectcampaign.com/espicrmnew/api/followups/",
    //         setFollowupData,
    //         "No Detail found"
    //     );

    const columnDefs = [
        // { headerName: "No", field: "no" },
        {
            headerName: "Current Enquiry",
            field: "Current_Enquiry.student_First_Name",
        },
        { headerName: "IELTS Exam", field: "ielts_Exam.Overall" },
        { headerName: "Toefl Exam", field: "Toefl_Exam.Overall" },
        {
            headerName: "Current Education Details",
            field: "Current_Education_Details.level",
        },
        { headerName: "Father Occupation", field: "Father_Occupation" },
        { headerName: "Father Annual Income", field: "Father_Annual_Income" },
        { headerName: "Refusal", field: "Refusal.Refusal_Reason" },
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
                                        <div
                                            className="alert alert-danger text-center"
                                            role="alert"
                                        >
                                            {errs}
                                        </div>
                                    ) : (
                                        <div
                                            className="ag-theme-alpine"
                                            style={{ height: "500px", width: "100%" }}
                                        >
                                            <AgGridReact
                                                rowData={DetailEnquiryData}
                                                columnDefs={columnDefs}
                                                pagination={true}
                                                rowSelection="multiple"
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
                <Modal
                    show={isModalOpen}
                    onHide={() => setIsModalOpen(false)}
                    size="lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Detail-Enquiry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddDetailEnquiry
                            EnquiryData={EnquiryData}
                            EducationData={EducationData}
                            WorkExperience={WorkExperience}
                            ToeflData={ToeflData}
                            IeltsData={IeltsData}
                            PteData={PteData}
                            DuolingoData={DuolingoData}
                            GreData={GreData}
                            GmatData={GmatData}
                            RefusalData={RefusalData}
                            ServicesData={ServicesData}
                            statusData={statusData}
                        // followupData={followupData}
                        />
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default ViewDetailEnquiry;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import Modal from "react-bootstrap/Modal";
import AddAssesment from "./AddAssesment";

const ViewAssesment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [AssessmenData, setAssessmentData] = useState([]);
    const [EnquiryData, setEnquiryData] = useState([]);
    const [InterestedCountryData, setinterestedCountryData] = useState([]);
    const [universitiesData, setUniversities] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [levelData, setLevelData] = useState([]);
    const [userData, setuserData] = useState([]);
    const [IntakeData, setIntakeData] = useState([]);
    const [errs, setErrs] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetchAssessment(token);
        fetchEnquiry();
        fetchuserData();
        fetchIntrestedCountryData();
        fetchUniversityData();
        fetchLevelData();
        fetchCourseData();
        fetchIntakeData();
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

    const fetchAssessment = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/assesment/",
            setAssessmentData,
            "No Inquiry found"
        );

    const fetchuserData = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/users/",
            setuserData,
            "No Intake Data found"
        );

    const fetchEnquiry = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/detailsEnquiry/",
            setEnquiryData,
            "No Enquiry found"
        );

    const fetchIntrestedCountryData = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/countriesIntersted/",
            setinterestedCountryData,
            "No interested Country Data found"
        );

    const fetchLevelData = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/course-levels/",
            setLevelData,
            "No level Data found"
        );
    const fetchCourseData = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/courses/",
            setCourseData,
            "No Course Data found"
        );
    const fetchUniversityData = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/universities/",
            setUniversities,
            "No University Data found"
        );

    const fetchIntakeData = () =>
        fetchData(
            "https://cloudconnectcampaign.com/espicrmnew/api/intakes/",
            setIntakeData,
            "No Intake Data found"
        );

    const columnDefs = [
        { headerName: "Enquiry", field: "enquiry.Current_Enquiry.student_First_Name" },
        { headerName: "Student country", field: "student_country.country" },
        { headerName: "University", field: "university.univ_name" },
        { headerName: "Level applying for", field: "level_applying_for.levels" },
        { headerName: "Course interested", field: "course_interested.course_name" },
        { headerName: "Intake interested", field: "intake_interested.intake_Name" },
        { headerName: "Specialisation", field: "specialisation" },
        { headerName: "Application fee", field: "application_fee" },
        { headerName: "Tution fee", field: "tution_fee" },
    ];

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <main id="main" className="main">
                <div className="pagetitle d-flex justify-content-between align-items-center">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/ViewEnquiry">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Assesments</li>
                        </ol>
                    </nav>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <i class="bi bi-file-plus"></i>&nbsp;
                            Add Assesment
                        </button>
                    </div>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
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
                                                rowData={AssessmenData}
                                                columnDefs={columnDefs}
                                                rowSelection="multiple"
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
                <Modal
                    show={isModalOpen}
                    onHide={() => setIsModalOpen(false)}
                    size="lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Assessment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddAssesment
                            EnquiryData={EnquiryData}
                            InterestedCountryData={InterestedCountryData}
                            universitiesData={universitiesData}
                            levelData={levelData}
                            courseData={courseData}
                            IntakeData={IntakeData}
                            userData={userData}
                            closeModal={closeModal}
                        />
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default ViewAssesment;

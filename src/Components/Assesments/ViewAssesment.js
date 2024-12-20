import React, { useState, useEffect } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import Modal from "react-bootstrap/Modal";
import AddAssesment from "./AddAssesment";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import Table from "../UI/Table/Table";

const ViewAssesment = () => {
  const [data, setData] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [AssessmenData, setAssessmentData] = useState([]);
  const [EnquiryData, setEnquiryData] = useState([]);
  const [InterestedCountryData, setinterestedCountryData] = useState([]);
  const [universitiesData, setUniversities] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [levelData, setLevelData] = useState([]);
  const [userData, setuserData] = useState([]);
  const [IntakeData, setIntakeData] = useState([]);
  const [statusData, setstatusData] = useState([]);
  const [followupData, setFollowUpData] = useState([]);
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
    fetchStatusData();
    fetchFollowupData();
  }, [data]);

  const fetchData = async (
    url,
    setter,
    errorMessage,
    showNoDataMessage = true
  ) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        if (data.length === 0 && showNoDataMessage) {
          setErrs(errorMessage);
        } else {
          setter(data);
        }
      } else if (response.status === 500) {
        setErrs(errorMessage);
      } else {
        setter([]);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const fetchAssessment = () =>
    fetchData(
      "https://espicrm.co/latest/api/assesment/",
      setAssessmentData,
      "No Inquiry found",
      true
    );

  const fetchuserData = () =>
    fetchData(
      "https://espicrm.co/latest/api/users/",
      setuserData,
      "No Intake Data found",
      false
    );

  const fetchEnquiry = () =>
    fetchData(
      "https://espicrm.co/latest/api/detailsEnquiry/",
      setEnquiryData,
      "No Enquiry found",
      false
    );

  const fetchIntrestedCountryData = () =>
    fetchData(
      "https://espicrm.co/latest/api/countriesIntersted/",
      setinterestedCountryData,
      "No interested Country Data found",
      false
    );

  const fetchLevelData = () =>
    fetchData(
      "https://espicrm.co/latest/api/course-levels/",
      setLevelData,
      "No level Data found",
      false
    );
  const fetchCourseData = () =>
    fetchData(
      "https://espicrm.co/latest/api/courses/",
      setCourseData,
      "No Course Data found",
      false
    );
  const fetchUniversityData = () =>
    fetchData(
      "https://espicrm.co/latest/api/universities/",
      setUniversities,
      "No University Data found",
      false
    );

  const fetchIntakeData = () =>
    fetchData(
      "https://espicrm.co/latest/api/intakes/",
      setIntakeData,
      "No Intake Data found",
      false
    );

  const fetchStatusData = () =>
    fetchData(
      "https://espicrm.co/latest/api/assessment-statuses/",
      setstatusData,
      "No Intake Data found",
      false
    );
  const fetchFollowupData = () =>
    fetchData(
      "https://espicrm.co/latest/api/assessment-followups/",
      setFollowUpData,
      "No FollowUp Data found",
      false
    );

  const columnDefs = [
    {
      headerName: "Enquiry",
      field: "enquiry.Current_Enquiry.student_First_Name",
    },
    { headerName: "Student country", field: "student_country.country" },
    { headerName: "University", field: "university.univ_name" },
    { headerName: "Level applying for", field: "level_applying_for.levels" },
    { headerName: "Course interested", field: "course_interested.course_name" },
    { headerName: "Intake interested", field: "intake_interested.intake_Name" },
    { headerName: "Specialisation", field: "specialisation" },
    { headerName: "Application fee", field: "application_fee" },
    { headerName: "Tution fee", field: "tution_fee" },
  ];

  console.log(EnquiryData);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const getNewData = () => {
    setData(1);
  };

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle d-flex justify-content-between align-items-center">
          <nav>
            <h5 className="card-title">Assesments</h5>
            <Breadcrumbs main="Assesments" />
          </nav>
          <div>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="bi bi-file-plus"></i>&nbsp; Add Assesment
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
                      <Table
                        rowData={AssessmenData}
                        columnDefs={columnDefs}
                        rowSelection="multiple"
                        pagination={true}
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
              status={statusData}
              followupData={followupData}
              closeModal={closeModal}
              getNewData={getNewData}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ViewAssesment;

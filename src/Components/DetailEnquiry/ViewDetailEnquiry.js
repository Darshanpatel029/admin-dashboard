import React, { useState, useEffect } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Modal from "react-bootstrap/Modal";
import AddDetailEnquiry from "./AddDetailEnquiry";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import Table from "../UI/Table/Table";

const ViewDetailEnquiry = () => {
  const [data, setData] = useState(0);
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
  const [followupData, setFollowupData] = useState([]);
  const [userData, setuserData] = useState([]);

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
    fetchuserData(token);
    DetailEnquiryFollowUp();
  }, [data]);

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
        if (data.length === 0) {
          setErrs("Data Not Found");
        } else {
          setter(data);
        }
      } else if (response.status === 500) {
        setErrs(errorMessage);
      } else {
        setErrs("Data Not Found");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchDetailEnquiries = () =>
    fetchData(
      "https://espicrm.co/latest/api/detailsEnquiry/",
      setDetailEnquiryData,
      "No Detail Inquiry found"
    );

  const fetchEnquiry = () =>
    fetchData(
      "https://espicrm.co/latest/api/enquiries/",
      setEnquiryData,
      "No Enquiry found"
    );

  const EduLevel = () =>
    fetchData(
      "https://espicrm.co/latest/api/edu-levels/",
      setEducationData,
      "No Detail found"
    );

  const WorkExperienceData = () =>
    fetchData(
      "https://espicrm.co/latest/api/work-experiences/",
      setWorkExperience,
      "No Detail found"
    );

  const ToeflExam = () =>
    fetchData(
      "https://espicrm.co/latest/api/toefl_exams/",
      setToeflData,
      "No Detail found"
    );

  const Ielts = () =>
    fetchData(
      "https://espicrm.co/latest/api/ielts_exams/",
      setIeltsData,
      "No Detail found"
    );

  const Pte = () =>
    fetchData(
      "https://espicrm.co/latest/api/pte_exams/",
      setPteData,
      "No Detail found"
    );

  const DuolingoExam = () =>
    fetchData(
      "https://espicrm.co/latest/api/duolingo_exams/",
      setDuolingoData,
      "No Detail found"
    );

  const GreExam = () =>
    fetchData(
      "https://espicrm.co/latest/api/gre_exams/",
      setGreData,
      "No Detail found"
    );
  const GmatExam = () =>
    fetchData(
      "https://espicrm.co/latest/api/gmat_exams/",
      setGmatData,
      "No Detail found"
    );

  const Refusal = () =>
    fetchData(
      "https://espicrm.co/latest/api/rejection_reasons/",
      setRefusalData,
      "No Detail found"
    );

  const AvailableServices = () =>
    fetchData(
      "https://espicrm.co/latest/api/available-services/",
      setServicesData,
      "No Detail found"
    );

  const EnquiryStatus = () =>
    fetchData(
      "https://espicrm.co/latest/api/enquiry-statuses/",
      setStatusData,
      "No Detail found"
    );

  const DetailEnquiryFollowUp = () =>
    fetchData(
      "https://espicrm.co/latest/api/detail-enquiry-followups/",
      setFollowupData,
      "No Detail found"
    );

  const fetchuserData = () =>
    fetchData(
      "https://espicrm.co/latest/api/users/",
      setuserData,
      "No Intake Data found"
    );
  const columnDefs = [
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
            <h5 className="card-title">DetailEnquiry</h5>
            <Breadcrumbs main="DetailEnquiry" />
          </nav>
          <div>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="bi bi-file-plus"></i>&nbsp; Add Detail-Enquiry
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
                      <Table
                        rowData={DetailEnquiryData}
                        columnDefs={columnDefs}
                        pagination={true}
                        rowSelection="multiple"
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
          size="xl"
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
              userData={userData}
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

export default ViewDetailEnquiry;

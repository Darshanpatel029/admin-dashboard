import React, { useState, useEffect } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Modal from "react-bootstrap/Modal";
import AddEnquiry from "./AddEnquiry";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import Table from "../UI/Table/Table";
import { toast } from "react-toastify";

const ViewEnquiry = () => {
  const [data, setData] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [EnquiryData, setEnquiryData] = useState([]);
  const [SourceData, setSourceData] = useState([]);
  const [EducationData, setEducationData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [InterestedCountryData, setinterestedCountryData] = useState([]);
  const [universitiesData, setUniversities] = useState([]);
  const [levelData, setLevelData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [IntakeData, setIntakeData] = useState([]);
  const [userData, setuserData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [StatusData, serStatusData] = useState([]);
  const [followupData, setFollowupData] = useState([]);
  const [IeltsData, setIeltsData] = useState([]);
  const [PteData, setPteData] = useState([]);
  const [DuolingoData, setDuolingoData] = useState([]);
  const [ToeflData, setToeflData] = useState([]);
  const [GmatData, setGmatData] = useState([]);
  const [GreData, setGreData] = useState([]);
  const [courseLevel, setCourseLevel] = useState([]);
  const [TenthPercentage, setTenthPercent] = useState([]);
  const [TwelthPercentage, setTwelthPercent] = useState([]);
  const [BachelorData, setBachelorData] = useState([]);
  const [MasterData, setMasterData] = useState([]);
  const [DocumentData, setDocumentData] = useState([]);


  const [errs, setErrs] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchEnquiries(token);
    fetchSourceData();
    fetchEducationData();
    fetchIntrestedCountryData();
    fetchCountryData();
    fetchUniversityData();
    fetchLevelData();
    fetchCourseData();
    fetchuserData(token);
    fetchIntakeData();
    fetchServicesData();
    fetchStatusData();
    fetchfollowupData();
    fetchIeltsData();
    fetchPteData();
    fetchDuolingoData();
    fetchGmatData();
    fetchGreData();
    fetchToeflData();
    fetchCourseLevels();
    fetchTenthData();
    fetchTwelveData();
    fetchBachelorData();
    fetchMasterData();
    fetchDocumentData();
  }, [data, setEnquiryData]);



  const fetchData = async (url, setter, errorMessage, showNoDataMessage = true) => {
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

  const updateDataOnServer = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const url = `https://cloudconnectcampaign.com/espicrmlatest/api/enquiries/${data.id}/`;
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Update Successfully");
      } else {
        toast.error("Update Failed");
      }
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  // Function to handle the cell value change
  const handleCellValueChanged = async (params) => {
    // Extract the updated data from the params
    const updatedRowData = params.data;

    // Call your existing API update function
    await updateDataOnServer(updatedRowData);
  };

  const fetchEnquiries = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/enquiries/",
      setEnquiryData,
      "No Enquiry found",
      true
    );

  const fetchSourceData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/enquiry_sources/",
      setSourceData,
      "No Source Inquiry found",
      false
    );

  const fetchEducationData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/current-education/",
      setEducationData,
      "No Education Data found",
      false
    );

  const fetchIntrestedCountryData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/countriesIntersted/",
      setinterestedCountryData,
      "No interested Country Data found",
      false
    );
  const fetchCountryData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/countries/",
      setCountryData,
      "No Country Data found",
      false
    );

  const fetchUniversityData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/universities/",
      setUniversities,
      "No University Data found",
      false
    );

  const fetchLevelData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/course-levels/",
      setLevelData,
      "No level Data found",
      false
    );

  const fetchCourseData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/courses/",
      setCourseData,
      "No Course Data found",
      false
    );

  const fetchIntakeData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/intakes/",
      setIntakeData,
      "No Intake Data found",
      false
    );
  const fetchuserData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/users/",
      setuserData,
      "No Intake Data found",
      false
    );

  const fetchServicesData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/available-services/",
      setServicesData,
      "No Services Data found",
      false
    );

  const fetchStatusData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/enquiry-statuses/",
      serStatusData,
      "No EnquiryStatus Data found",
      false
    );

  const fetchfollowupData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/enquiry-followups/",
      setFollowupData,
      "No Followup Data found",
      false
    );

  const fetchIeltsData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/ielts_exams/",
      setIeltsData,
      "No Ielts Data found",
      false
    );

  const fetchPteData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/pte_exams/",
      setPteData,
      "No PTE Data found",
      false
    );

  const fetchGmatData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/gmat_exams/",
      setGmatData,
      "No GMAT Data found",
      false
    );

  const fetchDuolingoData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/duolingo_exams/",
      setDuolingoData,
      "No Duolingo Data found",
      false
    );


  const fetchGreData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/gre_exams/",
      setGreData,
      "No GRE Data found",
      false
    );

  const fetchToeflData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/toefl_exams/",
      setToeflData,
      "No Toefl Data found",
      false
    );

  const fetchCourseLevels = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/course-levels/",
      setCourseLevel,
      "No CourseLevel Data found",
      false
    );

  const fetchTenthData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/tenth_std_percentage_requirements/",
      setTenthPercent,
      "No Tenth Data found",
      false
    );

  const fetchTwelveData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/twelfth_std_percentage_requirements/",
      setTwelthPercent,
      "No Twelth Data found",
      false
    );

  const fetchBachelorData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/bachelor_requirements/",
      setBachelorData,
      "No Bachelor Data found",
      false
    );

  const fetchMasterData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/masters_requirements/",
      setMasterData,
      "No Master Data found",
      false
    );

  const fetchDocumentData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/documents-required/",
      setDocumentData,
      "No Document Data found",
      false
    );
  const columnDefs = [
    {
      headerName: "Student First Name",
      field: "student_First_Name",
      editable: true,
    },
    {
      headerName: "Student Last Name",
      field: "student_Last_Name",
      editable: true,
    },
    {
      headerName: "Student Email",
      field: "student_email",
      editable: true,
    },
    {
      headerName: "Country Interested",
      field: "country_interested.country",
      editable: true,
    },
    {
      headerName: "University Interested",
      field: "university_interested.univ_name",
      editable: true,
    },
    {
      headerName: "Interested Service",
      field: "country_interested.country",
      valueGetter: (params) => {
        const services = params.data.Interested_Services?.map(
          (service) => service.Services
        ).join(", ");
        return services || "No services";
      },
      editable: true,
    },
    {
      headerName: "Course Interested",
      field: "course_interested.course_name",
      editable: true,
    },
    {
      headerName: "Level Applying For",
      field: "level_applying_for.levels",
      editable: true,
    },
    {
      headerName: "Intake Interested",
      field: "intake_interested.intake_Name",
      editable: true,
    },
    {
      headerName: "Assigned Users",
      field: "assigned_users.username",
      editable: true,
    },
    {
      headerName: "Enquiry Status",
      field: "enquiry_status.status",
      editable: true,
    },
    { headerName: "Notes", field: "notes", editable: true },
    { headerName: "Total Price", field: "", editable: true },
    {
      headerName: "Source Inquiry",
      field: "Source_Enquiry.Source",
      editable: true,
    },
  ];

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getNewData = () => {
    setData(1);
  }


  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle d-flex justify-content-between align-items-center">
          <nav>
            <h5 className="card-title">Enquiry</h5>
            <Breadcrumbs main="Enquiry" />
          </nav>
          <div>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="bi bi-file-plus"></i>&nbsp; Add Enquiry
            </button>
          </div>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card-body">
                {errs ? (
                  <div className="alert alert-danger text-center" role="alert">
                    {errs}
                  </div>
                ) : (
                  <div
                    className="ag-theme-alpine"
                    style={{ height: "500px", width: "100%" }}
                  >
                    <Table
                      rowData={EnquiryData}
                      columnDefs={columnDefs}
                      rowSelection="multiple"
                      pagination={true}
                      onCellValueChanged={handleCellValueChanged}
                    />
                  </div>
                )}
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
            <Modal.Title>Add Enquiry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddEnquiry
              sourceEnquiry={SourceData}
              EducationData={EducationData}
              countryData={countryData}
              IntrestedCountryData={InterestedCountryData}
              universitiesData={universitiesData}
              level={levelData}
              courseData={courseData}
              IntakeData={IntakeData}
              userData={userData}
              servicesData={servicesData}
              StatusData={StatusData}
              followupData={followupData}
              IeltsData={IeltsData}
              PteData={PteData}
              DuolingoData={DuolingoData}
              GmatData={GmatData}
              GreData={GreData}
              ToeflData={ToeflData}
              courseLevel={courseLevel}
              TenthData={TenthPercentage}
              TwelthData={TwelthPercentage}
              BachelorData={BachelorData}
              MasterData={MasterData}
              closeModal={closeModal}
              getNewData={getNewData}
              DocumentData={DocumentData}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ViewEnquiry;

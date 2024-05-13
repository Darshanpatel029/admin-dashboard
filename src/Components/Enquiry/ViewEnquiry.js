import React, { useState, useEffect } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Modal from "react-bootstrap/Modal";
import AddEnquiry from "./AddEnquiry";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import Table from "../UI/Table/Table";

const ViewEnquiry = () => {
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

  const updateDataOnServer = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const url = `https://cloudconnectcampaign.com/espicrmnew/api/enquiries/${data.id}/`;
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log("Update successful:", responseData);
      } else {
        console.error("Update failed:", responseData);
      }
    } catch (error) {
      console.error("Failed to update data:", error);
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
      "https://cloudconnectcampaign.com/espicrmnew/api/enquiries/",
      setEnquiryData,
      "No Inquiry found"
    );

  const fetchSourceData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmnew/api/enquiry_sources/",
      setSourceData,
      "No Source Inquiry found"
    );

  const fetchEducationData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmnew/api/current-education/",
      setEducationData,
      "No Education Data found"
    );

  const fetchIntrestedCountryData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmnew/api/countriesIntersted/",
      setinterestedCountryData,
      "No interested Country Data found"
    );
  const fetchCountryData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmnew/api/countries/",
      setCountryData,
      "No Country Data found"
    );

  const fetchUniversityData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmnew/api/universities/",
      setUniversities,
      "No University Data found"
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

  const fetchIntakeData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmnew/api/intakes/",
      setIntakeData,
      "No Intake Data found"
    );
  const fetchuserData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmnew/api/users/",
      setuserData,
      "No Intake Data found"
    );

  const fetchServicesData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmnew/api/available-services/",
      setServicesData,
      "No Services Data found"
    );

  const fetchStatusData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmnew/api/enquiry-statuses/",
      serStatusData,
      "No EnquiryStatus Data found"
    );

  const fetchfollowupData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmnew/api/enquiry-followups/",
      setFollowupData,
      "No Followup Data found"
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
    { headerName: "Student Email", field: "student_email", editable: true },
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
              <i class="bi bi-file-plus"></i>&nbsp; Add Enquiry
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
          size="lg"
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
              closeModal={closeModal}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ViewEnquiry;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Modal from "react-bootstrap/Modal";
import AddEnquiry from "./AddEnquiry";
import EditIcon from "./EditIcon";

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
  const [servicesData, setServicesData] = useState([]);
  const [StatusData, serStatusData] = useState([]);
  const [errs, setErrs] = useState("");

  useEffect(() => {
    fetchEnquiries();
    fetchSourceData();
    fetchEducationData();
    fetchIntrestedCountryData();
    fetchCountryData();
    fetchUniversityData();
    fetchLevelData();
    fetchCourseData();
    fetchIntakeData();
    fetchServicesData();
    fetchStatusData();
  }, []);

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

//   const handleCellValueChanged = async (event) => {
//     const { data, colDef, newValue, oldValue } = event;
//     if (newValue !== oldValue) {
//       const updatedRows = EnquiryData.map((row) =>
//         row.id === data.id ? { ...row, [colDef.field]: newValue } : row
//       );
//       setEnquiryData(updatedRows);

//       const update = { id: data.id, [colDef.field]: newValue };
//       console.log(update);

//       try {
//         const response = await fetch(
//           `https://cloudconnectcampaign.com/espicrmnew/api/enquiries/${data.id}/`,
//           {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(update),
//           }
//         );

//         if (!response.ok) {
//           setEnquiryData(
//             EnquiryData.map((row) =>
//               row.id === data.id ? { ...row, [colDef.field]: oldValue } : row
//             )
//           );
//         }

//         console.log("Update successful");
//       } catch (error) {
//         console.error("Error in updating data:", error);
//       }
//     }
//   };

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
      field: "country_interested",
    },
    {
      headerName: "University Interested",
      field: "university_interested.univ_name",
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
    },
    { headerName: "Course Interested", field: "course_interested.course_name" },
    { headerName: "Level Applying For", field: "level_applying_for.levels" },
    { headerName: "Intake Interested", field: "intake_interested.intake_Name" },
    { headerName: "Assigned Users", field: "assigned_users.username" },
    { headerName: "Enquiry Status", field: "enquiry_status.status" },
    { headerName: "Notes", field: "notes" },
    { headerName: "Total Price", field: "" },
    { headerName: "Source Inquiry", field: "Source_Enquiry.Source" },
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
              className="btn btn-primary btn-sm"
              onClick={() => setIsModalOpen(true)}
            >
              Add Enquiry
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
                    <AgGridReact
                      rowData={EnquiryData}
                      columnDefs={columnDefs}
                      pagination={true}
                      paginationPageSize={10}
                    //   onCellValueChanged={handleCellValueChanged}
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
              servicesData={servicesData}
              StatusData={StatusData}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ViewEnquiry;

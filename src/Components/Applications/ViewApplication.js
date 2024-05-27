import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Modal from "react-bootstrap/Modal";
import AddApplication from "./AddApplication";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import Table from "../UI/Table/Table";

const ViewApplication = () => {
  const [data, setData] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationData, setapplicationData] = useState([]);
  const [EnquiryData, setEnquiryData] = useState([]);
  const [statusData, setstatusData] = useState([]);
  const [errs, setErrs] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchApplications(token);
    fetchEnquiries();
    fetchStatusData();
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

  const fetchApplications = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/application/",
      setapplicationData,
      "No Detail Inquiry found"
    );

  const fetchEnquiries = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/assesment/",
      setEnquiryData,
      "No Inquiry found"
    );

  const fetchStatusData = () =>
    fetchData(
      "https://cloudconnectcampaign.com/espicrmlatest/api/application-statuses/",
      setstatusData,
      "No Inquiry found"
    );

  const openInNewTabRenderer = (params) => {
    if (params.value) {
      return (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-arrow-down-circle" style={{ color: "red" }}></i>
        </a>
      );
    }
    return null;
  };



  const columnDefs = [
    {
      headerName: "Application",
      field: "application.enquiry.Current_Enquiry.student_First_Name",
    },
    {
      headerName: "Application Status",
      field: "application_status.App_status",
    },
    {
      headerName: "SOP", field: "sop",
      cellRenderer: openInNewTabRenderer,

    },
    {
      headerName: "Passport", field: "passport",
      cellRenderer: openInNewTabRenderer,

    },
    {
      headerName: "CV", field: "cv",
      cellRenderer: openInNewTabRenderer,

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
            <h5 className="card-title">Application</h5>
            <Breadcrumbs main="Application" />
          </nav>
          <div>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="bi bi-file-plus"></i>&nbsp; Add Application
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
                        rowData={applicationData}
                        columnDefs={columnDefs}
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
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddApplication
              EnquiryData={EnquiryData}
              statusData={statusData}
              closeModal={closeModal}
              getNewData={getNewData}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ViewApplication;

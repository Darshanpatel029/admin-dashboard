import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Modal from "react-bootstrap/Modal";
import AddPayment from "./AddPayment";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import Table from "../UI/Table/Table";

const ViewPayment = () => {
  const [data, setData] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentData, setpaymentData] = useState([]);
  const [enquiryData, setEnquiryData] = useState([]);
  const [paymentMode, setPaymentMode] = useState([]);
  const [paymentTypes, setPaymentType] = useState([]);
  const [avilableServices, setAvailableServices] = useState([]);
  const [paymentStatus, setpaymentStatus] = useState([]);
  const [followupData, setfollowupData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [errs, setErrs] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchPaymentData(token);
    fetchEnquiryData();
    fetchPaymentTypes();
    fetchAvailableServices();
    fetchPaymentModes();
    fetchPaymentStatus();
    fetchUsers();
    fetchFollowupData();
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

  const fetchPaymentData = () =>
    fetchData(
      "https://espicrm.co/latest/api/payments/",
      setpaymentData,
      "No Payment found"
    );

  const fetchEnquiryData = () =>
    fetchData(
      "https://espicrm.co/latest/api/detailsEnquiry/",
      setEnquiryData,
      "No Enquiry found"
    );

  const fetchPaymentTypes = () =>
    fetchData(
      "https://espicrm.co/latest/api/payment_types/",
      setPaymentType,
      "No PaymentType Data found"
    );

  const fetchAvailableServices = () =>
    fetchData(
      "https://espicrm.co/latest/api/available-services/",
      setAvailableServices,
      "No interested Country Data found"
    );
  const fetchPaymentModes = () =>
    fetchData(
      "https://espicrm.co/latest/api/payment_modes/",
      setPaymentMode,
      "No Country Data found"
    );

  const fetchPaymentStatus = () =>
    fetchData(
      "https://espicrm.co/latest/api/payment_statuses/",
      setpaymentStatus,
      "No University Data found"
    );

  const fetchUsers = () =>
    fetchData(
      "https://espicrm.co/latest/api/users/",
      setUserData,
      "No User Data found"
    );

  const fetchFollowupData = () =>
    fetchData(
      "https://espicrm.co/latest/api/payment-followups/",
      setfollowupData,
      "No PaymentFollowUp Data found"
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
      headerName: "Payment Id",
      field: "payment_id",
    },
    {
      headerName: "Payment Type",
      field: "Payment_Type.Type",
    },
    { headerName: "Payment Date", field: "payment_date" },
    {
      headerName: "Payment Amount",
      field: "payment_amount",
    },
    {
      headerName: "Payment Mode",
      field: "payment_mode.Mode",
    },
    {
      headerName: "Payment Status",
      field: "payment_status.Status",
    },
    {
      headerName: "Payment Reference",
      field: "payment_reference",
    },
    {
      headerName: "Payment Remarks",
      field: "payment_remarks",
    },
    {
      headerName: "Payment Document",
      field: "payment_document",
      cellRenderer: openInNewTabRenderer,
    },
    {
      headerName: "Pending Amount",
      field: "0",
    },
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
            <h5 className="card-title">Payments</h5>
            <Breadcrumbs main="Payments" />
          </nav>
          <div>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="bi bi-file-plus"></i>&nbsp; Add Payment
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
                      rowData={paymentData}
                      columnDefs={columnDefs}
                      rowSelection="multiple"
                      pagination={true}
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
            <Modal.Title>Add Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddPayment
              enquiryData={enquiryData}
              paymentMode={paymentMode}
              paymentTypes={paymentTypes}
              avilableServices={avilableServices}
              paymentStatus={paymentStatus}
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

export default ViewPayment;

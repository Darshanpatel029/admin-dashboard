import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Loading from "../UI/Loading/Loading";

const initialSubmit = {
  isError: false,
  errMsg: null,
  isSubmitting: false,
};

const AddPayment = (props) => {
  const [paymentData, setPaymentData] = useState({
    Memo_For: "",
    payment_id: "",
    Payment_Type: "",
    Payment_For: [],
    payment_date: "",
    payment_amount: "",
    payment_mode: "",
    payment_status: "",
    payment_reference: "",
    payment_remarks: "",
    payment_document: "",
    payment_received_by: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setPaymentData((prevState) => ({
        ...prevState,
        token: token,
      }));
    }
  }, []);


  const [formStatus, setFormStatus] = useState(initialSubmit);

  const validateForm = () => {
    if (!paymentData.Memo_For) {
      setFormError("Memo is Required");
      return false;
    }
    else if (!paymentData.payment_id) {
      setFormError("Payment id is Required");
      return false;
    }
    else if (!paymentData.Payment_Type) {
      setFormError("Payment Type is Required");
      return false;
    }
    else if (!paymentData.payment_date) {
      setFormError("Payment Date is Required");
      return false;
    }
    else if (!paymentData.payment_amount) {
      setFormError("PAyment Amount is Required");
      return false;
    }
    else if (!paymentData.payment_mode) {
      setFormError("PAyment Mode is Required");
      return false;
    }
    else if (!paymentData.payment_status) {
      setFormError("Payment Status is Required");
      return false;
    }
    else if (!paymentData.payment_document) {
      setFormError("Payment Document is Required");
      return false;
    }
    else if (!paymentData.payment_received_by) {
      setFormError("Payment Receiver is Required");
      return false;
    }

    setFormStatus({
      isError: false,
      errMsg: null,
      isSubmitting: false,
    });
    return true;
  };

  const setFormError = (errMsg) => {
    setFormStatus({
      isError: true,
      errMsg,
      isSubmitting: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    const newValue = files ? files[0] : value;

    if (e.target.multiple) {
      const selectedOptions = Array.from(e.target.selectedOptions).map(
        (option) => parseInt(option.value)
      );

      setPaymentData((prevState) => ({
        ...prevState,
        [name]: selectedOptions,
      }));
    } else {
      setPaymentData((prevState) => ({
        ...prevState,
        [name]: newValue,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus({
      isError: false,
      errMsg: null,
      isSubmitting: true,
    });
    const formData = new FormData();

    formData.append("payment_document", paymentData.payment_document);

    Object.keys(paymentData).forEach((key) => {
      if (key !== "payment_document") {
        formData.append(key, paymentData[key]);
      }
    });

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          ...(paymentData.token && {
            Authorization: `Bearer ${paymentData.token}`,
          }),
        },
        body: formData,
      };

      const response = await fetch(
        "https://cloudconnectcampaign.com/espicrmnew/api/payments/",
        requestOptions
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          `API call failed with status: ${response.status
          }, body: ${JSON.stringify(data)}`
        );
      }
      toast.success("Payment Data submitted successfully!");
      props.closeModal();
    } catch (error) {
      toast.error("Failed to submit Payment Data.");
    }
  };

  return (
    <section className="section">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-body">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Payment Details
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="row mb-3">
                            <label
                              htmlFor="Source_Enquiry"
                              className="col-sm-4 col-form-label"
                            >
                              Memo For
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                name="Memo_For"
                                value={paymentData.Memo_For}
                                className="form-select"
                                onChange={handleChange}
                              >
                                <option selected>Select Source</option>
                                {props.enquiryData.map((Enquiry) => (
                                  <option key={Enquiry.id} value={Enquiry.id}>
                                    {Enquiry.Current_Enquiry.student_First_Name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <label
                              htmlFor="student_First_Name"
                              className="col-sm-4 col-form-label"
                            >
                              Payment id
                            </label>
                            <div className="col-md-6">
                              <input
                                type="text"
                                name="payment_id"
                                className="form-control"
                                id="student_First_Name"
                                value={paymentData.payment_id}
                                onChange={handleChange}

                              />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label
                              htmlFor="Source_Enquiry"
                              className="col-sm-4 col-form-label"
                            >
                              Payment Type
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                name="Payment_Type"
                                value={paymentData.Payment_Type}
                                className="form-select"
                                onChange={handleChange}
                              >
                                <option selected>Select Source</option>
                                {props.paymentTypes.map((Types) => (
                                  <option key={Types.id} value={Types.id}>
                                    {Types.Type}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="row mb-4">
                            <label className="col-sm-4 col-form-label">
                              Interested Services
                            </label>
                            <div className="col-md-6">
                              <select
                                className="form-control"
                                name="Payment_For"
                                value={paymentData.Payment_For}
                                onChange={handleChange}
                                multiple
                              >
                                {props.avilableServices.map((services) => (
                                  <option key={services.id} value={services.id}>
                                    {services.Services}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="row mb-4">
                            <label
                              htmlFor="student_First_Name"
                              className="col-sm-4 col-form-label"
                            >
                              Payment Date
                            </label>
                            <div className="col-md-6">
                              <input
                                type="date"
                                name="payment_date"
                                className="form-control"
                                id="student_First_Name"
                                value={paymentData.payment_date}
                                onChange={handleChange}

                              />
                            </div>
                          </div>

                          <div className="row mb-4">
                            <label
                              htmlFor="student_Last_Name"
                              className="col-sm-4 col-form-label"
                            >
                              Payment Amount
                            </label>
                            <div className="col-md-6">
                              <input
                                type="text"
                                name="payment_amount"
                                className="form-control"
                                id="student_Last_Name"
                                value={paymentData.payment_amount}
                                onChange={handleChange}

                              />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label
                              htmlFor="Source_Enquiry"
                              className="col-sm-4 col-form-label"
                            >
                              Payment Mode
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                name="payment_mode"
                                value={paymentData.payment_mode}
                                className="form-select"
                                onChange={handleChange}
                              >
                                <option selected>Select Source</option>
                                {props.paymentMode.map((Mode) => (
                                  <option key={Mode.id} value={Mode.id}>
                                    {Mode.Mode}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label
                              htmlFor="Source_Enquiry"
                              className="col-sm-4 col-form-label"
                            >
                              Payment Status
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                name="payment_status"
                                value={paymentData.payment_status}
                                className="form-select"
                                onChange={handleChange}
                              >
                                <option selected>Select Source</option>
                                {props.paymentStatus.map((status) => (
                                  <option key={status.id} value={status.id}>
                                    {status.Status}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="row mb-4">
                            <label
                              htmlFor="student_Last_Name"
                              className="col-sm-4 col-form-label"
                            >
                              Payment Reference
                            </label>
                            <div className="col-md-6">
                              <input
                                type="text"
                                name="payment_reference"
                                className="form-control"
                                id="student_Last_Name"
                                value={paymentData.payment_reference}
                                onChange={handleChange}

                              />
                            </div>
                          </div>

                          <div className="row mb-4">
                            <label className="col-sm-4 col-form-label">
                              Payment Remarks
                            </label>
                            <div className="col-md-6">
                              <textarea
                                className="form-control"
                                style={{ height: "100px" }}
                                name="payment_remarks"
                                value={paymentData.payment_remarks}
                                onChange={handleChange}
                                required
                              ></textarea>
                            </div>
                          </div>

                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                              onChange={handleChange}
                            >
                              Payment Documents
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                name="payment_document"
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label
                              htmlFor="Source_Enquiry"
                              className="col-sm-4 col-form-label"
                            >
                              Payment Received by
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                name="payment_received_by"
                                value={paymentData.payment_received_by}
                                className="form-select"
                                onChange={handleChange}
                              >
                                <option selected>Select Source</option>
                                {props.userData.map((user) => (
                                  <option key={user.id} value={user.id}>
                                    {user.username}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3 text-center">
              <div className="col-sm-10 ">
                {formStatus.isError ? (
                  <div className="text-danger mb-2">{formStatus.errMsg}</div>
                ) : (
                  <div className="text-success mb-2">{formStatus.errMsg}</div>
                )}
                {formStatus.isSubmitting ? (
                  <Loading />
                ) : (
                  <button className="btn btn-primary btn-sm" type="submit">
                    Submit Form
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddPayment;

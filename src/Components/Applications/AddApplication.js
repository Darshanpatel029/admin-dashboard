import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Loading from "../UI/Loading/Loading";



const initialSubmit = {
  isError: false,
  errMsg: null,
  isSubmitting: false,
};

const AddApplication = (props) => {
  const [application, setApplication] = useState({
    application: "",
    application_status: "",
    Rejection_reason: "",

    diploma_marksheet: "",
    bachelor_marksheet: "",
    master_marksheet: "",

    ielts: "",
    gre: "",
    toefl: "",
    gmat: "",
    pte: "",
    work_experience: "",
    other_documents: "",

    sop: "",
    cv: "",
    passport: "",
  });

  const token = localStorage.getItem("token");
  const [formStatus, setFormStatus] = useState(initialSubmit);

  const validateForm = () => {
    if (!application.application) {
      setFormError("Application is Required");
      return false;
    }
    else if (!application.application_status) {
      setFormError("Application status is Required");
      return false;
    }
    else if (!application.sop) {
      setFormError("SOP is Required");
      return false;
    }
    else if (!application.cv) {
      setFormError("CV is Required");
      return false;
    }
    else if (!application.passport) {
      setFormError("Passport is Required");
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setApplication((prevState) => ({
        ...prevState,
        token: token,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;
    setApplication((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
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

    formData.append("diploma_marksheet", application.diploma_marksheet);
    formData.append("bachelor_marksheet", application.bachelor_marksheet);
    formData.append("master_marksheet", application.master_marksheet);

    formData.append("ielts", application.ielts);
    formData.append("gre", application.gre);
    formData.append("toefl", application.toefl);
    formData.append("gmat", application.gmat);
    formData.append("pte", application.pte);
    formData.append("work_experience", application.work_experience);
    formData.append("other_documents", application.other_documents);

    formData.append("sop", application.sop);
    formData.append("cv", application.cv);
    formData.append("passport", application.passport);

    Object.keys(application).forEach((key) => {
      if (
        key !== "diploma_marksheet" &&
        key !== "bachelor_marksheet" &&
        key !== "master_marksheet" &&
        key !== "ielts" &&
        key !== "gre" &&
        key !== "toefl" &&
        key !== "gmat" &&
        key !== "pte" &&
        key !== "work_experience" &&
        key !== "other_documents" &&
        key !== "Gre_Result" &&
        key !== "Gmat_Result" &&
        key !== "Work_Experience_Document" &&
        key !== "Passport_Document" &&
        key !== "sop" &&
        key !== "cv" &&
        key !== "passport"
      ) {
        formData.append(key, application[key]);
      }
    });

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      };

      const response = await fetch(
        "https://cloudconnectcampaign.com/espicrmnew/api/application/",
        requestOptions
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(
          `API call failed with status: ${response.status
          }, body: ${JSON.stringify(data)}`
        );
      }
      toast.success("Application submitted successfully!");
      props.closeModal();
    } catch (error) {
      toast.error("Failed to submit Application.");
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
                      Application Details
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Academic Documents
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Test Scores & Other Documents
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-Enquiry-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Enquiry"
                      type="button"
                      role="tab"
                      aria-controls="pills-Enquiry"
                      aria-selected="false"
                    >
                      Personal Documents
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
                    <div className="">
                      <div className="card-body">
                        <form className="row g-3">
                          <div className="col-md-12">
                            <div className="row mb-1">
                              <label
                                className="col-sm-4 col-form-label"
                                required
                              >
                                Application
                              </label>
                              <div className="col-md-6">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  onChange={handleChange}
                                  name="application"
                                  value={application.application}

                                >
                                  <option selected>Select Source</option>
                                  {props.EnquiryData.map((Enquiry) => (
                                    <option key={Enquiry.id} value={Enquiry.id}>
                                      {Enquiry.enquiry.Current_Enquiry.student_First_Name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="row mb-1">
                              <label
                                className="col-sm-4 col-form-label"

                              >
                                Application Status
                              </label>
                              <div className="col-md-6">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  onChange={handleChange}
                                  name="application_status"
                                  value={application.application_status}

                                >
                                  <option selected>Select Source</option>
                                  {props.statusData.map((Status) => (
                                    <option key={Status.id} value={Status.id}>
                                      {Status.App_status}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="">
                      <div className="card-body">
                        <form className="row g-3">
                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Diploma Marksheet
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="diploma_marksheet"
                                required
                              />
                            </div>
                          </div>
                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Bachelor Marksheet
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="bachelor_marksheet"
                                required
                              />
                            </div>
                          </div>

                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Master Marksheet
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="master_marksheet"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="">
                      <div className="card-body">
                        <form className="row g-3">
                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Ielts
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="ielts"
                                required
                              />
                            </div>
                          </div>
                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Gre
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="gre"
                                required
                              />
                            </div>
                          </div>

                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Toefl
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="toefl"
                                required
                              />
                            </div>
                          </div>

                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Gmat
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="gmat"
                                required
                              />
                            </div>
                          </div>
                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Pte
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="pte"
                                required
                              />
                            </div>
                          </div>
                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Work Experience
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="work_experience"
                                required
                              />
                            </div>
                          </div>
                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Other Documents
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="other_documents"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-Enquiry"
                    role="tabpanel"
                    aria-labelledby="Enquiry-tab"
                  >
                    <div className="">
                      <div className="card-body">
                        <form className="row g-3">
                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Sop
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="sop"
                              />
                            </div>
                          </div>
                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Cv
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="cv"
                              />
                            </div>
                          </div>

                          <div className="row mb-3 mt-3">
                            <label
                              for="inputNumber"
                              className="col-sm-4 col-form-label"
                            >
                              Passport
                            </label>
                            <div className="col-md-6">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                name="passport"
                              />
                            </div>
                          </div>
                        </form>
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

export default AddApplication;

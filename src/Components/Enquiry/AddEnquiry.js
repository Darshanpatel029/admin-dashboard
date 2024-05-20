import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../UI/Loading/Loading";
import Modal from "react-bootstrap/Modal";
import EnquiryFollowup from "../FollowUp/EnquiryFollowUp";

// part of validation
const initialSubmit = {
  isError: false,
  errMsg: null,
  isSubmitting: false,
};
// part of validation

const AddEnquiry = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    student_First_Name: "",
    student_Last_Name: "",
    student_passport: "",
    Source_Enquiry: "",

    student_phone: "",
    alternate_phone: "",
    student_email: "",
    student_address: "",
    student_country: "",
    student_state: "",
    student_city: "",
    student_zip: "",

    current_education: "",

    country_interested: "",
    university_interested: "",
    level_applying_for: "",
    course_interested: "",
    intake_interested: "",
    Interested_Services: [],
    assigned_users: "",
    created_by: 1,
    enquiry_status: "",
    EnquiryFollowup: "",
    notes: "",
  });

  // Validation

  const [formStatus, setFormStatus] = useState(initialSubmit);
  const validateForm = () => {
    if (!formData.student_First_Name) {
      setFormError("Student Name is Required");
      return false;
    } else if (!formData.student_Last_Name) {
      setFormError("Student Last Name is Required");
      return false;
    } else if (!formData.student_passport) {
      setFormError("Student Passport is Required");
      return false;
    } else if (!formData.student_phone) {
      setFormError("Student LastName is Required");
      return false;
    } else if (!formData.alternate_phone) {
      setFormError("alternate phone is Required");
      return false;
    } else if (!formData.student_email) {
      setFormError("Email is Required");
      return false;
    } else if (!formData.student_address) {
      setFormError("Address is Required");
      return false;
    } else if (!formData.student_state) {
      setFormError("state is Required");
      return false;
    } else if (!formData.student_city) {
      setFormError("City is Required");
      return false;
    } else if (!formData.student_zip) {
      setFormError("Zip is Required");
      return false;
    } else if (!formData.notes) {
      setFormError("Notes is Required");
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

  // validation end

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.multiple) {
      const selectedOptions = Array.from(e.target.selectedOptions).map(
        (option) => option.value
      );
      setFormData((prevState) => ({
        ...prevState,
        [name]: selectedOptions,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
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

    const apiURL =
      "https://cloudconnectcampaign.com/espicrmnew/api/create-enquiry/";
    const token = localStorage.getItem("token");
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(apiURL, requestOptions);
      if (response.status === 201) {
        props.getNewData();
        toast.success("Enquiry submitted successfully!");
        props.closeModal();
      } else {
        toast.error("Failed to submit enquiry.");
      }
    } catch (error) {
      toast.error("Failed to submit enquiry.");
    } finally {
      setFormStatus({
        ...formStatus,
        isSubmitting: false,
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
                      type="button "
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Student Info
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
                      Contact Info
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
                      Education Info
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
                      Enquiry Info
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-Counsellor-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Counsellor"
                      type="button"
                      role="tab"
                      aria-controls="pills-Counsellor"
                      aria-selected="false"
                    >
                      For Counsellor
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
                          <div className="row mb-2">
                            <label
                              htmlFor="student_First_Name"
                              className="col-sm-4 col-form-label"
                            >
                              Student First Name
                            </label>
                            <div className="col-md-6">
                              <input
                                type="text"
                                name="student_First_Name"
                                className="form-control"
                                id="student_First_Name"
                                value={formData.student_First_Name}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="row mb-2">
                            <label
                              htmlFor="student_Last_Name"
                              className="col-sm-4 col-form-label"
                            >
                              Student Last Name
                            </label>
                            <div className="col-md-6">
                              <input
                                type="text"
                                name="student_Last_Name"
                                className="form-control"
                                id="student_Last_Name"
                                value={formData.student_Last_Name}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label
                              htmlFor="student_passport"
                              className="col-sm-4 col-form-label"
                            >
                              Student Passport
                            </label>
                            <div className="col-md-6">
                              <input
                                type="text"
                                name="student_passport"
                                className="form-control"
                                id="student_passport"
                                value={formData.student_passport}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label
                              htmlFor="Source_Enquiry"
                              className="col-sm-4 col-form-label"
                            >
                              Source Enquiry
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                name="Source_Enquiry"
                                value={formData.Source_Enquiry}
                                className="form-select"
                                onChange={handleChange}
                              >
                                <option selected>Select Source Enquiry</option>
                                {props.sourceEnquiry.map((option) => (
                                  <option key={option.id} value={option.id}>
                                    {option.Source}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
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
                        <div className="row g-3">
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Student Phone
                            </label>
                            <div className="col-md-6">
                              <input
                                type="number"
                                className="form-control"
                                name="student_phone"
                                value={formData.student_phone}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Alternate Phone
                            </label>
                            <div className="col-md-6">
                              <input
                                type="number"
                                className="form-control"
                                name="alternate_phone"
                                value={formData.alternate_phone}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Student Email
                            </label>
                            <div className="col-md-6">
                              <input
                                type="email"
                                className="form-control"
                                name="student_email"
                                value={formData.student_email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Student Address
                            </label>
                            <div className="col-md-6">
                              <textarea
                                className="form-control"
                                style={{ height: "100px" }}
                                name="student_address"
                                value={formData.student_address}
                                onChange={handleChange}
                              ></textarea>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Student Country
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                className="form-control"
                                name="student_country"
                                value={formData.student_country}
                                onChange={handleChange}
                                required
                              >
                                <option selected>Select Country</option>
                                {props.countryData.map((countryData) => (
                                  <option
                                    key={countryData.id}
                                    value={countryData.country}
                                  >
                                    {countryData.country}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Student State
                            </label>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                name="student_state"
                                value={formData.student_state}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Student City
                            </label>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                name="student_city"
                                value={formData.student_city}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Student Zip
                            </label>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                name="student_zip"
                                value={formData.student_zip}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
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
                        <div className="row g-3">
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Current Education
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                className="form-control"
                                name="current_education"
                                value={formData.current_education}
                                onChange={handleChange}
                                required
                              >
                                <option selected>Select Current Education</option>
                                {props.EducationData.map((EducationOption) => (
                                  <option
                                    key={EducationOption.id}
                                    value={EducationOption.id}
                                  >
                                    {EducationOption.current_education}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
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
                        <div className="row g-3">
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Country Interested
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                className="form-control"
                                name="country_interested"
                                value={formData.country_interested}
                                onChange={handleChange}
                                required
                              >
                                <option selected>
                                  Select Interested Country
                                </option>
                                {props.IntrestedCountryData.map(
                                  (countryInterested) => (
                                    <option
                                      key={countryInterested.id}
                                      value={countryInterested.id}
                                    >
                                      {countryInterested.country}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          </div>

                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              University Interested
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                className="form-control"
                                name="university_interested"
                                value={formData.university_interested}
                                onChange={handleChange}
                                required
                              >
                                <option selected>
                                  Select Intrested University
                                </option>
                                {props.universitiesData.map(
                                  (IntrestedUniversity) => (
                                    <option
                                      key={IntrestedUniversity.id}
                                      value={IntrestedUniversity.id}
                                    >
                                      {IntrestedUniversity.univ_name}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Level Applying For
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                className="form-control"
                                name="level_applying_for"
                                value={formData.level_applying_for}
                                onChange={handleChange}
                                required
                              >
                                <option selected>
                                  Select Level For Applying
                                </option>
                                {props.level.map((levelForApplying) => (
                                  <option
                                    key={levelForApplying.id}
                                    value={levelForApplying.id}
                                  >
                                    {levelForApplying.levels}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Course Interested
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                className="form-control"
                                name="course_interested"
                                value={formData.course_interested}
                                onChange={handleChange}
                                required
                              >
                                <option selected>Select Interested Course</option>
                                {props.courseData.map((course) => (
                                  <option key={course.id} value={course.id}>
                                    {course.course_name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Intake Interested
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                className="form-control"
                                name="intake_interested"
                                value={formData.intake_interested}
                                onChange={handleChange}
                                required
                              >
                                <option selected>Select Interested Intake</option>
                                {props.IntakeData.map((intake) => (
                                  <option key={intake.id} value={intake.id}>
                                    {intake.intake_Name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Interested Services
                            </label>
                            <div className="col-md-6">
                              <select
                                className="form-control"
                                name="Interested_Services"
                                value={formData.Interested_Services}
                                onChange={handleChange}
                                multiple
                              >
                                {props.servicesData.map((services) => (
                                  <option key={services.id} value={services.id}>
                                    {services.Services}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-Counsellor"
                    role="tabpanel"
                    aria-labelledby="Counsellor-tab"
                  >
                    <div className="">
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Assigned Users
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                name="assigned_users"
                                className="form-select"
                                value={formData.assigned_users}
                                onChange={handleChange}
                                required
                              >
                                <option selected>Select User</option>
                                {props.userData.map((user) => (
                                  <option key={user.id} value={user.id}>
                                    {user.username}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Enquiry Status
                            </label>
                            <div className="col-md-6">
                              <select
                                type="number"
                                name="enquiry_status"
                                className="form-select"
                                value={formData.enquiry_status}
                                onChange={handleChange}
                                required
                              >
                                <option selected>Select Enquiry Status</option>
                                {props.StatusData.map((status) => (
                                  <option key={status.id} value={status.id}>
                                    {status.status}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Enquiry Followup
                            </label>
                            <div className="col-md-6 d-flex">
                              <select
                                type="number"
                                name="EnquiryFollowup"
                                className="form-select"
                                value={formData.EnquiryFollowup}
                                onChange={handleChange}
                                required
                              >
                                <option selected>Select Enquiry Followup</option>
                                {props.followupData.map((Followup) => (
                                  <option key={Followup.id} value={Followup.id}>
                                    {Followup.next_followup_date}
                                  </option>
                                ))}
                              </select>
                              <div className="d-flex justify-content-center align-items-center m-2">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-sm"
                                  onClick={() => setIsModalOpen(true)}
                                >
                                  <i class="bi bi-file-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <label className="col-sm-4 col-form-label">
                              Notes
                            </label>
                            <div className="col-md-6">
                              <textarea
                                className="form-control"
                                style={{ height: "100px" }}
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                              ></textarea>
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

      {isModalOpen && (
        <Modal
          show={isModalOpen}
          onHide={() => setIsModalOpen(false)}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Add FollowUp</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EnquiryFollowup
              closeModal={closeModal}
              user={props.userData}
              getNewData={props.getNewData}
            />
          </Modal.Body>
        </Modal>
      )}
    </section>
  );
};

export default AddEnquiry;

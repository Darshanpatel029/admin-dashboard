import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../UI/Loading/Loading";
import Modal from "react-bootstrap/Modal";
import AssessmentFollowup from "../FollowUp/AssessmentFollowup";

const initialSubmit = {
    isError: false,
    errMsg: null,
    isSubmitting: false,
};

const AddAssesment = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [assessmentData, setAssessmentData] = useState({
        assigned_users: "",
        enquiry: "",
        student_country: "",
        university: "",
        level_applying_for: "",
        course_interested: "",
        intake_interested: "",
        specialisation: "",
        duration: "",
        application_fee: "",
        tution_fee: "",
        fee_currency: "",
        course_link: "",
        AssesmentFollowup: "",
        ass_status: "",
        notes: "",
    });
    const [formStatus, setFormStatus] = useState(initialSubmit);

    const validateForm = () => {
        if (!assessmentData.assigned_users) {
            setFormError("Assigned user is Required");
            return false;
        } else if (!assessmentData.enquiry) {
            setFormError("Enquiry is Required");
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAssessmentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;
        setFormStatus({
            isError: false,
            errMsg: null,
            isSubmitting: true,
        });
        const token = localStorage.getItem("token");
        const data = {
            assigned_users: parseInt(assessmentData.assigned_users),
            enquiry: parseInt(assessmentData.enquiry),
            student_country: parseInt(assessmentData.student_country),
            university: parseInt(assessmentData.university),
            level_applying_for: parseInt(assessmentData.level_applying_for),
            course_interested: parseInt(assessmentData.course_interested),
            intake_interested: parseInt(assessmentData.intake_interested),
            specialisation: assessmentData.specialisation,
            duration: assessmentData.duration,
            application_fee: assessmentData.application_fee,
            tution_fee: assessmentData.tution_fee,
            fee_currency: assessmentData.fee_currency,
            course_link: assessmentData.course_link,
            AssesmentFollowup: parseInt(assessmentData.AssesmentFollowup),
            ass_status: parseInt(assessmentData.ass_status),
            notes: assessmentData.notes,
        };
        // const formData = new FormData();
        // formData.append("assigned_users", assessmentData.assigned_users);
        // formData.append("enquiry", assessmentData.enquiry);
        // formData.append("student_country", assessmentData.student_country);
        // formData.append("university", assessmentData.university);
        // formData.append("level_applying_for", assessmentData.level_applying_for);
        // formData.append("course_interested", assessmentData.course_interested);

        // formData.append("specialisation", assessmentData.specialisation);
        // formData.append("duration", assessmentData.duration);
        // formData.append("application_fee", assessmentData.application_fee);
        // formData.append("fee_currency", assessmentData.fee_currency);
        // formData.append("course_link", assessmentData.course_link);
        // formData.append("AssesmentFollowup", assessmentData.AssesmentFollowup);
        // formData.append("ass_status", assessmentData.ass_status);
        // formData.append("notes", assessmentData.notes);
        try {
            const response = await fetch(
                "https://cloudconnectcampaign.com/espicrmnew/api/assesment/",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                }
            );
            if (response.status === 201) {
                props.getNewData();
                toast.success("Assessment submitted successfully!");
                props.closeModal();
            }
            else {
                toast.error("Failed to submit Assessment.");
            }
        } catch (error) {
            toast.error("Assessment not submitted !");
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
                                    className="nav nav-pills mb-2"
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
                                            Assessment Information
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
                                            University and Course Details
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
                                            Additional Information
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content mt-4" id="myTabContent">
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
                                                        <div className="row mb-2">
                                                            <label className="col-sm-4 col-form-label">
                                                                Assigned User
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    name="assigned_users"
                                                                    aria-label="Default select example"
                                                                    value={assessmentData.assigned_users}
                                                                    onChange={handleChange}
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
                                                                Enquiry
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    name="enquiry"
                                                                    aria-label="Default select example"
                                                                    value={assessmentData.enquiry}
                                                                    onChange={handleChange}
                                                                    required
                                                                >
                                                                    <option selected>
                                                                        Select Enquiry
                                                                    </option>
                                                                    {props.EnquiryData.map((Enquiry) => (
                                                                        <option key={Enquiry.id} value={Enquiry.id}>
                                                                            {
                                                                                Enquiry.Current_Enquiry
                                                                                    .student_First_Name
                                                                            }
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label className="col-sm-4 col-form-label">
                                                                Student country
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    name="student_country"
                                                                    aria-label="Default select example"
                                                                    value={assessmentData.student_country}
                                                                    onChange={handleChange}
                                                                    required
                                                                >
                                                                    <option selected>
                                                                        select Country
                                                                    </option>
                                                                    {props.InterestedCountryData.map(
                                                                        (Country) => (
                                                                            <option
                                                                                key={Country.id}
                                                                                value={Country.id}
                                                                            >
                                                                                {Country.country}
                                                                            </option>
                                                                        )
                                                                    )}
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
                                                    <div className="col-md-12">
                                                        <div className="row mb-2">
                                                            <label className="col-sm-4 col-form-label">
                                                                University
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    value={assessmentData.university}
                                                                    name="university"
                                                                    onChange={handleChange}
                                                                    required
                                                                >
                                                                    <option selected>
                                                                        Select University
                                                                    </option>
                                                                    {props.universitiesData.map((University) => (
                                                                        <option
                                                                            key={University.id}
                                                                            value={University.id}
                                                                        >
                                                                            {University.univ_name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label className="col-sm-4 col-form-label">
                                                                Level Applying For
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    name="level_applying_for"
                                                                    value={assessmentData.level_applying_for}
                                                                    onChange={handleChange}
                                                                    required
                                                                >
                                                                    <option selected>
                                                                        Select Level For Applying
                                                                    </option>
                                                                    {props.levelData.map((Level) => (
                                                                        <option key={Level.id} value={Level.id}>
                                                                            {Level.levels}
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
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    name="course_interested"
                                                                    value={assessmentData.course_interested}
                                                                    onChange={handleChange}
                                                                    required
                                                                >
                                                                    <option selected>
                                                                        Select Interested Course
                                                                    </option>
                                                                    {props.courseData.map((Course) => (
                                                                        <option key={Course.id} value={Course.id}>
                                                                            {Course.course_name}
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
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    name="intake_interested"
                                                                    value={assessmentData.intake_interested}
                                                                    onChange={handleChange}
                                                                    required
                                                                >
                                                                    <option selected>
                                                                        Select Interested Intake
                                                                    </option>
                                                                    {props.IntakeData.map((Intake) => (
                                                                        <option key={Intake.id} value={Intake.id}>
                                                                            {Intake.intake_Name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label
                                                                for="inputText"
                                                                className="col-sm-4 col-form-label"
                                                            >
                                                                Specialisation
                                                            </label>
                                                            <div className="col-md-6">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="specialisation"
                                                                    value={assessmentData.specialisation}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label
                                                                for="inputNumber"
                                                                className="col-sm-4 col-form-label"
                                                            >
                                                                Duration
                                                            </label>
                                                            <div className="col-md-6">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="duration"
                                                                    value={assessmentData.duration}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label
                                                                for="inputNumber"
                                                                className="col-sm-4 col-form-label"
                                                            >
                                                                Application Fee
                                                            </label>
                                                            <div className="col-md-6">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="application_fee"
                                                                    value={assessmentData.application_fee}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label
                                                                for="inputNumber"
                                                                className="col-sm-4 col-form-label"
                                                            >
                                                                Tution Fee
                                                            </label>
                                                            <div className="col-md-6">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="tution_fee"
                                                                    value={assessmentData.tution_fee}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label
                                                                for="inputNumber"
                                                                className="col-sm-4 col-form-label"
                                                            >
                                                                Fee Currency
                                                            </label>
                                                            <div className="col-md-6">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="fee_currency"
                                                                    value={assessmentData.fee_currency}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label
                                                                for="inputNumber"
                                                                className="col-sm-4 col-form-label"
                                                            >
                                                                Course Link
                                                            </label>
                                                            <div className="col-md-6">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="course_link"
                                                                    value={assessmentData.course_link}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
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
                                        aria-labelledby="profile-tab"
                                    >
                                        <div className="">
                                            <div className="card-body">
                                                <form className="row g-3">
                                                    <div className="col-md-12">
                                                        <div className="row mb-2">
                                                            <label className="col-sm-4 col-form-label">
                                                                Notes
                                                            </label>
                                                            <div className="col-md-6">
                                                                <textarea
                                                                    className="form-control"
                                                                    style={{ height: "100px" }}
                                                                    name="notes"
                                                                    value={assessmentData.notes}
                                                                    onChange={handleChange}
                                                                ></textarea>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-2">
                                                            <label className="col-sm-4 col-form-label">
                                                                Assessment Status
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    name="ass_status"
                                                                    value={assessmentData.ass_status}
                                                                    onChange={handleChange}
                                                                    required
                                                                >
                                                                    <option selected>
                                                                        Select Assessment Status
                                                                    </option>
                                                                    {props.status.map((status) => (
                                                                        <option key={status.id} value={status.id}>
                                                                            {status.status}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label className="col-sm-4 col-form-label">
                                                                Assessment Followup
                                                            </label>
                                                            <div className="col-md-6 d-flex">
                                                                <select
                                                                    type="number"
                                                                    name="AssesmentFollowup"
                                                                    className="form-select"
                                                                    value={assessmentData.AssesmentFollowup}
                                                                    onChange={handleChange}
                                                                    required
                                                                >
                                                                    <option selected>Select Assessment FollowUp</option>
                                                                    {props.followupData.map((Followup) => (
                                                                        <option
                                                                            key={Followup.id}
                                                                            value={Followup.id}
                                                                        >
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
                                                                        <i className="bi bi-file-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2 text-center">
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
                        <AssessmentFollowup
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

export default AddAssesment;

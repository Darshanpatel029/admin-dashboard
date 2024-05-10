import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const AddAssesment = (props) => {
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAssessmentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
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
                    body: JSON.stringify(assessmentData),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to submit form");
            }
            toast.success("Assessment submitted successfully!");
            props.closeModal();
        } catch (error) {
            toast.error("Assessment not submitted !");
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
                                                            <label className="col-sm-4 col-form-label">
                                                                Assigned users
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    name="assigned_users"
                                                                    aria-label="Default select example"
                                                                    value={assessmentData.assigned_users}
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
                                                        <div className="row mb-1">
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
                                                                        Open this select menu
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
                                                        <div className="row mb-1">
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
                                                                        Open this select country
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
                                                        <div className="row mb-1">
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
                                                                        Open this select country
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
                                                        <div className="row mb-1">
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
                                                                        Open this select Course Level
                                                                    </option>
                                                                    {props.levelData.map((Level) => (
                                                                        <option key={Level.id} value={Level.id}>
                                                                            {Level.levels}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
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
                                                                        Open this select Course Level
                                                                    </option>
                                                                    {props.courseData.map((Course) => (
                                                                        <option key={Course.id} value={Course.id}>
                                                                            {Course.course_name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
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
                                                                        Open this select Course Level
                                                                    </option>
                                                                    {props.IntakeData.map((Intake) => (
                                                                        <option key={Intake.id} value={Intake.id}>
                                                                            {Intake.intake_Name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-1 mt-2">
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
                                                        <div className="row mb-1">
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
                                                        <div className="row mb-1">
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
                                                        <div className="row mb-1">
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
                                                        <div className="row mb-1">
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
                                                        <div className="row mb-1">
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
                                        aria-labelledby="contact-tab"
                                    >
                                        <div className="">
                                            <div className="card-body">
                                                <form className="row g-3">
                                                    <div className="row mb-3">
                                                        <label
                                                            htmlFor="inputPassword"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Notes
                                                        </label>
                                                        <div className="col-md-6">
                                                            <textarea
                                                                className="form-control"
                                                                style={{ height: "100px" }}
                                                                name="notes"
                                                                value={assessmentData.notes}
                                                                onChange={handleChange}
                                                                required
                                                            ></textarea>
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
                                <button type="submit" className="btn btn-primary btn-sm">
                                    Submit Form
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddAssesment;

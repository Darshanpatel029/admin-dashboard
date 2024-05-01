import React from "react";
import { useState } from "react";

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
        fee_currency: "",
        course_link: "",
        notes: "",
    });
    return (
        <section className="section">
            <div className="row">
                <div className="col">
                    <form >
                        <div className="card">
                            <div className="card-body">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
                                                            <label className="col-sm-4 col-form-label" required>
                                                                Assigned users
                                                            </label>
                                                            <div className="col-md-6">
                                                                {/* <select className="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
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
                                                            </select> */}
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
                                                            <label className="col-sm-4 col-form-label" required>
                                                                Enquiry
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                >
                                                                    <option selected>Open this select menu</option>
                                                                    {props.EnquiryData.map((Enquiry) => (
                                                                        <option key={Enquiry.id} value={Enquiry.id}>
                                                                            {Enquiry.student_First_Name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
                                                            <label className="col-sm-4 col-form-label" required>
                                                                Student country
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                // value={assessmentData.student_country}
                                                                >
                                                                    <option selected>
                                                                        Open this select country
                                                                    </option>
                                                                    {props.InterestedCountryData.map((Country) => (
                                                                        <option key={Country.id} value={Country.id}>
                                                                            {Country.country}
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
                                                    <div className="col-md-12">
                                                        <div className="row mb-1">
                                                            <label className="col-sm-4 col-form-label" required>
                                                                University
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                // value={assessmentData.student_country}
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
                                                            <label className="col-sm-4 col-form-label" required>
                                                                Level Applying For
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                // value={assessmentData.student_country}
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
                                                                // value={assessmentData.student_country}
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
                                                            <label className="col-sm-4 col-form-label" required>
                                                                Intake Interested
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                // value={assessmentData.intake_interested}
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
                                                                // value={assessmentData.specialisation}
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
                                                                // value={assessmentData.duration}
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
                                                                // value={assessmentData.application_fee}
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
                                                                // value={assessmentData.tution_fee}
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
                                                                // value={assessmentData.fee_currency}
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
                                                                // value={assessmentData.course_link}
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
                                                            // value={assessmentData.notes}
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

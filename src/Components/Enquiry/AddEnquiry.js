import React from "react";
import { useState } from "react";

const AddEnquiry = (props) => {
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

        country: "",
        university_interested: "",
        level_applying_for: "",
        course_interested: "",
        intake_interested: "",
        Interested_Services: "",
        assigned_users: "",
        enquiry_status: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiURL =
            "https://cloudconnectcampaign.com/espicrmnew/api/enquiry_create/";
        const requestOptions = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };

        try {
            const response = await fetch(apiURL, requestOptions);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(
                    `API call failed with status: ${response.status
                    }, body: ${JSON.stringify(data)}`
                );
            }
            console.log("Submission successful", data);
            alert("Enquiry submitted successfully!");
        } catch (error) {
            console.error("Error during submission:", error);
            alert("Failed to submit enquiry. See console for details.");
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
                                                    <div className="row mb-4">
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
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
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
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
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
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
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
                                                                className="form-select"
                                                                value={formData.Source_Enquiry}
                                                                onChange={handleChange}
                                                            >
                                                                <option selected>Select Source</option>
                                                                {props.sourceEnquiry.map((option) => (
                                                                    <option key={option.id} value={option.Source}>
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
                                                    <div className="row mb-4">
                                                        <label className="col-sm-4 col-form-label">
                                                            Student Phone
                                                        </label>
                                                        <div className="col-md-6" required>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="student_phone"
                                                                value={formData.student_phone}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <label className="col-sm-4 col-form-label">
                                                            Alternate Phone
                                                        </label>
                                                        <div className="col-md-6" required>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="alternate_phone"
                                                                value={formData.alternate_phone}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <label className="col-sm-4 col-form-label">
                                                            Student Email
                                                        </label>
                                                        <div className="col-md-6" required>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="student_email"
                                                                value={formData.student_email}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-4">
                                                        <label class="col-sm-4 col-form-label">
                                                            Student Address
                                                        </label>
                                                        <div class="col-md-6">
                                                            <textarea
                                                                class="form-control"
                                                                style={{ height: "100px" }}
                                                                name="student_address"
                                                                value={formData.student_address}
                                                                onChange={handleChange}
                                                                required
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label">
                                                            Student Country
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="student_country"
                                                                value={formData.student_country}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label">
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
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label">
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
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label">
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
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label">
                                                            Current Education
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                type="number"
                                                                className="form-control"
                                                                name="current_education"
                                                                value={formData.current_education}
                                                                onChange={handleChange}
                                                                required
                                                            >
                                                                <option selected>Select Source</option>
                                                                {props.EducationData.map((EducationOption) => (
                                                                    <option
                                                                        key={EducationOption.id}
                                                                        value={EducationOption.current_education}
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
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label">
                                                            Country Interested
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                type="number"
                                                                className="form-control"
                                                                name="country"
                                                                value={formData.country}
                                                                onChange={handleChange}
                                                            >
                                                                <option selected>
                                                                    Select Intrested Country
                                                                </option>
                                                                {props.CountryData.map((countryIntrested) => (
                                                                    <option
                                                                        key={countryIntrested.id}
                                                                        value={countryIntrested.id}
                                                                    >
                                                                        {countryIntrested.country}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label">
                                                            University Interested
                                                        </label>
                                                        <div class="col-md-6">
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
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label">
                                                            Level Applying For
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                type="number"
                                                                className="form-control"
                                                                name="level_applying_for"
                                                                value={formData.level_applying_for}
                                                                onChange={handleChange}
                                                                required
                                                            >
                                                                <option selected>
                                                                    Select Level For applying
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
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label">
                                                            Course Interested
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                type="number"
                                                                className="form-control"
                                                                name="course_interested"
                                                                value={formData.course_interested}
                                                                onChange={handleChange}
                                                                required
                                                            >
                                                                <option selected>Select Course</option>
                                                                {props.courseData.map((course) => (
                                                                    <option key={course.id} value={course.id}>
                                                                        {course.course_name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label">
                                                            Intake Interested
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                type="number"
                                                                className="form-control"
                                                                name="intake_interested"
                                                                value={formData.intake_interested}
                                                                onChange={handleChange}
                                                                required
                                                            >
                                                                <option selected>Select Intake</option>
                                                                {props.IntakeData.map((intake) => (
                                                                    <option key={intake.id} value={intake.id}>
                                                                        {intake.intake_Name}
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
                                                                type="number"
                                                                className="form-control"
                                                                name="Interested_Services"
                                                                value={formData.Interested_Services}
                                                                onChange={handleChange}
                                                                required
                                                            >
                                                                <option selected>Select Services</option>
                                                                {props.servicesData.map((services) => (
                                                                    <option
                                                                        key={services.id}
                                                                        value={services.Services}
                                                                    >
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
                                                    <div className="row mb-4">
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
                                                            >
                                                                <option selected>Select Source</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
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
                                                            >
                                                                <option selected>Select Services</option>
                                                                {props.StatusData.map((status) => (
                                                                    <option key={status.id} value={status.id}>
                                                                        {status.status}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-4">
                                                        <label class="col-sm-4 col-form-label">notes</label>
                                                        <div class="col-md-6">
                                                            <textarea
                                                                class="form-control"
                                                                style={{ height: "100px" }}
                                                                name="notes"
                                                                value={formData.notes}
                                                                onChange={handleChange}
                                                                required
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
                        <div class="row mb-3 text-center">
                            <div class="col-sm-10 ">
                                <button type="submit" class="btn btn-primary btn-sm">
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

export default AddEnquiry;

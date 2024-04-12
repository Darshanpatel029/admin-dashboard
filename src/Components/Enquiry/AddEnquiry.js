import React from "react";
import { useState } from "react";

const AddEnquiry = () => {
    const [formData, setFormData] = useState(
        {
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
                                        <div className="">
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
                                                            Source Inquiry
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                name="Source_Enquiry"
                                                                className="form-select"
                                                                id="Source_Enquiry"
                                                                value={formData.Source_Enquiry}
                                                                onChange={handleChange}
                                                            >
                                                                <option value="">Select Source</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
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
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Student Phone
                                                        </label>
                                                        <div className="col-md-6" required>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="alternate_phone"
                                                                id="inputText"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Alternate Phone
                                                        </label>
                                                        <div className="col-md-6" required>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="alternate_phone"
                                                                id="inputText"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Student Email
                                                        </label>
                                                        <div className="col-md-6" required>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="student_email"
                                                                id="inputText"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-4">
                                                        <label
                                                            for="inputPassword"
                                                            class="col-sm-4 col-form-label"
                                                        >
                                                            Student Address
                                                        </label>
                                                        <div class="col-md-6">
                                                            <textarea
                                                                class="form-control"
                                                                style={{ height: "100px" }}
                                                                name="student_address"
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label">
                                                            Student Country
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                class="form-select"
                                                                aria-label="Default select example"
                                                                required
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" required>
                                                            Student State
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                class="form-select"
                                                                aria-label="Default select example"
                                                                name="student_state"
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" required>
                                                            Student City
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                class="form-select"
                                                                aria-label="Default select example"
                                                                name="student_city"
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" required>
                                                            Student Zip
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                class="form-select"
                                                                aria-label="Default select example"
                                                                name="student_zip"
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
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
                                                        <label class="col-sm-4 col-form-label" required>
                                                            Current Education
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                class="form-select"
                                                                aria-label="Default select example"
                                                                name="current_education"
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
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
                                                        <label class="col-sm-4 col-form-label" >
                                                            Country Interested
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                class="form-select"
                                                                aria-label="Default select example"
                                                                name="country"
                                                                required
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" >
                                                            University Interested
                                                        </label>
                                                        <div class="col-md-6" required>
                                                            <select
                                                                class="form-select"
                                                                aria-label="Default select example"
                                                                name="university_interested"
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" >
                                                            Level Applying For
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                class="form-select"
                                                                aria-label="Default select example"
                                                                name="level_applying_for"
                                                                required
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" >
                                                            Course Interested{" "}
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                class="form-select"
                                                                aria-label="Default select example"
                                                                name="course_interested"
                                                                required
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" >
                                                            Intake Interested
                                                        </label>
                                                        <div class="col-md-6">
                                                            <select
                                                                class="form-select"
                                                                aria-label="Default select example"
                                                                name="intake_interested"
                                                                required
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Interested Services
                                                        </label>
                                                        <div className="col-md-6" required>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="inputText"
                                                                name="interestedServicess"
                                                            />
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
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Assigned Users
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="inputText"
                                                                name="assigned_users"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Enquiry Status
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="inputText"
                                                                name="enquiry_status"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-4">
                                                        <label
                                                            for="inputPassword"
                                                            class="col-sm-4 col-form-label"
                                                        >
                                                            Student Address
                                                        </label>
                                                        <div class="col-md-6">
                                                            <textarea
                                                                class="form-control"
                                                                style={{ height: "100px" }}
                                                                name="student_address"
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

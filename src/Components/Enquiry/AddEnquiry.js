import React from "react";
import { useState } from "react";

const AddEnquiry = () => {
    const [formData, setFormData] = useState({
        studentFirstName: "",
        studentLastName: "",
        studentPassport: "",
        sourceEnquiry: "",
        studentPhone: "",
        alternatePhone: "",
        studentEmail: "",
        studentAddress: "",
        studentCountry: "",
        studentState: "",
        studentCity: "",
        studentZip: "",
        currentEducation: "",
        countryInterested: "",
        universityInterested: "",
        levelApplyingFor: "",
        courseInterested: "",
        intakeInterested: "",
        interestedServices: "",
        assignedUsers: "",
        enquiryStatus: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://cloudconnectcampaign.com/espicrmnew/api/enquiries/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error submitting form data");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Form data submitted successfully", data);
                setFormData({
                    studentFirstName: "",
                    studentLastName: "",
                    studentPassport: "",
                    sourceEnquiry: "",
                    studentPhone: "",
                    alternatePhone: "",
                    studentEmail: "",
                    studentAddress: "",
                    studentCountry: "",
                    studentState: "",
                    studentCity: "",
                    studentZip: "",
                    currentEducation: "",
                    countryInterested: "",
                    universityInterested: "",
                    levelApplyingFor: "",
                    courseInterested: "",
                    intakeInterested: "",
                    interestedServices: "",
                    assignedUsers: "",
                    enquiryStatus: "",
                });
            })
            .catch((error) => {
                console.error("Error submitting form data", error);
            });
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
                                                <div className="row g-3" >
                                                    <div className="row mb-4">
                                                        <label for="inputEmail3" className="col-sm-4 col-form-label">Student First Name</label>
                                                        <div className="col-md-6" required>
                                                            <input type="text" className="form-control" id="inputText" onChange={handleChange} required />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <label for="inputEmail3" className="col-sm-4 col-form-label">Student Last Name</label>
                                                        <div className="col-md-6" required>
                                                            <input type="text" className="form-control" id="inputText" onChange={handleChange} required />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <label for="inputEmail3" className="col-sm-4 col-form-label">Student Passport</label>
                                                        <div className="col-md-6" required>
                                                            <input type="text" className="form-control" id="inputText" onChange={handleChange} required />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label">Source Inquiry</label>
                                                        <div class="col-md-6">
                                                            <select class="form-select"
                                                                aria-label="Default select example">
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
                                        id="pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab"
                                    >
                                        <div className="">
                                            <div className="card-body">
                                                <div className="row g-3">
                                                    <div className="row mb-4">
                                                        <label for="inputEmail3" className="col-sm-4 col-form-label">Student Phone</label>
                                                        <div className="col-md-6" required>
                                                            <input type="number" className="form-control" id="inputText" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <label for="inputEmail3" className="col-sm-4 col-form-label">Alternate Phone</label>
                                                        <div className="col-md-6" required>
                                                            <input type="number" className="form-control" id="inputText" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <label for="inputEmail3" className="col-sm-4 col-form-label">Student Email</label>
                                                        <div className="col-md-6" required>
                                                            <input type="email" className="form-control" id="inputText" />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-4">
                                                        <label for="inputPassword"
                                                            class="col-sm-4 col-form-label">Student Address</label>
                                                        <div class="col-md-6">
                                                            <textarea class="form-control"
                                                                style={{ height: "100px" }} required></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" >Student Country</label>
                                                        <div class="col-md-6">
                                                            <select class="form-select"
                                                                aria-label="Default select example" required>
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" required>Student State</label>
                                                        <div class="col-md-6">
                                                            <select class="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" required>Student City</label>
                                                        <div class="col-md-6">
                                                            <select class="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" required>Student Zip</label>
                                                        <div class="col-md-6">
                                                            <select class="form-select"
                                                                aria-label="Default select example">
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
                                                        <label class="col-sm-4 col-form-label" required>Current Education</label>
                                                        <div class="col-md-6">
                                                            <select class="form-select"
                                                                aria-label="Default select example">
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
                                                        <label class="col-sm-4 col-form-label" required>Country Interested</label>
                                                        <div class="col-md-6">
                                                            <select class="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" required>University Interested</label>
                                                        <div class="col-md-6">
                                                            <select class="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" required>Level Applying For</label>
                                                        <div class="col-md-6">
                                                            <select class="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" required>Course Interested </label>
                                                        <div class="col-md-6">
                                                            <select class="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label class="col-sm-4 col-form-label" required>Intake Interested </label>
                                                        <div class="col-md-6">
                                                            <select class="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <label for="inputEmail3" className="col-sm-4 col-form-label">Interested Services
                                                        </label>
                                                        <div className="col-md-6" required>
                                                            <input type="text" className="form-control" id="inputText" />
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
                                                        <label for="inputEmail3" className="col-sm-4 col-form-label">Assigned Users</label>
                                                        <div className="col-md-6" required>
                                                            <input type="text" className="form-control" id="inputText" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <label for="inputEmail3" className="col-sm-4 col-form-label">Enquiry Status</label>
                                                        <div className="col-md-6" required>
                                                            <input type="text" className="form-control" id="inputText" />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-4">
                                                        <label for="inputPassword"
                                                            class="col-sm-4 col-form-label">Student Address</label>
                                                        <div class="col-md-6">
                                                            <textarea class="form-control"
                                                                style={{ height: "100px" }} required></textarea>
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
                                <button type="submit" class="btn btn-primary btn-sm">Submit
                                    Form</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddEnquiry;

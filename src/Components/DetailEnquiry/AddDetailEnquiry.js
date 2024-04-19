import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const AddDetailEnquiry = () => {
    const [detailEnquiry, setDetailEnquiry] = useState({
        Current_Enquiry: "",
        current_education: "",
        Tenth_Education_Details: "",
        Twelveth_Education_Details: "",
        Graduation_Education_Details: "",
        Work_Experience: "",

        Toefl_Exam: "",
        ielts_Exam: "",
        PTE_Exam: "",
        Duolingo_Exam: "",
        Gre_Exam: "",
        Gmat_Exam: "",

        Twelveth_Document: "",
        Tenth_Document: "",
        Graduation_Marksheet: "",
        Graduation_Certificate: "",
        UG_Marksheet: "",
        UG_Certificate: "",

        Ielts_Result: "",
        Toefl_Result: "",
        PTE_Result: "",
        Duolingo_Result: 1,
        Gre_Result: "",
        Gmat_Result: "",

        Work_Experience_Document: "",
        Passport_Document: "",

        Offer_Letter: "",

        Refusal: "",

        Confirmed_Services: [],

        Enquiry_Status: "",

        followup: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;

        if (name === "Interested_Services") {
            console.log(value);
            newValue = value.map((val) => ({
                id: val.id,
                Services: val.Services,
                Price: val.Price,
            }));
        }

        setDetailEnquiry((prevState) => ({
            ...prevState,
            [name]: newValue,
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
            body: JSON.stringify(detailEnquiry),
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
            toast.success("Enquiry submitted successfully!");
        } catch (error) {
            toast.error("Failed to submit enquiry. See console for details.");
        }
    };

    return (
        <section className="section">
            <div className="row">
                <div className="col">
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
                                        Basic Information
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
                                        Examination Details
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
                                        Family Details
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
                                        Education Documents
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
                                        Exam Documents
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-Other-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-Other"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-Other"
                                        aria-selected="false"
                                    >
                                        Other Documents
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-Offer-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-Offer"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-Offer"
                                        aria-selected="false"
                                    >
                                        Offer Letter
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-Refusal-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-Refusal"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-Refusal"
                                        aria-selected="false"
                                    >
                                        Refusal Letter
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-Confirmed-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-Confirmed"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-Confirmed"
                                        aria-selected="false"
                                    >
                                        Confirmed Services
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-Enquiry-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-EnquiryOne"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-Enquiry"
                                        aria-selected="false"
                                    >
                                        Enquiry Status
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
                                                            Current Enquiry
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={handleChange}
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-4 col-form-label">
                                                            Current Education Details
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={handleChange}

                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-4 col-form-label" required>
                                                            Tenth Education Details
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={handleChange}
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-4 col-form-label">
                                                            Twelveth Education Details
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={handleChange}
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-1">
                                                        <label className="col-sm-4 col-form-label">
                                                            Graduation Education Details
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={handleChange}
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-4 col-form-label">
                                                            Work Experience
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={handleChange}

                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
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
                                                            Toefl Exam
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={handleChange}
                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-4 col-form-label">
                                                            Ielts Exam
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={handleChange}

                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-4 col-form-label">
                                                            PTE Exam
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={handleChange}

                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-4 col-form-label">
                                                            Duolingo Exam
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={handleChange}

                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-1">
                                                        <label className="col-sm-4 col-form-label">
                                                            Gre Exam
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={handleChange}

                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-4 col-form-label">
                                                            Gmat Exam
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={handleChange}

                                                            >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
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
                                    id="pills-contact"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                >
                                    <div className="">
                                        <div className="card-body">
                                            <form className="row g-3">
                                                <div className="row mb-1 mt-2">
                                                    <label
                                                        for="inputText"
                                                        className="col-sm-4 col-form-label"
                                                    >
                                                        Father Occupation
                                                    </label>
                                                    <div className="col-md-6">
                                                        <input type="text" className="form-control"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row mb-1">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        Father Annual Income
                                                    </label>
                                                    <div class="col-md-6">
                                                        <input type="number" class="form-control"
                                                            onChange={handleChange}
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
                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        Twelveth Document
                                                    </label>
                                                    <div class="col-md-5">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        Tenth Document
                                                    </label>
                                                    <div class="col-md-5">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>

                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        Graduation Marksheet
                                                    </label>
                                                    <div class="col-md-5">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>

                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        Graduation Certificate
                                                    </label>
                                                    <div class="col-md-5">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        UG Marksheet
                                                    </label>
                                                    <div class="col-md-5">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        UG Certificate
                                                    </label>
                                                    <div class="col-md-5">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </form>
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
                                            <form className="row g-3">
                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        Ielts Result
                                                    </label>
                                                    <div class="col-md-6">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                        onChange={handleChange}

                                                    >
                                                        Toefl Result
                                                    </label>
                                                    <div class="col-md-6">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>

                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        PTE Result
                                                    </label>
                                                    <div class="col-md-6">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>

                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        Duolingo Result
                                                    </label>
                                                    <div class="col-md-6">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        Gre Result
                                                    </label>
                                                    <div class="col-md-6">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        Gmat Result
                                                    </label>
                                                    <div class="col-md-6">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-Other"
                                    role="tabpanel"
                                    aria-labelledby="Other-tab"
                                >
                                    <div className="">
                                        <div className="card-body">
                                            <form className="row g-3">
                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        Work Experience Document
                                                    </label>
                                                    <div class="col-md-6">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        Passport Document
                                                    </label>
                                                    <div class="col-md-6">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-Offer"
                                    role="tabpanel"
                                    aria-labelledby="Offer-tab"
                                >
                                    <div className="">
                                        <div className="card-body">
                                            <form className="row g-3">
                                                <div class="row mb-3 mt-3">
                                                    <label
                                                        for="inputNumber"
                                                        class="col-sm-4 col-form-label"
                                                    >
                                                        Offer Letter
                                                    </label>
                                                    <div class="col-md-6">
                                                        <input
                                                            class="form-control"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-Refusal"
                                    role="tabpanel"
                                    aria-labelledby="Refusal-tab"
                                >
                                    <div className="">
                                        <div className="card-body">
                                            <form className="row g-3">
                                                <div className="row mb-1 mt-3">
                                                    <label className="col-sm-4 col-form-label">
                                                        Refusal
                                                    </label>
                                                    <div className="col-md-6">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            onChange={handleChange}

                                                        >
                                                            <option selected>Open this select menu</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-Confirmed"
                                    role="tabpanel"
                                    aria-labelledby="Confirmed-tab"
                                >
                                    <div className="">
                                        <div className="card-body">
                                            <form className="row g-3">
                                                <div className="row mb-1 mt-3">
                                                    <label className="col-sm-4 col-form-label">
                                                        Confirmed Services
                                                    </label>
                                                    <div className="col-md-6">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            onChange={handleChange}

                                                        >
                                                            <option selected>Open this select menu</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-EnquiryOne"
                                    role="tabpanel"
                                    aria-labelledby="EnquiryOne-tab"
                                >
                                    <div className="">
                                        <div className="card-body">
                                            <form className="row g-3">
                                                <div className="row mb-1 mt-3">
                                                    <label className="col-sm-4 col-form-label">
                                                        Enquiry Status
                                                    </label>
                                                    <div className="col-md-6">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            onChange={handleChange}

                                                        >
                                                            <option selected>Open this select menu</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddDetailEnquiry;

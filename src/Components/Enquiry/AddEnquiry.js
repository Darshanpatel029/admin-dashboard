import React from "react";

const AddEnquiry = () => {
    return (
        <section className="section">
            <div className="row">
                <div className="col">
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
                                            <form className="row g-3">
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Student First Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Student Last Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Student passport"
                                                        required
                                                    />
                                                </div>

                                                <div className="col-md-4">
                                                    <select id="inputState" className="form-select">
                                                        <option disabled>Source Enquiry</option>
                                                        <option>None</option>
                                                    </select>
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
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        placeholder="Student Phone"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        placeholder="Alternate Phone"
                                                        required
                                                    />
                                                </div>

                                                <div className="col-12">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Student Email"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <textarea
                                                        rows="4"
                                                        cols="4"
                                                        className="form-control"
                                                        placeholder="Student Address"
                                                        required
                                                    ></textarea>
                                                </div>

                                                <div className="col-md-4">
                                                    <select id="inputState" className="form-select">
                                                        <option disabled>Student country</option>
                                                        <option>india</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Student State"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Student City"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-2">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Student Zip"
                                                    />
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
                                                <div className="col-md-4">
                                                    <select id="inputState" className="form-select">
                                                        <option>Current education</option>
                                                        <option>BE</option>
                                                    </select>
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
                                                <div className="col-md-6">
                                                    <select id="inputState" className="form-select">
                                                        <option>Country interested</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <select id="inputState" className="form-select">
                                                        <option>University interested</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-6">
                                                    <select id="inputState" className="form-select">
                                                        <option>Level applying for</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-6">
                                                    <select id="inputState" className="form-select">
                                                        <option>Course interested</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-6">
                                                    <select id="inputState" className="form-select">
                                                        <option>Intake interested</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <select id="inputState" className="form-select">
                                                        <option>Interested Services</option>
                                                        <option>...</option>
                                                    </select>
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
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Assigned users"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        placeholder="Enquiry status"
                                                        required
                                                    />
                                                </div>

                                                <div className="col-md-12">
                                                    <textarea
                                                        rows="4"
                                                        cols="4"
                                                        className="form-control"
                                                        placeholder="Notes"
                                                        required
                                                    ></textarea>
                                                </div>

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">
                                                        Create Enquiry{" "}
                                                    </button>
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

export default AddEnquiry;

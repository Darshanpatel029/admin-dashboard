import React from 'react'

const AddAssesment = () => {
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
                                                        <label className="col-sm-2 col-form-label" required>Assigned users
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <select className="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-2 col-form-label" required>Enquiry
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <select className="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-2 col-form-label" required>Student country
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <select className="form-select"
                                                                aria-label="Default select example">
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
                                                        <label className="col-sm-2 col-form-label" required >University
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <select className="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-2 col-form-label" required>Level Applying For
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <select className="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-2 col-form-label" >Course Interested
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <select className="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label className="col-sm-2 col-form-label" required>Intake Interested
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <select className="form-select"
                                                                aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-1 mt-2">
                                                        <label for="inputText"
                                                            className="col-sm-2 col-form-label">Specialisation
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-1">
                                                        <label for="inputNumber"
                                                            class="col-sm-2 col-form-label">Duration
                                                        </label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-1">
                                                        <label for="inputNumber"
                                                            class="col-sm-2 col-form-label">Application Fee
                                                        </label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-1">
                                                        <label for="inputNumber"
                                                            class="col-sm-2 col-form-label">Tution Fee
                                                        </label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-1">
                                                        <label for="inputNumber"
                                                            class="col-sm-2 col-form-label">Fee Currency
                                                        </label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-1">
                                                        <label for="inputNumber"
                                                            class="col-sm-2 col-form-label">Course Link
                                                        </label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" />
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
                                                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Notes</label>
                                                    <div className="col-sm-10">
                                                        <textarea className="form-control" style={{ height: "100px" }}></textarea>
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
    )
}

export default AddAssesment;
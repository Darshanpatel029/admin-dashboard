import React from "react";

const AddApplication = () => {
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
                    Application Details
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
                    Academic Documents
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
                    Test Scores & Other Documents
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
                    Personal Documents
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
                            <label className="col-sm-2 col-form-label" required>
                              Application
                            </label>
                            <div className="col-sm-10">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                          <div className="row mb-1">
                            <label className="col-sm-2 col-form-label" required>
                              Application Status
                            </label>
                            <div className="col-sm-10">
                              <select
                                className="form-select"
                                aria-label="Default select example"
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
                        <div class="row mb-3 mt-3">
                          <label
                            for="inputNumber"
                            class="col-sm-2 col-form-label"
                          >
                            Diploma Marksheet
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>
                        <div class="row mb-3 mt-3">
                          <label
                            for="inputNumber"
                            class="col-sm-2 col-form-label"
                          >
                            Bachelor Marksheet
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>

                        <div class="row mb-3 mt-3">
                          <label
                            for="inputNumber"
                            class="col-sm-2 col-form-label"
                          >
                            Master Marksheet
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
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
                        <div class="row mb-3 mt-3">
                          <label
                            for="inputNumber"
                            class="col-sm-2 col-form-label"
                          >
                           Ielts
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>
                        <div class="row mb-3 mt-3">
                          <label
                            for="inputNumber"
                            class="col-sm-2 col-form-label"
                          >
                            Gre
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>

                        <div class="row mb-3 mt-3">
                          <label
                            for="inputNumber"
                            class="col-sm-2 col-form-label"
                          >
                            Toefl
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>

                        <div class="row mb-3 mt-3">
                          <label
                            for="inputNumber"
                            class="col-sm-2 col-form-label"
                          >
                            Gmat
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>
                        <div class="row mb-3 mt-3">
                          <label
                            for="inputNumber"
                            class="col-sm-2 col-form-label"
                          >
                           Pte
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>
                        <div class="row mb-3 mt-3">
                          <label
                            for="inputNumber"
                            class="col-sm-2 col-form-label"
                          >
                            Work Experience
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                          
                        </div>
                        <div class="row mb-3 mt-3">
                          <label
                            for="inputNumber"
                            class="col-sm-2 col-form-label"
                          >
                            Other Documents
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
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
                            class="col-sm-2 col-form-label"
                          >
                            Sop
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>
                        <div class="row mb-3 mt-3">
                          <label
                            for="inputNumber"
                            class="col-sm-2 col-form-label"
                          >
                            Cv
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>

                        <div class="row mb-3 mt-3">
                          <label
                            for="inputNumber"
                            class="col-sm-2 col-form-label"
                          >
                            Passport
                          </label>
                          <div class="col-sm-10">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
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

export default AddApplication;

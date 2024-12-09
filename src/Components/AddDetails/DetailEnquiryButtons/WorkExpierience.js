import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../UI/Loading/Loading";

const initialSubmit = {
  isError: false,
  errMsg: null,
  isSubmitting: false,
};

const WorkExpierience = (props) => {
  const [SourceData, setSourceData] = useState({
    Company_Name: "",
    Designation: "",
    Start_Date: "",
    End_Date: "",
  });

  const [formStatus, setFormStatus] = useState(initialSubmit);
  const validateForm = () => {
    if (!SourceData.Company_Name) {
      setFormError("Company Name is Required");
      return false;
    } else if (!SourceData.Designation) {
      setFormError("Designation is Required");
      return false;
    } else if (!SourceData.Start_Date) {
      setFormError("Start Date is Required");
      return false;
    } else if (!SourceData.End_Date) {
      setFormError("End Date is Required");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSourceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus({
      isError: false,
      errMsg: null,
      isSubmitting: true,
    });
    try {
      const apiURL = "https://espicrm.co/latest/api/work-experiences/";
      const token = localStorage.getItem("token");
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(SourceData),
      };
      const response = await fetch(apiURL, requestOptions);
      if (response.status === 201) {
        props.getNewData();
        toast.success("Enquiry submitted successfully!");
        props.closeModal();
      } else {
        toast.error("Failed to submit enquiry.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col">
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-body">
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
                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Company Name
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="Company_Name"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Company_Name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Designation
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="Designation"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Designation}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Start Date
                        </label>
                        <div className="col-md-6">
                          <input
                            type="date"
                            name="Start_Date"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Start_Date}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          End Date
                        </label>
                        <div className="col-md-6">
                          <input
                            type="date"
                            name="End_Date"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.End_Date}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-center">
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
  );
};

export default WorkExpierience;

import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../UI/Loading/Loading";

const initialSubmit = {
  isError: false,
  errMsg: null,
  isSubmitting: false,
};

const EduLevel = (props) => {
  const [SourceData, setSourceData] = useState({
    level: "",
    Stream: "",
    Percentage: "",
    Year_of_Passing: "",
    Name_of_Institute: "",
    Medium_of_Education: "",
    Board: "",
  });

  const [formStatus, setFormStatus] = useState(initialSubmit);

  const validateForm = () => {
    if (!SourceData.level) {
      setFormError("Education Level is Required");
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
      const apiURL = "https://espicrm.co/latest/api/edu-levels/";
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
                          Level
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="level"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.level}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Stream
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="Stream"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Stream}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Percentage
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="Percentage"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Percentage}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Year Of Passing
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="Year_of_Passing"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Year_of_Passing}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Name of Institute
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="Name_of_Institute"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Name_of_Institute}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Medium of Education
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="Medium_of_Education"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Medium_of_Education}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Board
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="Board"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Board}
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

export default EduLevel;

import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../UI/Loading/Loading";

const initialSubmit = {
  isError: false,
  errMsg: null,
  isSubmitting: false,
};

const Toefl = (props) => {
  const [SourceData, setSourceData] = useState({
    Listening: "",
    Reading: "",
    Writing: "",
    Speaking: "",
    Overall: "",
  });

  const [formStatus, setFormStatus] = useState(initialSubmit);
  const validateForm = () => {
    if (!SourceData.Listening) {
      setFormError("Listening is Required");
      return false;
    } else if (!SourceData.Reading) {
      setFormError("Reading is Required");
      return false;
    } else if (!SourceData.Writing) {
      setFormError("Writing is Required");
      return false;
    } else if (!SourceData.Speaking) {
      setFormError("Speaking is Required");
      return false;
    } else if (!SourceData.Overall) {
      setFormError("Overall is Required");
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
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;
    setSourceData((prevState) => ({
      ...prevState,
      [name]: newValue,
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
      const apiURL = "https://espicrm.co/latest/api/toefl_exams/";
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
                          Listening
                        </label>
                        <div className="col-md-6">
                          <input
                            type="number"
                            name="Listening"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Listening}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Reading
                        </label>
                        <div className="col-md-6">
                          <input
                            type="number"
                            name="Reading"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Reading}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Writing
                        </label>
                        <div className="col-md-6">
                          <input
                            type="number"
                            name="Writing"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Writing}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Speaking
                        </label>
                        <div className="col-md-6">
                          <input
                            type="number"
                            name="Speaking"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Speaking}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-2">
                        <label
                          htmlFor="student_First_Name"
                          className="col-sm-4 col-form-label"
                        >
                          Overall
                        </label>
                        <div className="col-md-6">
                          <input
                            type="number"
                            name="Overall"
                            className="form-control"
                            id="student_First_Name"
                            value={SourceData.Overall}
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

export default Toefl;

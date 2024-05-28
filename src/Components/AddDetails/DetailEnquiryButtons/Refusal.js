import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../UI/Loading/Loading";
// let Country = require('country-state-city').Country;

const initialSubmit = {
    isError: false,
    errMsg: null,
    isSubmitting: false,
};

const Refusal = (props) => {
    // const [selectedCountry, setSelectedCountry] = useState(null);
    const [SourceData, setSourceData] = useState({
        Refusal_Reason: "",
        Refusal_Country: "",
        Refusal_Visa_Category: "",
        Refusal_Date: "",
        Refusal_Letter: "",
    });

    const token = localStorage.getItem("token");
    const [formStatus, setFormStatus] = useState(initialSubmit);
    const validateForm = () => {
        if (!SourceData.Refusal_Reason) {
            setFormError("Verbal is Required");
            return false;
        }
        else if (!SourceData.Refusal_Visa_Category) {
            setFormError("Analytical is Required");
            return false;
        }

        else if (!SourceData.Refusal_Letter) {
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

    // const handleCountryChange = (selectedOption) => {
    //     setSelectedCountry(selectedOption); // Update selected country state
    //     setSourceData(prevState => ({
    //         ...prevState,
    //         Refusal_Country: selectedOption ? selectedOption.name : "" // Update Refusal_Country in sourceData
    //     }));
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setFormStatus({
            isError: false,
            errMsg: null,
            isSubmitting: true,
        });
        const formData = new FormData();
        formData.append("Refusal_Reason", SourceData.Refusal_Reason);
        formData.append("Refusal_Country", SourceData.Refusal_Country);
        formData.append("Refusal_Visa_Category", SourceData.Refusal_Visa_Category);
        formData.append("Refusal_Date", SourceData.Refusal_Date);
        formData.append("Refusal_Letter", SourceData.Refusal_Letter);


        Object.keys(SourceData).forEach((key) => {
            if (
                key !== "Refusal_Letter"
            ) {
                formData.append(key, SourceData[key]);
            }
        });

        try {
            const response = await fetch(
                "https://cloudconnectcampaign.com/espicrmlatest/api/rejection_reasons/",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json",
                    },
                    method: "POST",
                    body: formData,
                }
            );
            if (response.status === 201) {
                props.getNewData();
                toast.success("Enquiry submitted successfully!");
                props.closeModal();
            }
            else {
                toast.error("Failed to submit SourceData.");
            }
        } catch (errMsg) {
            toast.error("Failed to submit enquiry.");
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
                                                    Refusal Reason
                                                </label>
                                                <div className="col-md-6">
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: "100px" }}
                                                        name="Refusal_Reason"
                                                        value={SourceData.Refusal_Reason}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="student_First_Name"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Refusal Country
                                                </label>
                                                <div className="col-md-6">
                                                    {/* <input
                                                        type="text"
                                                        name="Refusal_Country"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={SourceData.Refusal_Country}
                                                        onChange={handleChange}
                                                    /> */}
                                                    {/* <Select
                                                        name="Refusal_Country"
                                                        options={Country.getAllCountries()}
                                                        getOptionLabel={(options) => options["isoCode"]}
                                                        getOptionValue={(options) => options["isoCode"]}
                                                        value={selectedCountry}
                                                        onChange={handleCountryChange} /> */}
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="student_First_Name"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Refusal Visa Category
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        name="Refusal_Visa_Category"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={SourceData.Refusal_Visa_Category}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="student_First_Name"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Refusal Date
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        type="date"
                                                        name="Refusal_Date"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={SourceData.Refusal_Date}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="student_First_Name"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Refusal Letter
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        id="formFile"
                                                        name="Refusal_Letter"
                                                        onChange={handleChange}
                                                        required
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

export default Refusal;

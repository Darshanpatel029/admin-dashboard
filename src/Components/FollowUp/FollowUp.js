import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../UI/Loading/Loading";

const initialSubmit = {
    isError: false,
    errMsg: null,
    isSubmitting: false,
};

const FollowUp = (props) => {
    const [formData, setFormData] = useState({
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

        country_interested: "",
        university_interested: "",
        level_applying_for: "",
        course_interested: "",
        intake_interested: "",
        Interested_Services: [],
        assigned_users: "",
        created_by: 1,
        enquiry_status: "",
        EnquiryFollowup: "",
        notes: "",
    });

    const [formStatus, setFormStatus] = useState(initialSubmit);

    const validateForm = () => {
        if (!formData.student_First_Name) {
            setFormError("Student Name is Required");
            return false;
        } else if (!formData.student_Last_Name) {
            setFormError("Student Last Name is Required");
            return false;
        } else if (!formData.student_passport) {
            setFormError("Student Passport is Required");
            return false;
        } else if (!formData.student_phone) {
            setFormError("Student LastName is Required");
            return false;
        } else if (!formData.alternate_phone) {
            setFormError("alternate phone is Required");
            return false;
        } else if (!formData.student_email) {
            setFormError("Email is Required");
            return false;
        } else if (!formData.student_address) {
            setFormError("Address is Required");
            return false;
        } else if (!formData.student_state) {
            setFormError("state is Required");
            return false;
        } else if (!formData.student_city) {
            setFormError("City is Required");
            return false;
        } else if (!formData.student_zip) {
            setFormError("Zip is Required");
            return false;
        } else if (!formData.notes) {
            setFormError("Notes is Required");
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
        if (e.target.multiple) {
            const selectedOptions = Array.from(e.target.selectedOptions).map(
                (option) => option.value
            );
            setFormData((prevState) => ({
                ...prevState,
                [name]: selectedOptions,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setFormStatus({
            isError: false,
            errMsg: null,
            isSubmitting: true,
        });

        const apiURL =
            "https://cloudconnectcampaign.com/espicrmnew/api/enquiry-followups/";
        const token = localStorage.getItem("token");

        const requestOptions = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        };

        try {
            const response = await fetch(apiURL, requestOptions);
            console.log(response);
            if (response.status === 201) {
                toast.success("FollowUp submitted successfully!");
                props.closeModal();
            } else {
                toast.error("Failed to submit FollowUp.");
            }
        } catch (error) {
            toast.error("Failed to submit FollowUp.");
        } finally {
            setFormStatus({
                ...formStatus,
                isSubmitting: false,
            });
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
                                            <div className="row mb-4">
                                                <label className="col-sm-4 col-form-label">
                                                    Last interaction summary
                                                </label>
                                                <div className="col-md-6">
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: "100px" }}
                                                        name="notes"
                                                        value={formData.notes}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Last Interaction Type
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="Source_Enquiry"
                                                        value={formData.Source_Enquiry}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Source</option>
                                                        {props.sourceEnquiry.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.Source}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-4">
                                                <label className="col-sm-4 col-form-label">
                                                    Next followup purpose
                                                </label>
                                                <div className="col-md-6">
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: "100px" }}
                                                        name="notes"
                                                        value={formData.notes}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Next followup method
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="Source_Enquiry"
                                                        value={formData.Source_Enquiry}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Source</option>
                                                        {props.sourceEnquiry.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.Source}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Reminder frequency
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="Source_Enquiry"
                                                        value={formData.Source_Enquiry}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Source</option>
                                                        {props.sourceEnquiry.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.Source}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Reminder notification method

                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="Source_Enquiry"
                                                        value={formData.Source_Enquiry}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Source</option>
                                                        {props.sourceEnquiry.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.Source}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Priority level
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="Source_Enquiry"
                                                        value={formData.Source_Enquiry}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Source</option>
                                                        {props.sourceEnquiry.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.Source}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <label className="col-sm-4 col-form-label">
                                                    Urgency
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="student_email"
                                                        value={formData.student_email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-4">
                                                <label className="col-sm-4 col-form-label">notes</label>
                                                <div className="col-md-6">
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: "100px" }}
                                                        name="notes"
                                                        value={formData.notes}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Status
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="Source_Enquiry"
                                                        value={formData.Source_Enquiry}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Source</option>
                                                        {props.sourceEnquiry.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.Source}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-4">
                                                <label className="col-sm-4 col-form-label">Outcome
                                                </label>
                                                <div className="col-md-6">
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: "100px" }}
                                                        name="notes"
                                                        value={formData.notes}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="row mb-3 mt-3">
                                                <label
                                                    for="inputNumber"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Attachment enquiryFollowup
                                                </label>
                                                <div className="col-md-5">
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        id="formFile"
                                                        name="Twelveth_Document"
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
                                                    User
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="Source_Enquiry"
                                                        value={formData.Source_Enquiry}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Source</option>
                                                        {props.sourceEnquiry.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.Source}
                                                            </option>
                                                        ))}
                                                    </select>
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

export default FollowUp;

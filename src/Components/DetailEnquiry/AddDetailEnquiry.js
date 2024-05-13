import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../UI/Loading/Loading";


const initialSubmit = {
    isError: false,
    errMsg: null,
    isSubmitting: false,
};

const AddDetailEnquiry = (props) => {
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

        Father_Occupation: "",
        Father_Annual_Income: "",

        Twelveth_Document: "",
        Tenth_Document: "",
        Graduation_Marksheet: "",
        Graduation_Certificate: "",
        UG_Marksheet: "",
        UG_Certificate: "",
        Ielts_Result: "",
        Toefl_Result: "",
        PTE_Result: "",
        Duolingo_Result: "",
        Gre_Result: "",
        Gmat_Result: "",
        Work_Experience_Document: "",
        Passport_Document: "",
        Offer_Letter: "",
        Refusal: "",
        Confirmed_Services: [],
        Enquiry_Status: "",
        DetaiEnquiryFollowup: "",
    });

    const token = localStorage.getItem("token");

    const [formStatus, setFormStatus] = useState(initialSubmit);

    const validateForm = () => {
        if (!detailEnquiry.Father_Occupation) {
            setFormError("Father Occupation is Required");
            return false;
        }
        else if (!detailEnquiry.Father_Annual_Income) {
            setFormError("Father Annual Income is Required");
            return false;
        }
        else if (!detailEnquiry.Offer_Letter) {
            setFormError("Offer Letter is Required");
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
        if (e.target.multiple) {
            const selectedOptions = Array.from(e.target.selectedOptions).map(
                (option) => parseInt(option.value)
            );
            setDetailEnquiry((prevState) => ({
                ...prevState,
                [name]: selectedOptions,
            }));
        } else {
            setDetailEnquiry((prevState) => ({
                ...prevState,
                [name]: newValue,
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
        const formData = new FormData();

        formData.append("Twelveth_Document", detailEnquiry.Twelveth_Document);
        formData.append("Tenth_Document", detailEnquiry.Tenth_Document);
        formData.append("Graduation_Marksheet", detailEnquiry.Graduation_Marksheet);
        formData.append(
            "Graduation_Certificate",
            detailEnquiry.Graduation_Certificate
        );
        formData.append("UG_Marksheet", detailEnquiry.UG_Marksheet);
        formData.append("UG_Certificate", detailEnquiry.UG_Certificate);
        formData.append("Ielts_Result", detailEnquiry.Ielts_Result);
        formData.append("Toefl_Result", detailEnquiry.Toefl_Result);
        formData.append("PTE_Result", detailEnquiry.PTE_Result);
        formData.append("Duolingo_Result", detailEnquiry.Duolingo_Result);
        formData.append("Gre_Result", detailEnquiry.Gre_Result);
        formData.append("Gmat_Result", detailEnquiry.Gmat_Result);
        formData.append(
            "Work_Experience_Document",
            detailEnquiry.Work_Experience_Document
        );
        formData.append("Passport_Document", detailEnquiry.Passport_Document);
        formData.append("Offer_Letter", detailEnquiry.Offer_Letter);
        formData.append("Refusal", detailEnquiry.Refusal);
        formData.append("Confirmed_Services", detailEnquiry.Confirmed_Services);
        formData.append("Enquiry_Status", detailEnquiry.Enquiry_Status);
        formData.append("DetaiEnquiryFollowup", detailEnquiry.DetaiEnquiryFollowup);

        Object.keys(detailEnquiry).forEach((key) => {
            if (
                key !== "Twelveth_Document" &&
                key !== "Tenth_Document" &&
                key !== "Graduation_Marksheet" &&
                key !== "Graduation_Certificate" &&
                key !== "UG_Marksheet" &&
                key !== "UG_Certificate" &&
                key !== "Ielts_Result" &&
                key !== "Toefl_Result" &&
                key !== "PTE_Result" &&
                key !== "Duolingo_Result" &&
                key !== "Gre_Result" &&
                key !== "Gmat_Result" &&
                key !== "Work_Experience_Document" &&
                key !== "Passport_Document" &&
                key !== "Offer_Letter" &&
                key !== "Refusal" &&
                key !== "Confirmed_Services" &&
                key !== "Enquiry_Status" &&
                key !== "DetaiEnquiryFollowup"
            ) {
                formData.append(key, detailEnquiry[key]);
            }
        });



        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            };
            const response = await fetch(
                "https://cloudconnectcampaign.com/espicrmnew/api/detailsEnquiry/",
                requestOptions
            );
            const data = await response.json();
            if (!response.ok) {
                throw new Error(
                    `API call failed with status: ${response.status
                    }, body: ${JSON.stringify(data)}`
                );
            }
            toast.success("Enquiry submitted successfully!");
            props.closeModal();
        } catch (error) {
            toast.error("Failed to submit enquiry.");
        }
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

                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-FollowUp-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-FollowUp"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-FollowUp"
                                            aria-selected="false"
                                        >
                                            Followup Status
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
                                                                    name="Current_Enquiry"
                                                                    onChange={handleChange}
                                                                    value={detailEnquiry.Current_Enquiry}
                                                                    required
                                                                >
                                                                    <option selected>Select Enquiry</option>
                                                                    {props.EnquiryData.map((Enquiry) => (
                                                                        <option key={Enquiry.id} value={Enquiry.id}>
                                                                            {Enquiry.student_First_Name}
                                                                        </option>
                                                                    ))}
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
                                                                    name="current_education"
                                                                    onChange={handleChange}
                                                                    value={detailEnquiry.current_education}
                                                                    required
                                                                >
                                                                    <option selected>
                                                                        Select Current Education
                                                                    </option>
                                                                    {props.EducationData.map((Education) => (
                                                                        <option
                                                                            key={Education.id}
                                                                            value={Education.id}
                                                                        >
                                                                            {Education.level}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
                                                            <label
                                                                className="col-sm-4 col-form-label"
                                                                required
                                                            >
                                                                Tenth Education Details
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    name="Tenth_Education_Details"
                                                                    onChange={handleChange}
                                                                    value={detailEnquiry.Tenth_Education_Details}
                                                                    required
                                                                >
                                                                    <option selected>
                                                                        Select Current Education
                                                                    </option>
                                                                    {props.EducationData.map((Education) => (
                                                                        <option
                                                                            key={Education.id}
                                                                            value={Education.id}
                                                                        >
                                                                            {Education.level}
                                                                        </option>
                                                                    ))}
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
                                                                    name="Twelveth_Education_Details"
                                                                    onChange={handleChange}
                                                                    value={detailEnquiry.Twelveth_Document}
                                                                    required
                                                                >
                                                                    <option selected>
                                                                        Select Twelveth Education
                                                                    </option>
                                                                    {props.EducationData.map((Education) => (
                                                                        <option
                                                                            key={Education.id}
                                                                            value={Education.id}
                                                                        >
                                                                            {Education.level}
                                                                        </option>
                                                                    ))}
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
                                                                    name="Graduation_Education_Details"
                                                                    onChange={handleChange}
                                                                    value={detailEnquiry.Graduation_Education_Details}
                                                                    required
                                                                >
                                                                    <option selected>
                                                                        Select Graduation Details
                                                                    </option>
                                                                    {props.EducationData.map((Education) => (
                                                                        <option
                                                                            key={Education.id}
                                                                            value={Education.id}
                                                                        >
                                                                            {Education.level}
                                                                        </option>
                                                                    ))}
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
                                                                    name="Work_Experience"
                                                                    onChange={handleChange}
                                                                    value={detailEnquiry.Work_Experience}
                                                                    required
                                                                >
                                                                    <option selected>
                                                                        Select Work Experience
                                                                    </option>
                                                                    {props.WorkExperience.map((Experience) => (
                                                                        <option
                                                                            key={Experience.id}
                                                                            value={Experience.id}
                                                                        >
                                                                            {Experience.Company_Name}
                                                                        </option>
                                                                    ))}
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
                                                                    name="Toefl_Exam"
                                                                    onChange={handleChange}
                                                                    value={detailEnquiry.Toefl_Exam}
                                                                    required
                                                                >
                                                                    <option selected>Toefl</option>
                                                                    {props.ToeflData.map((Toefl) => (
                                                                        <option key={Toefl.id} value={Toefl.id}>
                                                                            {Toefl.Overall}
                                                                        </option>
                                                                    ))}
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
                                                                    name="ielts_Exam"
                                                                    onChange={handleChange}
                                                                    value={detailEnquiry.ielts_Exam}
                                                                    required
                                                                >
                                                                    <option selected>ielts</option>
                                                                    {props.IeltsData.map((Ielts) => (
                                                                        <option key={Ielts.id} value={Ielts.id}>
                                                                            {Ielts.Overall}
                                                                        </option>
                                                                    ))}
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
                                                                    name="PTE_Exam"
                                                                    onChange={handleChange}
                                                                    value={detailEnquiry.PTE_Exam}
                                                                    required
                                                                >
                                                                    <option selected>pte</option>
                                                                    {props.PteData.map((Pte) => (
                                                                        <option key={Pte.id} value={Pte.id}>
                                                                            {Pte.Overall}
                                                                        </option>
                                                                    ))}
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
                                                                    name="Duolingo_Exam"
                                                                    onChange={handleChange}
                                                                    value={detailEnquiry.Duolingo_Exam}
                                                                    required
                                                                >
                                                                    <option selected>Duolingo</option>
                                                                    {props.DuolingoData.map((Duolingo) => (
                                                                        <option
                                                                            key={Duolingo.id}
                                                                            value={Duolingo.id}
                                                                        >
                                                                            {Duolingo.Overall}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
                                                            <label className="col-sm-4 col-form-label">
                                                                GRE Exam
                                                            </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    name="Gre_Exam"
                                                                    onChange={handleChange}
                                                                    value={detailEnquiry.Gre_Exam}
                                                                    required
                                                                >
                                                                    <option selected>Gmat</option>
                                                                    {props.GreData.map((Gre) => (
                                                                        <option key={Gre.id} value={Gre.id}>
                                                                            {Gre.Overall}
                                                                        </option>
                                                                    ))}
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
                                                                    name="Gmat_Exam"
                                                                    onChange={handleChange}
                                                                    value={detailEnquiry.Gmat_Exam}
                                                                    required
                                                                >
                                                                    <option selected>Gmat</option>
                                                                    {props.GmatData.map((Gmat) => (
                                                                        <option key={Gmat.id} value={Gmat.id}>
                                                                            {Gmat.Overall}
                                                                        </option>
                                                                    ))}
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
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="Father_Occupation"
                                                                onChange={handleChange}
                                                                value={detailEnquiry.Father_Occupation}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-1">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Father Annual Income
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="Father_Annual_Income"
                                                                onChange={handleChange}
                                                                value={detailEnquiry.Father_Annual_Income}
                                                                required
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
                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Twelveth Document
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
                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Tenth Document
                                                        </label>
                                                        <div className="col-md-5">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="Tenth_Document"
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Graduation Marksheet
                                                        </label>
                                                        <div className="col-md-5">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="Graduation_Marksheet"
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Graduation Certificate
                                                        </label>
                                                        <div className="col-md-5">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="Graduation_Certificate"
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            UG Marksheet
                                                        </label>
                                                        <div className="col-md-5">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="UG_Marksheet"
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            UG Certificate
                                                        </label>
                                                        <div className="col-md-5">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="UG_Certificate"
                                                                onChange={handleChange}
                                                                required
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
                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Ielts Result
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="Ielts_Result"
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Toefl Result
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="Toefl_Result"
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            PTE Result
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="PTE_Result"
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Duolingo Result
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="Duolingo_Result"
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Gre Result
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="Gre_Result"
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Gmat Result
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="Gmat_Result"
                                                                onChange={handleChange}
                                                                required
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
                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Work Experience Document
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="Work_Experience_Document"
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Passport Document
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="Passport_Document"
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        required
                                        className="tab-pane fade"
                                        id="pills-Offer"
                                        role="tabpanel"
                                        aria-labelledby="Offer-tab"
                                    >
                                        <div className="">
                                            <div className="card-body">
                                                <form className="row g-3">
                                                    <div className="row mb-3 mt-3">
                                                        <label
                                                            for="inputNumber"
                                                            className="col-sm-4 col-form-label"
                                                        >
                                                            Offer Letter
                                                        </label>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                id="formFile"
                                                                name="Offer_Letter"
                                                                onChange={handleChange}
                                                                required
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
                                        <div >
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
                                                                name="Refusal"
                                                                value={detailEnquiry.Refusal}
                                                                onChange={handleChange}
                                                                required
                                                            >
                                                                <option selected>Select Refusal Reasons</option>
                                                                {props.RefusalData.map((Refusal) => (
                                                                    <option key={Refusal.id} value={Refusal.id}>
                                                                        {Refusal.Refusal_Reason}
                                                                    </option>
                                                                ))}
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
                                                                className="form-control"
                                                                name="Confirmed_Services"
                                                                value={detailEnquiry.Confirmed_Services}
                                                                onChange={handleChange}
                                                                required
                                                                multiple
                                                            >
                                                                {props.ServicesData.map((services) => (
                                                                    <option key={services.id} value={services.id}>
                                                                        {services.Services}
                                                                    </option>
                                                                ))}
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
                                                                name="Enquiry_Status"
                                                                value={detailEnquiry.Enquiry_Status}
                                                                onChange={handleChange}
                                                                required
                                                            >
                                                                <option selected>Select Enquiry Status</option>
                                                                {props.statusData.map((Status) => (
                                                                    <option key={Status.id} value={Status.id}>
                                                                        {Status.status}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-FollowUp"
                                        role="tabpanel"
                                        aria-labelledby="FollowUp-tab"
                                    >
                                        <div className="">
                                            <div className="card-body">
                                                <form className="row g-3">
                                                    <div className="row mb-1 mt-3">
                                                        <label className="col-sm-4 col-form-label">
                                                            DetaiEnquiryFollowup
                                                        </label>
                                                        <div className="col-md-6">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                name="followup"
                                                                onChange={handleChange}
                                                                value={detailEnquiry.followup}
                                                                required
                                                            >
                                                                <option selected>Select FollowUp Status</option>
                                                                {props.followupData.map((followup) => (
                                                                    <option
                                                                        key={followup.id}
                                                                        value={followup.id}
                                                                    >
                                                                        {followup.next_followup_date}
                                                                    </option>
                                                                ))}
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
            </div>
        </section>
    );
};

export default AddDetailEnquiry;

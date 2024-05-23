import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../UI/Loading/Loading";

const initialSubmit = {
    isError: false,
    errMsg: null,
    isSubmitting: false,
};

const Source = (props) => {
    const [SourceData, setSourceData] = useState({
        course_name: "",
        id: "",
        Remark: "",
        Active: "",
        university: "",
        course_levels: "",
        tenth_std_percentage_requirement: "",
        twelfth_std_percentage_requirement: "",
        bachelor_requirement: "",
        masters_requirement: "",
        Toefl_Exam: "",
        ielts_Exam: "",
        PTE_Exam: "",
        Duolingo_Exam: "",
        Gre_Exam: "",
        Gmat_Exam: "",
        intake: [],
        documents_required: []
    });


    const [formStatus, setFormStatus] = useState(initialSubmit);

    const validateForm = () => {
        if (!SourceData.course_name) {
            setFormError("Course Name is Required");
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
            const apiURL =
                "https://cloudconnectcampaign.com/espicrmnew/api/courses/";
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
            }
            else {
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
                                                    University
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="user"
                                                        value={SourceData.university}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select University</option>
                                                        {props.user.map((user) => (
                                                            <option key={user.id} value={user.id}>
                                                                {user.username}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="student_First_Name"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Course Name
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        name="Reference_Number"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={SourceData.course_name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="student_First_Name"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Course Levels
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="user"
                                                        value={SourceData.university}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select University</option>
                                                        {props.user.map((user) => (
                                                            <option key={user.id} value={user.id}>
                                                                {user.username}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="student_First_Name"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Intake
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="user"
                                                        value={SourceData.university}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select University</option>
                                                        {props.user.map((user) => (
                                                            <option key={user.id} value={user.id}>
                                                                {user.username}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    for="inputNumber"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Documents Required
                                                </label>
                                                <div className="col-md-5">
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        id="formFile"
                                                        name="attachment_enquiryFollowup"
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

export default Source;

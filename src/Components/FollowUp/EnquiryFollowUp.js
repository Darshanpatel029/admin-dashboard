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
    const [FollowUpData, setFollowupData] = useState({
        last_contact_date: "",
        last_interaction_summary: "",
        last_interaction_type: "",
        next_followup_date: "",
        next_followup_purpose: "",
        next_followup_method: "",
        next_followup_date: "",
        reminder_date_time: "",
        reminder_frequency: "",
        reminder_notification_method: "",
        priority_level: "",
        urgency: "",
        notes: "",
        status: "",
        outcome: "",
        attachment_enquiryFollowup: "",
        user: "",
    });
    const token = localStorage.getItem("token");
    const [formStatus, setFormStatus] = useState(initialSubmit);

    const validateForm = () => {
        if (!FollowUpData.last_contact_date) {
            setFormError("Last Contact date is Required");
            return false;
        }
        else if (!FollowUpData.last_interaction_type) {
            setFormError("Last Interaction Type is Required");
            return false;

        } else if (!FollowUpData.next_followup_method) {
            setFormError("Next FollowUp Method is Required");
            return false;

        } else if (!FollowUpData.reminder_frequency) {
            setFormError("Reminder Frequency is Required");
            return false;

        } else if (!FollowUpData.reminder_notification_method) {
            setFormError("Reminder Notification Method is Required");
            return false;

        } else if (!FollowUpData.priority_level) {
            setFormError("Priority Level is Required");
            return false;

        } else if (!FollowUpData.status) {
            setFormError("Status is Required");
            return false;

        } else if (!FollowUpData.user) {
            setFormError("User is Required");
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
        setFollowupData((prevState) => ({
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
        const formData = new FormData();
        formData.append("attachment_enquiryFollowup", FollowUpData.attachment_enquiryFollowup);

        // Concatenate date and time into a single string
        const reminderDateTime = `${FollowUpData.reminder_date} ${FollowUpData.reminder_time}`;

        // Pass concatenated date and time in the array
        formData.append("reminder_date_time", reminderDateTime);

        Object.keys(FollowUpData).forEach((key) => {
            if (key !== "attachment_enquiryFollowup" && key !== "reminder_time") {
                formData.append(key, FollowUpData[key]);
            }
        });

        try {
            const response = await fetch(
                "https://cloudconnectcampaign.com/espicrmnew/api/enquiry-followups/",
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
                toast.success("Enquiry submitted successfully!");
                props.closeModal();
            }
        } catch (error) {
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
                                                    Last Contact Date
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        type="date"
                                                        name="last_contact_date"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={FollowUpData.last_contact_date}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label className="col-sm-4 col-form-label">
                                                    Last Interaction Summary
                                                </label>
                                                <div className="col-md-6">
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: "100px" }}
                                                        name="last_interaction_summary"
                                                        value={FollowUpData.last_interaction_summary}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Last Interaction Type
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="last_interaction_type"
                                                        value={FollowUpData.last_interaction_type}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Type</option>
                                                        <option value="call">Call</option>
                                                        <option value="meeting">Meeting</option>
                                                        <option value="email">Email</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="student_First_Name"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Next FollowUp Date
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        type="date"
                                                        name="next_followup_date"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={FollowUpData.next_followup_date}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label className="col-sm-4 col-form-label">
                                                    Next Followup Purpose
                                                </label>
                                                <div className="col-md-6">
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: "100px" }}
                                                        name="next_followup_purpose"
                                                        value={FollowUpData.next_followup_purpose}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Next Followup Method
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="next_followup_method"
                                                        value={FollowUpData.next_followup_method}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Method</option>
                                                        <option value="email">Email</option>
                                                        <option value="phone">Phone</option>
                                                        <option value="sms">SMS</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="student_First_Name"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Reminder Date&Time
                                                </label>
                                                <div className="col-md-6">
                                                    Date:  <input
                                                        type="date"
                                                        name="reminder_date"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={FollowUpData.reminder_date}
                                                        onChange={handleChange}
                                                    />
                                                    Time: <input
                                                        type="time"
                                                        name="reminder_time"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={FollowUpData.reminder_time}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">                                                <label
                                                htmlFor="Source_Enquiry"
                                                className="col-sm-4 col-form-label"
                                            >
                                                Reminder Frequency
                                            </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="reminder_frequency"
                                                        value={FollowUpData.reminder_frequency}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Reminder Frequency</option>
                                                        <option value="one-time">One-time</option>
                                                        <option value="daily">Daily</option>
                                                        <option value="weekly">Weekly</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Reminder Notification Method

                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="reminder_notification_method"
                                                        value={FollowUpData.reminder_notification_method}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Reminder Notification Method</option>
                                                        <option value="email">Email</option>
                                                        <option value="phone">Phone</option>
                                                        <option value="sms">SMS</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Priority Level
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="priority_level"
                                                        value={FollowUpData.priority_level}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Source</option>
                                                        <option value="high">High</option>
                                                        <option value="medium">Medium</option>
                                                        <option value="low">Low</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label className="col-sm-4 col-form-label">
                                                    Urgency
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="urgency"
                                                        value={FollowUpData.urgency}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label className="col-sm-4 col-form-label">notes</label>
                                                <div className="col-md-6">
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: "100px" }}
                                                        name="notes"
                                                        value={FollowUpData.notes}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Status
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="status"
                                                        value={FollowUpData.status}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Status</option>
                                                        <option value="pending" >Pending</option>
                                                        <option value="completed" >Completed</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label className="col-sm-4 col-form-label">Outcome
                                                </label>
                                                <div className="col-md-6">
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: "100px" }}
                                                        name="outcome"
                                                        value={FollowUpData.outcome}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
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
                                                        name="attachment_enquiryFollowup"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    User
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="user"
                                                        value={FollowUpData.user}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select User</option>
                                                        <option value={1}>Admin</option>
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

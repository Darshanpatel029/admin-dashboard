import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../UI/Loading/Loading";
import Ielts from "./DetailEnquiryButtons/Ielts";
import Pte from "./DetailEnquiryButtons/Pte";
import Duolingo from "./DetailEnquiryButtons/Duolingo";
import Gmat from "./DetailEnquiryButtons/Gmat";
import Gre from "./DetailEnquiryButtons/Gre";
import Toefl from "./DetailEnquiryButtons/Toefl";
import TenthScore from "./TenthScore";
import TwelfthScore from "./TwelfthScore";
import BachelorScore from "./BachelorScore";
import MasterScore from "./MasterScore";
import ModalComponent from "../UI/Modal/ModalComponent";

const initialSubmit = {
    isError: false,
    errMsg: null,
    isSubmitting: false,
};

const Source = (props) => {
    const [EduModel, setEduModal] = useState(false)
    const [ielts, setIelts] = useState(false);
    const [toefl, setToefl] = useState(false);
    const [pte, setPte] = useState(false);
    const [gmat, setGmat] = useState(false);
    const [duolingo, setDuolingo] = useState(false);
    const [gre, setGre] = useState(false);
    const [Tenth, setTenth] = useState(false);
    const [Twelfth, setTwelfth] = useState(false);
    const [Bachelor, setBachelor] = useState(false);
    const [Master, setMaster] = useState(false);

    const [SourceData, setSourceData] = useState({
        univ_name: "",
        univ_desc: "",
        univ_logo: "",
        univ_phone: "",
        univ_email: "",
        univ_website: "",
        Remark: "",
        newsletter: "",
        application_form: "",
        country: "",
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
        assigned_users: "",
        Active: "false"
    });

    const token = localStorage.getItem("token");
    const [formStatus, setFormStatus] = useState(initialSubmit);

    const validateForm = () => {
        if (!SourceData.univ_name) {
            setFormError("University Name is Required");
            return false;
        } else if (!SourceData.country) {
            setFormError("Country is Required");
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
        const formData = new FormData();
        formData.append("application_form", SourceData.application_form);
        formData.append("newsletter", SourceData.newsletter);


        Object.keys(SourceData).forEach((key) => {
            if (
                key !== "application_form" &&
                key !== "newsletter" &&
                key !== "univ_logo"
            ) {
                formData.append(key, SourceData[key]);
            }
        });

        try {
            const response = await fetch(
                "https://cloudconnectcampaign.com/espicrmlatest/api/universities/",
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

    const closeIelts = () => {
        setIelts(false);
    };
    const closePte = () => {
        setPte(false);
    };
    const closeDuolingo = () => {
        setDuolingo(false);
    };
    const closeToefl = () => {
        setToefl(false);
    };
    const closeGre = () => {
        setGre(false);
    };
    const closeGmat = () => {
        setGmat(false);
    };
    const CloseTenth = () => {
        setTenth(false);
    };
    const closeTwelfth = () => {
        setTwelfth(false);
    };

    const closeBachelor = () => {
        setBachelor(false);
    };

    const closeMaster = () => {
        setMaster(false);
    }

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
                                                    University Name
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        name="univ_name"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={SourceData.univ_name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Country
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="country"
                                                        value={SourceData.country}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Tenth Percentage</option>
                                                        {props.IntrestedCountryData.map((CountryData) => (
                                                            <option key={CountryData.id} value={CountryData.id}>
                                                                {CountryData.country}
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
                                                    University Desc
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        name="univ_desc"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={SourceData.univ_desc}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    for="inputNumber"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    University Logo
                                                </label>
                                                <div className="col-md-5">
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        id="formFile"
                                                        name="univ_logo"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    for="inputNumber"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Application Form
                                                </label>
                                                <div className="col-md-5">
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        id="formFile"
                                                        name="application_form"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    for="inputNumber"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Newsletter
                                                </label>
                                                <div className="col-md-5">
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        id="formFile"
                                                        name="newsletter"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="student_First_Name"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    University Phone
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        type="number"
                                                        name="univ_phone"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={SourceData.univ_phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="student_First_Name"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    University Email
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        type="email"
                                                        name="univ_email"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={SourceData.univ_email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="student_First_Name"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    University Website
                                                </label>
                                                <div className="col-md-6">
                                                    <input
                                                        type="url"
                                                        name="univ_website"
                                                        className="form-control"
                                                        id="student_First_Name"
                                                        value={SourceData.univ_website}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Tenth Std Percentage Requirement
                                                </label>
                                                <div className="col-md-6 d-flex">
                                                    <select
                                                        type="number"
                                                        name="tenth_std_percentage_requirement"
                                                        value={SourceData.tenth_std_percentage_requirement}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Tenth Percentage</option>
                                                        {props.TenthData.map((Tenth) => (
                                                            <option key={Tenth.id} value={Tenth.id}>
                                                                {Tenth.percentage}
                                                            </option>
                                                        ))}

                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center m-2">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => setTenth(true)}
                                                        >
                                                            <i className="bi bi-file-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Twelfth Std Percentage Requirement
                                                </label>
                                                <div className="col-md-6 d-flex">
                                                    <select
                                                        type="number"
                                                        name="twelfth_std_percentage_requirement"
                                                        value={SourceData.twelfth_std_percentage_requirement}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Twelfth Percentage </option>
                                                        {props.TwelthData.map((Twelth) => (
                                                            <option key={Twelth.id} value={Twelth.id}>
                                                                {Twelth.percentage}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center m-2">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => setTwelfth(true)}
                                                        >
                                                            <i className="bi bi-file-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Bachelor Requirement
                                                </label>
                                                <div className="col-md-6 d-flex">
                                                    <select
                                                        type="number"
                                                        name="bachelor_requirement"
                                                        value={SourceData.bachelor_requirement}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Bachelor</option>
                                                        {props.BachelorData.map((Bachelor) => (
                                                            <option key={Bachelor.id} value={Bachelor.id}>
                                                                {Bachelor.requirement}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center m-2">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => setBachelor(true)}
                                                        >
                                                            <i className="bi bi-file-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Masters Requirement
                                                </label>
                                                <div className="col-md-6 d-flex">
                                                    <select
                                                        type="number"
                                                        name="masters_requirement"
                                                        value={SourceData.masters_requirement}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Master Score</option>
                                                        {props.MasterData.map((Master) => (
                                                            <option key={Master.id} value={Master.id}>
                                                                {Master.requirement}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center m-2">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => setMaster(true)}
                                                        >
                                                            <i className="bi bi-file-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    TOEFL Exam
                                                </label>
                                                <div className="col-md-6 d-flex">
                                                    <select
                                                        type="number"
                                                        name="Toefl_Exam"
                                                        value={SourceData.Toefl_Exam}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select TOEFL Score</option>
                                                        {props.ToeflData.map((Toefl) => (
                                                            <option key={Toefl.id} value={Toefl.id}>
                                                                {Toefl.Overall}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center m-2">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => setToefl(true)}
                                                        >
                                                            <i className="bi bi-file-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    IELTS Exam
                                                </label>
                                                <div className="col-md-6 d-flex">
                                                    <select
                                                        type="number"
                                                        name="ielts_Exam"
                                                        value={SourceData.ielts_Exam}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select IELTS Score</option>
                                                        {props.IeltsData.map((Ielts) => (
                                                            <option key={Ielts.id} value={Ielts.id}>
                                                                {Ielts.Overall}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center m-2">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => setIelts(true)}
                                                        >
                                                            <i className="bi bi-file-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    PTE Exam
                                                </label>
                                                <div className="col-md-6 d-flex">
                                                    <select
                                                        type="number"
                                                        name="PTE_Exam"
                                                        value={SourceData.PTE_Exam}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select PTE Score</option>
                                                        {props.PteData.map((Pte) => (
                                                            <option key={Pte.id} value={Pte.id}>
                                                                {Pte.Overall}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center m-2">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => setPte(true)}
                                                        >
                                                            <i className="bi bi-file-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Duolingo Exam
                                                </label>
                                                <div className="col-md-6 d-flex">
                                                    <select
                                                        type="number"
                                                        name="Duolingo_Exam"
                                                        value={SourceData.Duolingo_Exam}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Duolingo Score </option>
                                                        {props.DuolingoData.map((Duolingo) => (
                                                            <option key={Duolingo.id} value={Duolingo.id}>
                                                                {Duolingo.Overall}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    <div className="d-flex justify-content-center align-items-center m-2">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => setDuolingo(true)}
                                                        >
                                                            <i className="bi bi-file-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    GRE Exam
                                                </label>
                                                <div className="col-md-6 d-flex">
                                                    <select
                                                        type="number"
                                                        name="Gre_Exam"
                                                        value={SourceData.Gre_Exam}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Gre Score</option>
                                                        {props.GreData.map((Gre) => (
                                                            <option key={Gre.id} value={Gre.id}>
                                                                {Gre.Overall}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center m-2">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => setGre(true)}
                                                        >
                                                            <i className="bi bi-file-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    GMAT Exam
                                                </label>
                                                <div className="col-md-6 d-flex">
                                                    <select
                                                        type="number"
                                                        name="Gmat_Exam"
                                                        value={SourceData.Gmat_Exam}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select Gmat Score</option>
                                                        {props.GmatData.map((Gmat) => (
                                                            <option key={Gmat.id} value={Gmat.id}>
                                                                {Gmat.Overall}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="d-flex justify-content-center align-items-center m-2">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => setGmat(true)}
                                                        >
                                                            <i className="bi bi-file-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label
                                                    htmlFor="Source_Enquiry"
                                                    className="col-sm-4 col-form-label"
                                                >
                                                    Assigned Users
                                                </label>
                                                <div className="col-md-6">
                                                    <select
                                                        type="number"
                                                        name="assigned_users"
                                                        value={SourceData.assigned_users}
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Select User</option>
                                                        {props.userData.map((user) => (
                                                            <option key={user.id} value={user.id}>
                                                                {user.username}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label className="col-sm-4 col-form-label">
                                                    Notes
                                                </label>
                                                <div className="col-md-6">
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: "100px" }}
                                                        name="Remark"
                                                        value={SourceData.Remark}
                                                        onChange={handleChange}
                                                    ></textarea>
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

            <ModalComponent
                show={Tenth}
                onHide={() => setTenth(false)}
                size="lg"
                title="Add Tenth Score"
            >
                <TenthScore
                    closeModal={CloseTenth}
                    user={props.userData}
                    getNewData={props.getNewData}
                />
            </ModalComponent>

            <ModalComponent
                show={Twelfth}
                onHide={() => setTwelfth(false)}
                size="lg"
                title="Add Twelfth Score"
            >
                <TwelfthScore
                    closeModal={closeTwelfth}
                    user={props.userData}
                    getNewData={props.getNewData}
                />
            </ModalComponent>

            <ModalComponent
                show={Bachelor}
                onHide={() => setBachelor(false)}
                size="lg"
                title="Add Bachelor Score"
            >
                <BachelorScore
                    closeModal={closeBachelor}
                    user={props.userData}
                    getNewData={props.getNewData}
                />
            </ModalComponent>

            <ModalComponent
                show={Master}
                onHide={() => setMaster(false)}
                size="lg"
                title="Add Master Score"
            >
                <MasterScore
                    closeModal={closeMaster}
                    user={props.userData}
                    getNewData={props.getNewData}
                />
            </ModalComponent>

            <ModalComponent
                show={ielts}
                onHide={() => setIelts(false)}
                size="lg"
                title="Add Overall IELTS Score"
            >
                <Ielts
                    closeModal={closeIelts}
                    user={props.userData}
                    getNewData={props.getNewData}
                />
            </ModalComponent>

            <ModalComponent
                show={pte}
                onHide={() => setPte(false)}
                size="lg"
                title="Add Overall PTE Score"
            >
                <Pte
                    closeModal={closePte}
                    user={props.userData}
                    getNewData={props.getNewData}
                />
            </ModalComponent>

            <ModalComponent
                show={duolingo}
                onHide={() => setDuolingo(false)}
                size="lg"
                title="Add Overall Duolingo Score"
            >
                <Duolingo
                    closeModal={closeDuolingo}
                    user={props.userData}
                    getNewData={props.getNewData}
                />
            </ModalComponent>

            <ModalComponent
                show={gmat}
                onHide={() => setGmat(false)}
                size="lg"
                title="Add Overall GMAT Score"
            >
                <Gmat
                    closeModal={closeGmat}
                    user={props.userData}
                    getNewData={props.getNewData}
                />
            </ModalComponent>

            <ModalComponent
                show={gre}
                onHide={() => setGre(false)}
                size="lg"
                title="Add Overall GRE Score"
            >
                <Gre
                    closeModal={closeGre}
                    user={props.userData}
                    getNewData={props.getNewData}
                />
            </ModalComponent>

            <ModalComponent
                show={toefl}
                onHide={() => setToefl(false)}
                size="lg"
                title="Add Overall TOEFL Score"
            >
                <Toefl
                    closeModal={closeToefl}
                    user={props.userData}
                    getNewData={props.getNewData}
                />
            </ModalComponent>
        </div>


    );
};

export default Source;

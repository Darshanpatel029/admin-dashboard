import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../UI/Loading/Loading";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values) => {
    setLoading(true);
    const { username, password } = values;

    const bodyData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch(
        "https://cloudconnectcampaign.com/espicrmnew/api/login/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.access);
        navigate("/ViewEnquiry");
        toast.success("LogIn Successful");
      } else if (response.status === 401) {
        toast.error("Invalid username or password");
      }
      else {
        toast.error("Some Problem Occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
      // setSubmitting(false);
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Link className="logo d-flex align-items-center w-auto">
                    <span className="d-none d-lg-block">ESPI CRM</span>
                  </Link>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p className="text-center small">
                        Enter your username & password to login
                      </p>
                    </div>

                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleLogin}
                    >
                      <Form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Username
                          </label>
                          <Field
                            id="yourUsername"
                            type="text"
                            name="username"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className="text-danger mt-2"
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <Field
                            id="yourPassword"
                            type="password"
                            name="password"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger mt-2"
                          />
                        </div>
                        <div className="col-12">
                          {loading ? (
                            <Loading />
                          ) : (
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                            >
                              Login
                            </button>
                          )}
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;

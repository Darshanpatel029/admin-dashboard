import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await fetch(
        "https://cloudconnectcampaign.com/espicrmnew/api/login/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(userCredentials),
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem("token", data.access);
        navigate("/ViewEnquiry");
        toast.success("LogIn Successfull");
      } else {
        setErrors({
          submit: data.message || "Invalid username or password",
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrors({
        submit: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false); // Stop loading
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
                  <Link
                    to="/"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">NiceAdmin</span>
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

                    <form
                      className="row g-3 needs-validation"
                      onSubmit={handleSubmit}
                      novalidate
                    >
                      <div className="col-12">
                        <label for="yourUsername" className="form-label">
                          Username
                        </label>
                        <div className="input-group has-validation">
                          {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="yourUsername"
                            onChange={handleChange}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
                      <div className="col-12">
                        {loading ? (
                          <button
                            className="btn btn-primary w-100"
                            type="button"
                            disabled
                          >
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Loading...
                          </button>
                        ) : (
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Login
                          </button>
                        )}
                      </div>
                    </form>
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

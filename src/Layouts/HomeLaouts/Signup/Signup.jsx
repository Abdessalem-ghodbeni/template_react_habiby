import React from "react";

function Signup() {
  return (
    <>
      <section className="vh-xxl-100">
        <div className="container h-100 d-flex px-0 px-sm-4">
          <div className="row justify-content-center align-items-center m-auto">
            <div className="col-12">
              <div className="bg-mode shadow rounded-3 overflow-hidden">
                <div className="row g-0">
                  {/* Vector Image */}
                  <div className="col-lg-6 d-md-flex align-items-center order-2 order-lg-1">
                    <div className="p-3 p-lg-5">
                      <img src="assets/images/element/signin.svg" alt />
                    </div>
                    {/* Divider */}
                    <div className="vr opacity-1 d-none d-lg-block" />
                  </div>
                  {/* Information */}
                  <div className="col-lg-6 order-1">
                    <div className="p-4 p-sm-6">
                      {/* Logo */}
                      <a href="index.html">
                        <img
                          className="h-50px mb-4"
                          src="assets/images/tn.png"
                          alt="logo"
                        />
                      </a>
                      {/* Title */}
                      <h1 className="mb-2 h3">Create new account</h1>
                      <p className="mb-0">
                        Already a member?<a href="/signin"> Log in</a>
                      </p>
                      {/* Form START */}
                      <form className="mt-4 text-start">
                        {/* Email */}
                        <div className="mb-3">
                          <label className="form-label">Enter email id</label>
                          <input type="email" className="form-control" />
                        </div>
                        {/* Password */}
                        <div className="mb-3 position-relative">
                          <label className="form-label">Enter password</label>
                          <input
                            className="form-control fakepassword"
                            type="password"
                            id="psw-input"
                          />
                          <span className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
                            <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2" />
                          </span>
                        </div>
                        {/* Confirm Password */}
                        <div className="mb-3">
                          <label className="form-label">Confirm Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        {/* Remember me */}
                        <div className="mb-3">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberCheck"
                          >
                            Keep me signed in
                          </label>
                        </div>
                        {/* Button */}
                        <div>
                          <button
                            type="submit"
                            className="btn btn-primary w-100 mb-0"
                          >
                            Sign up
                          </button>
                        </div>
                        {/* Divider */}
                        <div className="position-relative my-4">
                          <hr />
                          <p className="small position-absolute top-50 start-50 translate-middle bg-mode px-1 px-sm-2">
                            Or sign in with
                          </p>
                        </div>
                        {/* Google and facebook button */}
                        <div className="vstack gap-3">
                          <a href="#" className="btn btn-light mb-0">
                            <i className="fab fa-fw fa-google text-google-icon me-2" />
                            Sign in with Google
                          </a>
                          <a href="#" className="btn btn-light mb-0">
                            <i className="fab fa-fw fa-facebook-f text-facebook me-2" />
                            Sign in with Facebook
                          </a>
                        </div>
                        {/* Copyright */}
                        <div className="text-primary-hover text-body mt-3 text-center">
                          {" "}
                          Copyrights ©2023 Booking. Build by{" "}
                          <a
                            href="https://www.webestica.com/"
                            className="text-body"
                          >
                            Webestica
                          </a>
                          .{" "}
                        </div>
                      </form>
                      {/* Form END */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;

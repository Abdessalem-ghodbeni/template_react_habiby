import React from "react";

function AjoutDemande() {
  return (
    <main>
      {/* =======================
Page Banner START */}
      <section className="pt-4 pt-md-5 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto text-center">
              <h1 className="fs-2 mb-2">Add New Listing</h1>
              <p className="mb-0">
                Praise effects wish change way and any wanted. Lively use looked
                latter regard had.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <form className="vstack gap-4">
                {/* Owner Detail START */}
                <div className="card shadow">
                  {/* Card header */}
                  <div className="card-header border-bottom">
                    <h5 className="mb-0">Owner Detail</h5>
                  </div>
                  {/* Card body */}
                  <div className="card-body">
                    <div className="row g-3">
                      {/* Owner name */}
                      <div className="col-12">
                        <label className="form-label">Owner name</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                          />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                      {/* Contact number */}
                      <div className="col-md-6">
                        <label className="form-label">Contact number</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter contact number"
                        />
                      </div>
                      {/* Email */}
                      <div className="col-md-6">
                        <label className="form-label">Email address</label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter email address"
                        />
                      </div>
                      {/* Address */}
                      <div className="col-12">
                        <label className="form-label">Address</label>
                        <textarea
                          className="form-control"
                          rows={2}
                          placeholder="Enter keywords"
                          defaultValue={""}
                        />
                      </div>
                      {/* State */}
                      <div className="col-md-6">
                        <label className="form-label">State</label>
                        <select
                          className="form-select js-choice"
                          data-search-enabled="true"
                        >
                          <option value>Select state</option>
                          <option>India</option>
                          <option>Usa</option>
                          <option>Japan</option>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                      {/* City */}
                      <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter city"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Owner Detail END */}
                {/* Cab Detail START */}
                <div className="card shadow">
                  {/* Card header */}
                  <div className="card-header border-bottom">
                    <h5 className="mb-0">Cab Detail</h5>
                  </div>
                  {/* Card body */}
                  <div className="card-body">
                    <div className="row g-3">
                      {/* Car name */}
                      <div className="col-md-6">
                        <label className="form-label">Car name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter car name"
                        />
                      </div>
                      {/* car type */}
                      <div className="col-md-6">
                        <label className="form-label">Car type *</label>
                        <div className="d-sm-flex">
                          {/* Radio */}
                          <div className="form-check radio-bg-light me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Ac
                            </label>
                          </div>
                          {/* Radio */}
                          <div className="form-check radio-bg-light me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Non Ac
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* State */}
                      <div className="col-md-6">
                        <label className="form-label">Car model</label>
                        <select
                          className="form-select js-choice"
                          data-search-enabled="true"
                        >
                          <option value>Select item</option>
                          <option>Sedan</option>
                          <option>Micro</option>
                          <option>CUV</option>
                          <option>SUV</option>
                          <option>Pick up</option>
                          <option>Coupe</option>
                        </select>
                      </div>
                      {/* Model Year */}
                      <div className="col-md-6">
                        <label className="form-label">Model Year</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter car model year"
                        />
                      </div>
                      {/* Image Gallery */}
                      <div className="col-12">
                        <label className="form-label">Upload image *</label>
                        <div
                          className="dropzone dropzone-custom"
                          data-dropzone='{"maxFiles": 5, "addRemoveLinks": false}'
                        >
                          <div className="dz-message needsclick">
                            <i className="bi bi-upload display-3" />
                            <p>Drop files here or click to upload.</p>
                          </div>
                          <div className="dz-preview row g-4"></div>
                        </div>
                        <p className="small mb-0 mt-2">
                          <b>Note:</b> Only JPG, JPEG, and PNG. Our suggested
                          dimensions are 600px * 450px. The larger image will be
                          cropped to 4:3 to fit our thumbnails/previews.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cab Detail END */}
                {/* Driver Detail START */}
                <div className="card shadow">
                  {/* Card header */}
                  <div className="card-header border-bottom">
                    <h5 className="mb-0">Driver Detail</h5>
                  </div>
                  {/* Card body */}
                  <div className="card-body">
                    <div className="row g-3">
                      {/* Select item */}
                      <div className="col-md-3">
                        <label className="form-label">Title</label>
                        <select className="form-select js-choice">
                          <option>Mr</option>
                          <option>Mrs</option>
                        </select>
                      </div>
                      {/* Owner name */}
                      <div className="col-md-9">
                        <label className="form-label">Driver Name</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                          />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                      {/* Contact number */}
                      <div className="col-md-6">
                        <label className="form-label">Contact Number</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter contact number"
                        />
                      </div>
                      {/* License number */}
                      <div className="col-md-6">
                        <label className="form-label">License Number</label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter license number"
                        />
                      </div>
                      {/* State */}
                      <div className="col-md-6">
                        <label className="form-label">State</label>
                        <select
                          className="form-select js-choice"
                          data-search-enabled="true"
                        >
                          <option value>Select state</option>
                          <option>India</option>
                          <option>Usa</option>
                          <option>Japan</option>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                      {/* City */}
                      <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter city"
                        />
                      </div>
                      {/* Address */}
                      <div className="col-12">
                        <label className="form-label">Address</label>
                        <textarea
                          className="form-control"
                          rows={2}
                          placeholder="Enter keywords"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Driver Detail END */}
                {/* Button */}
                <div className="text-end">
                  <a href="listing-added.html" className="btn btn-primary mb-0">
                    Add listing
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* =======================
Main content END */}
    </main>
  );
}

export default AjoutDemande;

import React from "react";

class StepTwo extends React.Component {
  render() {
    const { formData, handleChange, handlePhotoChange } = this.props;

    return (
      <div className="multisteps-form__panel" data-animation="slideVert">
        <div className="inner pb-50">
          <div className="wizard-content-form">
            <div className="wizard-form-field">
              <div className="my-5 text-left">
                <h2 className="wizard-title mb-2 px-0">
                  Parent/Guardian's Information
                </h2>
              </div>

              <div className="row">
                <div className="col-md-6 order-2">
                  <ul className="d-inline-flex">
                    <li className="pr-5">
                      <label>
                        <input
                          type="radio"
                          className="identity-check"
                          defaultChecked
                          name="guardian1Type"
                          value="parent"
                          onChange={handleChange}
                        />
                        <span className="identity-label"></span> Parent
                        <span className="checkmark-border"></span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          className="identity-check"
                          name="guardian1Type"
                          value="guardian"
                          onChange={handleChange}
                        />
                        <span className="identity-label">Guardian</span>
                        <span className="checkmark-border"></span>
                      </label>
                    </li>
                  </ul>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="guardian1Name"
                      value={formData.guardian1Name}
                      onChange={handleChange}
                      placeholder="Mother's First, Middle and Surname"
                    />
                    <label>Mother's First, Middle and Surname</label>
                  </div>
                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="guardian1Occupation"
                      placeholder="Mother's Occupation"
                      value={formData.guardian1Occupation}
                      onChange={handleChange}
                    />
                    <label>Mother's Occupation</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group">
                    <input
                      type="date"
                      className="form-control"
                      name="guardian1DateOfBirth"
                      value={formData.guardian1DateOfBirth}
                      onChange={handleChange}
                    />
                    {/* <label>Full Address</label> */}
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      type="text"
                      className="form-control"
                      name="guardian1AddressPhone"
                      placeholder="Full Address and Phone Number (Cell or Landline)"
                      value={formData.guardian1AddressPhone}
                      onChange={handleChange}
                    ></textarea>
                    <label>
                      Full Address and Phone Number (Cell or Landline)
                    </label>
                  </div>

                  {/* Signature */}
                  <div className="upload-araa">
                    <div className="upload-text float-left">
                      <span>Signature</span>
                    </div>
                    <div className="upload-option text-center float-right">
                      <label htmlFor="files">Upload Signature</label>
                      <input
                        id="files"
                        type="file"
                        className="d-none"
                        name="guardian1Signature"
                        accept="image/jpg,image/png,image/jpeg"
                        // value={formData.guardian1Signature}
                        onChange={handlePhotoChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <ul className="d-inline-flex">
                    <li className="pr-5">
                      <label>
                        <input
                          type="radio"
                          className="identity-check"
                          defaultChecked
                          name="guardian2Type"
                          value="parent"
                          onChange={handleChange}
                        />
                        <span className="identity-label"></span> Parent
                        <span className="checkmark-border"></span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          className="identity-check"
                          name="guardian2Type"
                          value="guardian"
                          onChange={handleChange}
                        />
                        <span className="identity-label">Guardian</span>
                        <span className="checkmark-border"></span>
                      </label>
                    </li>
                  </ul>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="guardian2Name"
                      placeholder="Father's First, Middle and Surname"
                      value={formData.guardian2Name}
                      onChange={handleChange}
                    />
                    <label>Father's First, Middle and Surname</label>
                  </div>
                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="guardian2Occupation"
                      placeholder="Father's Occupation"
                      value={formData.guardian2Occupation}
                      onChange={handleChange}
                    />
                    <label>Father's Occupation</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group">
                    <label className="form-label">Father's Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      name="guardian2DateOfBirth"
                      value={formData.guardian2DateOfBirth}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      type="text"
                      className="form-control"
                      name="guardian2AddressPhone"
                      placeholder="Full Address and Phone Number (Cell or Landline)"
                      value={formData.guardian2AddressPhone}
                      onChange={handleChange}
                    ></textarea>
                    <label>
                      Full Address and Phone Number (Cell or Landline)
                    </label>
                  </div>

                  <div className="wizard-form-input position-relative form-group">
                    <label className="form-label">
                      Alumnus of Saint Finbarr's College?
                    </label>
                    <ul className="d-inline-flex">
                      <li className="pr-5">
                        <label>
                          <input
                            type="radio"
                            className="identity-check"
                            defaultChecked
                            name="guardianIsAlumnus"
                            value="Yes"
                            onChange={handleChange}
                          />
                          <span className="identity-label">Yes</span>
                          <span className="checkmark-border"></span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            className="identity-check"
                            name="guardianIsAlumnus"
                            value="No"
                            onChange={handleChange}
                          />
                          <span className="identity-label">No</span>
                          <span className="checkmark-border"></span>
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="email"
                      className="form-control"
                      name="guardianEmail"
                      placeholder="Email"
                      value={formData.guardian2Email}
                      onChange={handleChange}
                    />
                    <label>Email</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      className="form-control"
                      name="guardianAttendanceDate"
                      placeholder="If yes, Provide Dates of Attendance to Saint's Finbarr's College"
                      value={formData.guardianAttendanceDate}
                      onChange={handleChange}
                    />
                    <label>
                      If yes, Provide Dates of Attendance to Saint's Finbarr's
                      College
                    </label>
                  </div>

                  {/* Signature */}
                  <div className="upload-araa">
                    <div className="upload-text float-left">
                      <span>Signature</span>
                    </div>
                    <div className="upload-option text-center float-right">
                      <label htmlFor="files">Upload Signature</label>
                      <input
                        id="files"
                        type="file"
                        className="d-none"
                        name="guardian2Signature"
                        accept="image/jpg,image/png,image/jpeg"
                        // value={formData.guardian2Signature}
                        onChange={handlePhotoChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wizard-footer">
            <div className="actions">
              <ul>
                <li>
                  <span className="js-btn-prev" title="BACK">
                    <i className="fa fa-arrow-left"></i> BACK
                  </span>
                </li>
                <li>
                  <span className="js-btn-next" title="NEXT">
                    NEXT <i className="fa fa-arrow-right"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StepTwo;

import React from "react";

class StepTwo extends React.Component {
  render() {
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
                          name="guardian_m_type"
                          value="parent"
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
                          name="guardian_m_type"
                          value="guardian"
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
                      name="guardian_name_m"
                      placeholder="Mother's First, Middle and Surname"
                    />
                    <label>Mother's First, Middle and Surname</label>
                  </div>
                  <div className="wizard-form-input position-relative form-group">
                    <input
                      type="date"
                      className="form-control"
                      name="guardian_m_dob"
                    />
                    {/* <label>Full Address</label> */}
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="guardian_m_occupation"
                      placeholder="Mother's Occupation"
                    />
                    <label>Mother's Occupation</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      type="text"
                      className="form-control"
                      name="guardian_m_address"
                      placeholder="Full Address and Phone Number (Cell or Landline)"
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
                      <label for="files">Upload Signature</label>
                      <input
                        id="files"
                        type="file"
                        className="d-none"
                        name="guardian_m_signature"
                        accept="image/jpg,image/png,image/jpeg"
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
                          name="guardian_f_type"
                          value="parent"
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
                          name="guardian_f_type"
                          value="guardian"
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
                      name="guardian_f_name"
                      placeholder="Father's First, Middle and Surname"
                    />
                    <label>Father's First, Middle and Surname</label>
                  </div>
                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="guardian_f_occupation"
                      placeholder="Father's Occupation"
                    />
                    <label>Father's Occupation</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group">
                    <label className="form-label">Father's Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      name="guardian_m_dob"
                    />
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      type="text"
                      className="form-control"
                      name="guardian_f_address"
                      placeholder="Full Address and Phone Number (Cell or Landline)"
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
                            name="guardian_alumnus"
                            value="Yes"
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
                            name="guardian_alumnus"
                            value="No"
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
                      name="guardian_f_email"
                      placeholder="Email"
                    />
                    <label>Email</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      className="form-control"
                      name="alumnus_yes"
                      placeholder="If yes, Provide Dates of Attendance to Saint's Finbarr's College"
                    />
                    <label>If yes, Provide Dates of Attendance to Saint's Finbarr's College</label>
                  </div>

                  {/* Signature */}
                  <div className="upload-araa">
                    <div className="upload-text float-left">
                      <span>Signature</span>
                    </div>
                    <div className="upload-option text-center float-right">
                      <label for="files">Upload Signature</label>
                      <input
                        id="files"
                        type="file"
                        className="d-none"
                        name="guardian_m_signature"
                        accept="image/jpg,image/png,image/jpeg"
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

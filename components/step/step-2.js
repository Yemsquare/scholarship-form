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
                <p>
                  References can be submitted by those very familiar with the
                  applicant's academic performance, extra-curricular activities,
                  and moral standing
                </p>
              </div>

              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="taxable-area">
                    <div className="row">
                      <div className="col-md-4">
                        <label>
                          <input
                            type="checkbox"
                            className="tax-check"
                            defaultChecked
                            value="Taxable in the US?"
                          />
                          <span className="checkbo-box-border"></span>
                          <span className="texable-option">Parent</span>
                        </label>
                      </div>

                      <div className="col-md-4">
                        <label>
                          <input
                            type="checkbox"
                            className="tax-check"
                            value="Taxable in the US?"
                          />
                          <span className="checkbo-box-border"></span>
                          <span className="texable-option">Guardian</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_name_1"
                      placeholder="Name of Referee"
                    />
                    <label>Name of Referee</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_relationship_1"
                      placeholder="Relationship to Applicant"
                    />
                    <label>Relationship to Applicant</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_occupation_1"
                      placeholder="Occupation"
                    />
                    <label>Occupation</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_address_1"
                      placeholder="Full Address"
                    />
                    <label>Full Address</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_phone"
                      placeholder="Phone Number"
                    />
                    <label>Phone Number</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_email"
                      placeholder="Email"
                    />
                    <label>Email</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      name="reference_letter_1"
                      className="form-control"
                      placeholder="Letter of Reference"
                    ></textarea>
                    <label>Letter of Reference</label>
                  </div>

                  <div className="wizard-identity-box identity-upload text-center mb-3">
                    <div className="upload-icon">
                      <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div className="upload-option text-center">
                      <label htmlFor="file-images">Reference Signature</label>
                      <input
                        name="referee_signature_1"
                        id="file-images"
                        style={{ display: "none" }}
                        type="file"
                        className="file-name"
                        data-file-name="referee_signature_1"
                      />
                      <span>
                        .jpg or .pdf should be more than 500KB or 300PI
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className="mb-3"
                    style={{ fontSize: "12px", fontWeight: "500" }}
                  >
                    Reference 2: (School club supervisor, religious leader,
                    coach, mentor)
                  </div>
                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_name_2"
                      placeholder="Name of Referee"
                    />
                    <label>Name of Referee</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_relationship_2"
                      placeholder="Relationship to Applicant"
                    />
                    <label>Relationship to Applicant</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_occupation_2"
                      placeholder="Occupation"
                    />
                    <label>Occupation</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_address_2"
                      placeholder="Full Address"
                    />
                    <label>Full Address</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_phone_2"
                      placeholder="Phone Number"
                    />
                    <label>Phone Number</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee_email_2"
                      placeholder="Email"
                    />
                    <label>Email</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      name="reference_letter_2"
                      className="form-control"
                      placeholder="Letter of Reference"
                    ></textarea>
                    <label>Letter of Reference</label>
                  </div>

                  <div className="wizard-identity-box identity-upload text-center mb-3">
                    <div className="upload-icon">
                      <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div className="upload-option text-center">
                      <label htmlFor="file-images">Reference Signature</label>
                      <input
                        name="referee_signature_2"
                        id="file-images"
                        style={{ display: "none" }}
                        type="file"
                        data-file-name="referee_signature_2"
                      />
                      <span>
                        .jpg or .pdf should be more than 500KB or 300PI
                      </span>
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

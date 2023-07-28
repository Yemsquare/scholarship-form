import React from "react";

class StepFour extends React.Component {
  render() {
    return (
      <div className="multisteps-form__panel" data-animation="slideVert">
        <div className="inner pb-50">
          <div className="wizard-content-form">
            <div className="wizard-form-field">
              <div className="my-5 text-left px-0 mx-0">
                <h2 className="wizard-title mb-2">References</h2>
                <p>
                  References can be submitted by those very familiar with the
                  applicant's academic performance, extra-curricular activities,
                  and moral standing
                </p>
              </div>

              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="mb-3" style={{ fontSize: "14px" }}>
                    Reference 1: (School principal/headmaster, teacher)
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
                        name="referee_signature_1"
                        accept="image/jpg,image/png,image/jpeg"
                      />
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
                        name="referee_signature_2"
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

export default StepFour;

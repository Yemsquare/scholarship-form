import React from "react";

class StepFour extends React.Component {
  render() {
    const { formData, handleChange, handlePhotoChange } = this.props;

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
                      name="referee1Name"
                      placeholder="Name of Referee"
                      value={formData.reference1Name}
                      onChange={handleChange}
                    />
                    <label>Name of Referee</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee1Relationship"
                      placeholder="Relationship to Applicant"
                      value={formData.reference1Name}
                      onChange={handleChange}
                    />
                    <label>Relationship to Applicant</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="reference1Occupation"
                      placeholder="Occupation"
                      value={formData.reference1Occupation}
                      onChange={handleChange}
                    />
                    <label>Occupation</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="reference1Address"
                      placeholder="Full Address"
                      value={formData.reference1Address}
                      onChange={handleChange}
                    />
                    <label>Full Address</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="reference1Phone"
                      placeholder="Phone Number"
                      value={formData.reference1Phone}
                      onChange={handleChange}
                    />
                    <label>Phone Number</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="reference1Email"
                      placeholder="Email"
                      value={formData.reference1Email}
                      onChange={handleChange}
                    />
                    <label>Email</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      name="reference1Letter"
                      className="form-control"
                      placeholder="Letter of Reference"
                      value={formData.reference1Letter}
                      onChange={handleChange}
                    ></textarea>
                    <label>Letter of Reference</label>
                  </div>

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
                        name="reference1Signature"
                        accept="image/jpg,image/png,image/jpeg"
                        onChange={handlePhotoChange}
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
                      name="reference2Name"
                      placeholder="Name of Referee"
                      value={formData.reference2Name}
                      onChange={handleChange}
                    />
                    <label>Name of Referee</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="reference2Rletionship"
                      placeholder="Relationship to Applicant"
                      value={formData.reference2Relationship}
                      onChange={handleChange}
                    />
                    <label>Relationship to Applicant</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee2Occupation"
                      placeholder="Occupation"
                      value={formData.reference2Occupation}
                      onChange={handleChange}
                    />
                    <label>Occupation</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="referee2Address"
                      placeholder="Full Address"
                      value={formData.reference2Address}
                      onChange={handleChange}
                    />
                    <label>Full Address</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="reference2PhoneNumber"
                      placeholder="Phone Number"
                      value={formData.reference2PhoneNumber}
                      onChange={handleChange}
                    />
                    <label>Phone Number</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="reference2Email"
                      placeholder="Email"
                      value={formData.reference2Email}
                      onChange={handleChange}
                    />
                    <label>Email</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      name="reference2Letter"
                      className="form-control"
                      placeholder="Letter of Reference"
                      value={formData.reference2Letter}
                      onChange={handleChange}
                    ></textarea>
                    <label>Letter of Reference</label>
                  </div>

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
                        name="reference2Signature"
                        accept="image/jpg,image/png,image/jpeg"
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

export default StepFour;

import React from "react";

class StepOne extends React.Component {
  render() {
    return (
      <div
        className="multisteps-form__panel js-active"
        data-animation="slideVert"
      >
        <div className="inner pb-50">
          <div className="mb-5 text-left">
            <h2 className="wizard-title pl-100">Applicant Data</h2>
          </div>
          <div className="wizard-content-form">
            <div className="wizard-form-field">
              <div className="row">
                <div className="col-md-8 ">
                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      name="applicant_name"
                      className="form-control"
                      placeholder="Applicant First, Middle and Last Name"
                    />
                    <label>Applicant First, Middle and Last Name</label>
                  </div>
                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="email"
                      className="form-control"
                      name="applicant_email"
                      placeholder="Applicant Email Address"
                    />
                    <label>Applicant Email Address</label>
                  </div>
                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="applicant_year_class"
                      placeholder="Applicant Academic Year and Class"
                    />
                    <label>Applicant Academic Year and Class</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      className="form-control"
                      name="admission_no"
                      placeholder="Applicant Admission Number"
                    />
                    <label>Applicant Admission Number</label>
                  </div>

                  <div className="row align-items-center w-100">
                    <div className="col-md-6">
                      <div className="wizard-form-input position-relative form-group">
                        <label className="form-label">
                          Applicant's Date of Birth
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          name="applicant_dob"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="wizard-form-input position-relative form-group">
                        <label className="form-label">Application Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="application_date"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* sidebar */}
                <div className="col-md-4 order-md-1">
                  <div className="wizard-identity-box identity-upload text-center mb-3">
                    <div className="upload-icon">
                      <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div className="upload-option text-center">
                      <label htmlFor="file-images">
                        Applicant Passport Here
                      </label>
                      <input
                        name="applicant_photo"
                        id="file-images"
                        className="d-none"
                        type="file"
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

export default StepOne;

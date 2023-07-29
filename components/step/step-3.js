import React from "react";

class StepThree extends React.Component {
  render() {
    const { formData, handleChange, handlePhotoChange } = this.props;

    return (
      <div className="multisteps-form__panel" data-animation="slideVert">
        <div className="inner pb-100">
          <div className="wizard-content-form">
            <div className="wizard-form-field">
              <div className="row justify-content-start">
                <div className="col-md-8">
                  {/* Financial need */}

                  <div className="my-5 text-left">
                    <h2 className="wizard-title pl-0 ml-0 mb-3">
                      Financial Need Summary
                    </h2>
                    <p>
                      Complete this section regarding Estimated Combined Net
                      Income of your parent(s) or guardian(s)for the current
                      year
                    </p>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <input
                      type="text"
                      name="guardianIncome"
                      className="form-control"
                      placeholder="Income of Parent/Guardian"
                      value={formData.guardianIncome}
                      onChange={handleChange}
                    />
                    <label>Income of Parent/Guardian</label>
                  </div>

                  {/* statement need */}
                  <div className="my-5 text-left">
                    <h2 className="wizard-title pl-0 ml-0 mb-3">
                      Applicant's statement Of Need
                    </h2>
                    <p>
                      Explain in your own words, why you're applying for this
                      scholarship (300 - 600 word limit)
                    </p>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      type="text"
                      name="applicantNeedStatement"
                      className="form-control"
                      placeholder="Write here"
                      value={formData.applicantNeedStatement}
                      onChange={handleChange}
                    ></textarea>
                    <label>Write here</label>
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
                        name="needSignature"
                        accept="image/jpg,image/png,image/jpeg"
                        // value={formData.needSignature}
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

export default StepThree;

import React from "react";

class StepFive extends React.Component {
  render() {
    const { formData, handleChange, handlePhotoChange } = this.props;

    return (
      <div className="multisteps-form__panel" data-animation="slideVert">
        <div className="inner pb-100">
          <div className="wizard-content-form">
            <div className="wizard-form-field">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="my-5 text-left">
                    <h2 className="wizard-title mb-2">
                      Miscellaneous Information
                    </h2>
                    <p>
                      Applicant's other accomplishments such as academic and
                      sports prizes, awards, letter of commendation for
                      community services, etc.
                    </p>
                  </div>
                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      name="academicAward"
                      className="form-control"
                      placeholder="Academic Award"
                      value={formData.academyAward}
                      onChange={handleChange}
                    ></textarea>
                    <label>Academic Award</label>
                  </div>
                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      name="prizeExtra"
                      className="form-control"
                      placeholder="Prices for Extracurricular Activities"
                      value={formData.prizeExtra}
                      onChange={handleChange}
                    ></textarea>
                    <label>Prices for Extracurricular Activities</label>
                  </div>

                  <div className="wizard-form-input position-relative form-group has-float-label">
                    <textarea
                      name="commendation"
                      className="form-control"
                      placeholder="Commendations/Community Service/Leadership Positions"
                      value={formData.commendation}
                      onChange={handleChange}
                    ></textarea>
                    <label>
                      Commendations/Community Service/Leadership Positions
                    </label>
                  </div>

                  <div className="my-5 text-left">
                    <h2 className="wizard-title mb-2">Transcript History</h2>
                    <p>
                      Please attach your academic transcripts or school
                      examination report signed by your school's
                      principal/headmaster/headmistress
                    </p>
                  </div>

                  <div className="wizard-identity-box identity-upload text-center mb-3">
                    <div className="upload-icon">
                      <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div className="upload-option text-center">
                      <label htmlFor="file-images">School Transcript</label>
                      <input
                        name="transcriptHistory"
                        id="file-images"
                        type="file"
                        className="d-none file-image"
                        data-file-name="transcript"
                        onChange={handlePhotoChange}
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
                  <button type="submit" id="submit-form" title="NEXT">
                    SUMBIT <i className="fa fa-arrow-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StepFive;

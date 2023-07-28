import React from "react";

class StepThree extends React.Component {
  render() {
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
                      name="financial_need"
                      className="form-control"
                      placeholder="Income of Parent/Guardian"
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
                      name="statement_of_need"
                      className="form-control"
                      placeholder="Write here"
                    ></textarea>
                    <label>Write here</label>
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

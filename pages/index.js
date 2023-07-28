import Step1 from "../components/step/step-1";
import Step2 from "../components/step/step-2";
import Step3 from "../components/step/step-3";
import Step4 from "../components/step/step-4";
import Step5 from "../components/step/step-5";

export default function V2() {
  return (
    <div>
      {/* <div className="container"> */}
      <div className="wrapper clearfix">
        {/* for rtl */}
        {/* <div className="wrapper clearfix" dir='rtl'> */}

        <div className="wizard-part-title">
          <h3>Saint Finbarr's College Scholarship</h3>
        </div>
        <div className="multisteps-form">
          {/* <div className="container"> */}

          <div className="row">
            <div className="col-12 col-lg-12 mx-auto">
              <div className="multisteps-form__progress">
                <button className="multisteps-form__progress-btn js-active">
                  Applicant Data
                </button>
                <button className="multisteps-form__progress-btn">
                  Parent/Guardian's
                </button>
                <button className="multisteps-form__progress-btn">
                  Financial Need
                </button>
                <button className="multisteps-form__progress-btn">
                  References
                </button>
                <button className="multisteps-form__progress-btn">
                  Miscellaneous
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="row">
          <div className="col-12 col-lg-12 m-auto">
            <form
              className="multisteps-form__form clearfix"
              action="#"
              method="post"
              id="wizard"
            >
              <Step1 />
              <Step2 />
              <Step3 />
              <Step4 />
              <Step5 />
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

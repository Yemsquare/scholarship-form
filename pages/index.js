import { useState } from "react";
import Step1 from "../components/step/step-1";
import Step2 from "../components/step/step-2";
import Step3 from "../components/step/step-3";
import Step4 from "../components/step/step-4";
import Step5 from "../components/step/step-5";

export default function V2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    yearClass: "",
    admissionNo: "",
    applicationDate: "",
    applicantPhoto: null,
    guardian1Type: "",
    guardian1Name: "",
    guardian1DateOfBirth: "",
    guardian1Occupation: "",
    guardian1AddressPhone: "",
    guardian1Signature: null,
    guardian2Type: "",
    guardian2Name: "",
    guardian2DateOfBirth: "",
    guardian2Occupation: "",
    guardian2AddressPhone: "",
    guardianEmail: "",
    guardianIsAlumnus: "",
    guardianAttendanceDate: "",
    guardian2Signature: null,
    guardianIncome: "",
    applicantNeedStatement: "",
    needSignature: null,
    reference1Name: "",
    reference1Relationship: "",
    reference1Occupation: "",
    reference1Address: "",
    reference1PhoneNumber: "",
    reference1Email: "",
    reference1Letter: "",
    reference1Signature: null,
    reference2Name: "",
    reference2Relationship: "",
    reference2Occupation: "",
    reference2Address: "",
    reference2PhoneNumber: "",
    reference2Email: "",
    reference2Letter: "",
    reference2Signature: null,
    academicAwards: "",
    prizeExtra: "",
    commendation: "",
    transcriptHistory: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        formDataToSend.append(key, formData[key]);
      }
    }

    console.log(formData);

    return;

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json, multipart/data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataToSend),
    });

    console.log(await response.json());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (event) => {
    const { name, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

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
              onSubmit={handleSubmit}
            >
              <Step1
                formData={formData}
                handleChange={handleChange}
                handlePhotoChange={handlePhotoChange}
              />
              <Step2
                formData={formData}
                handleChange={handleChange}
                handlePhotoChange={handlePhotoChange}
              />
              <Step3
                formData={formData}
                handleChange={handleChange}
                handlePhotoChange={handlePhotoChange}
              />
              <Step4
                formData={formData}
                handleChange={handleChange}
                handlePhotoChange={handlePhotoChange}
              />
              <Step5
                formData={formData}
                handleChange={handleChange}
                handlePhotoChange={handlePhotoChange}
              />
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

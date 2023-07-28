import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis'

type SheetForm = {


      "applicant_name": string,
      "applicant_email": string,
      "applicant_year_class": string,
      "admission_number": string,
      "applicant_dob": string,
      "application_date": Object,
      "parent_guardian": Object,
      "financialSummary": Object,
      "references": Object,

      miscellaneousInformation: Object,


}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

      if (req.method !== "POST") {
            return res.status(405).send({ message: "Only Post request are allowed" })
      }


      const body = req.body as SheetForm

      try {

            // prepare auth credentials
            const auth = new google.auth.GoogleAuth({
                  credentials: {
                        client_email: process.env.GOOGLE_CLIENT_EMAIL,
                        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
                  },

                  scopes: [
                        "https://www.googleapis.com/auth/drive",
                        "https://www.googleapis.com/auth/drive.file",
                        "https://www.googleapis.com/auth/spreadsheets",
                  ]
            });

            const sheet = google.sheets({
                  auth,
                  version: 'v4'
            })


            const response = await sheet.spreadsheets.values.append({
                  spreadsheetId: process.env.GOOGLE_SHEET_ID,
                  range: "A1:K1",
                  valueInputOption: 'USER_ENTERED',
                  requestBody: {
                        values: [
                              [
                                    body.applicant_name, body.applicant_email,
                                    body.applicant_year_class, body.admission_number,
                                    body.application_date, body.parent_guardian, body.financialSummary, body.references, body.miscellaneousInformation
                              ]
                        ]
                  }
            })

            return res.status(200).json({
                  data: response.data,
                  message: 'Form submitted successfully'
            })

      } catch (error) {
            return res.status(500).send({ message: error.message ?? 'Something went wrong' })

      }

}
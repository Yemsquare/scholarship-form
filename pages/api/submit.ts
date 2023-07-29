import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis'

type SheetForm = {

      name: String,
      email: String,
      dateOfBirth: String,
      yearClass: String,
      admissionNo: String,
      applicationDate: String,
      applicantPhoto: string,
      guardian1Type: String,
      guardian1Name: String,
      guardian1DateOfBirth: String,
      guardian1Occupation: String,
      guardian1AddressPhone: String,
      guardian1Signature: string,
      guardian2Type: String,
      guardian2Name: String,
      guardian2DateOfBirth: String,
      guardian2Occupation: String,
      guardian2AddressPhone: String,
      guardianEmail: String,
      guardianIsAlumnus: String,
      guardianAttendanceDate: String,
      guardian2Signature: string,
      guardianIncome: String,
      applicantNeedStatement: String,
      needSignature: string,
      reference1Name: String,
      reference1Relationship: String,
      reference1Occupation: String,
      reference1Address: String,
      reference1PhoneNumber: String,
      reference1PhoneEmail: String,
      reference1Letter: String,
      reference1Signature: String,
      reference2Name: String,
      reference2Relationship: String,
      reference2Occupation: String,
      reference2Address: String,
      reference2PhoneNumber: String,
      reference2PhoneEmail: String,
      reference2Letter: String,
      reference2Signature: string,
      academicAwards: String,
      prizeExtra: String,
      commendation: String,
      transcriptHistory: string,
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

            const values = Object.entries(body)

            const response = await sheet.spreadsheets.values.append({
                  spreadsheetId: process.env.GOOGLE_SHEET_ID,
                  range: "A1:K1",
                  valueInputOption: 'USER_ENTERED',
                  requestBody: {
                        values: [
                              [
                                   ...values
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
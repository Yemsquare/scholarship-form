import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

type SheetForm = {

      name: string,
      email: string,
      dateOfBirth: string,
      yearClass: string,
      admissionNo: string,
      applicationDate: string,
      applicantPhoto: string,
      guardian1Type: string,
      guardian1Name: string,
      guardian1DateOfBirth: string,
      guardian1Occupation: string,
      guardian1AddressPhone: string,
      guardian1Signature: Object,
      guardian2Type: string,
      guardian2Name: string,
      guardian2DateOfBirth: string,
      guardian2Occupation: string,
      guardian2AddressPhone: string,
      guardianEmail: string,
      guardianIsAlumnus: string,
      guardianAttendanceDate: string,
      guardian2Signature: Object,
      guardianIncome: string,
      applicantNeedStatement: string,
      needSignature: Object,
      reference1Name: string,
      reference1Relationship: string,
      reference1Occupation: string,
      reference1Address: string,
      reference1PhoneNumber: string,
      reference1PhoneEmail: string,
      reference1Letter: string,
      reference1Signature: Object,
      reference2Name: string,
      reference2Relationship: string,
      reference2Occupation: string,
      reference2Address: string,
      reference2PhoneNumber: string,
      reference2PhoneEmail: string,
      reference2Letter: string,
      reference2Signature: Object,
      academicAwards: string,
      prizeExtra: string,
      commendation: string,
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
                        client_id: process.env.GOOGLE_CLIENT_ID,
                        client_email: process.env.GOOGLE_CLIENT_EMAIL,
                        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
                  },

                  scopes: [
                        'https://www.googleapis.com/auth/drive',
                        'https://www.googleapis.com/auth/drive.file',
                        'https://www.googleapis.com/auth/spreadsheets'
                  ]
            });

            const sheet = google.sheets({
                  auth,
                  version: 'v4'
            })

            const values = [
                  Object.values(body)
            ]

            // Check for empty or undefined values
            // if (values.flat().some((value) => value === undefined || value === null)) {
            //       return res.status(400).json({ message: "Form data contains empty or undefined values" });
            // }

            // Convert numbers to strings
            const stringValues = values.map(row => row.map(value => String(value)));


            const response = await sheet.spreadsheets.values.append({
                  spreadsheetId: process.env.GOOGLE_SHEET_ID,
                  range: "Sheet1!A2:A",
                  valueInputOption: 'USER_ENTERED',
                  requestBody: {
                        values: stringValues
                  }
            })

            return res.status(200).json({
                  data: response.data,
                  message: 'Form submitted successfully',
                  values: Object.values(req.body)
            })

            // //send smtp 
            // const nodemailer = require('nodemailer');
            // //create transporter object using your email
            // const transporter = nodemailer.createTransport({
            //       service: 'mail.google.com',
            //       auth:{
            //             user: 'webtest@sfcobanorthamerica.org',
            //             pass: 'Miracle@6',
            //       },
            // });

            // //to send the email
            // const sendEmail = async (formData) => {
            //       try {
            //             //compose the email message
            //             const message = {
            //                   from: 'webtest@sfcobanorthamerica.org',
            //                   to: ['schorlarship@sfcobanorthamerica.org',formData.email],
            //                   subject: 'SFCO Application Form',
            //                   Text: `A new form has been submittted with the following data:\n\n${JSON.stringify(formData, null, 2)}`,
            //             };
            //       }
            // }

      } catch (error) {
            return res.status(500).send({ message: error.message ?? 'Something went wrong' })

      }

}
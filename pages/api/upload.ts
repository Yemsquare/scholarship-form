
// import multer from "multer";

// const ALLOWED_FORMATS = ["image/jpeg", "image/png", "image/jpg"];

// const maxSize = 10 * 1024 * 1024; // 10MB

// const storage = multer.diskStorage({
//   destination: (_req, _file, callback) => {
//     // @ts-ignore
//     callback(null, __dirname + "/_temp");
//   },
//   filename: (_req, file, callback) => {
//     callback(null, file.originalname);
//   },
// });
// const upload = multer({
//   storage,
//   limits: { fileSize: maxSize },
//   fileFilter: function (
//     _req: Request,
//     file,
//     cb: (arg0: any, arg1: any) => void
//   ) {
//     if (ALLOWED_FORMATS.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error("Not supported file type!"), false);
//     }
//   },
// });

// export const singleUploadCtrl = (fieldname: string) => {
//   const singleUpload = upload.single(fieldname);
//   return (req: Request, res: Response, next: any) => {
//     singleUpload(req, res, (error) => {
//       if (error) {
//         return 'error';
//         // return res.status(200).json({ message: 'Files uploaded successfully.', fileLinks });
//       }

//       next();
//     });
//   };
// };


// import { google } from 'googleapis';
// import formidable from 'formidable';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const form = new formidable.IncomingForm();
//       form.parse(req, async (err, fields, files) => {
//         if (err) {
//           res.status(500).json({ error: 'Error parsing form data.' });
//           return;
//         }

//         // Authenticate with Google API using your credentials
//         const auth = new google.auth.GoogleAuth({
//           keyFile: 'key/sfcobana-91b709ad1e42.json',
//           scopes: ['https://www.googleapis.com/auth/drive'],
//         });
//         const drive = google.drive({ version: 'v3', auth });

//         const fileLinks = [];

//         // Loop through each file and upload it to Google Drive
//         for (const fileKey in files) {
//           const file = files[fileKey];
//           const resDrive = await drive.files.create({
//             requestBody: {
//               name: file.name,
//               mimeType: file.type,
//             },
//             media: {
//               mimeType: file.type,
//               body: file.path,
//             },
//           });

//           // Get the web link of the uploaded file
//           const fileLink = resDrive.data.webViewLink;
//           fileLinks.push({ name: file.name, link: fileLink });
//         }

//         res.status(200).json({ message: 'Files uploaded successfully.', fileLinks });
//       });
//     } catch (error) {
//       console.error('Error uploading files:', error);
//       res.status(500).json({ error: 'Error uploading files.' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed.' });
//   }
// }
import { google } from "googleapis";
import multer from "multer";
import fs from "fs";

const upload = multer({ dest: "uploads/" }); 

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      upload.single("applicantPhoto")(req, res, async (err) => {
        if (err) {
          res.status(500).json({ error: "Error uploading files." });
          return;
        }

        // Authenticate with Google API using your credentials
        const auth = new google.auth.GoogleAuth({
          keyFile: "key/sfcobana-91b709ad1e42.json",
          scopes: ["https://www.googleapis.com/auth/drive"],
        });
        const drive = google.drive({ version: "v3", auth });

        const fileLinks = [];

        console.log("body",req.body);
        console.log(req.file);
        console.log("files ",req.files);

        // Loop through each file and upload it to Google Drive
        // for (const file of req.files) {
        //   try {
        //     const resDrive = await drive.files.create({
        //       requestBody: {
        //         name: file.originalname,
        //         mimeType: file.mimetype,
        //       },
        //       media: {
        //         mimeType: file.mimetype,
        //         body: fs.createReadStream(file.path),
        //       },
        //     });

        //     // Get the web link of the uploaded file
        //     const fileLink = resDrive.data.webViewLink;
        //     fileLinks.push({ name: file.originalname, link: fileLink });
        //   } catch (error) {
        //     console.error("Error uploading file:", file.originalname);
        //     console.error(error);
        //   } finally {
        //     // Delete the temporary file after uploading to Google Drive
        //     fs.unlinkSync(file.path);
        //   }
        // }

        res
          .status(200)
          .json({ message: "Files uploaded successfully.", fileLinks });
      });
    } catch (error) {
      console.error("Error uploading files:", error);
      res.status(500).json({ error: "Error uploading files." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
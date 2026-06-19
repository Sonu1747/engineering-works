import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import multer from 'multer';
import dotenv from 'dotenv';
import dns from 'dns';

dotenv.config();
dns.setDefaultResultOrder('ipv4first');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for development
app.use(cors());
app.use(express.json());

// Set up memory storage for uploaded documents so we don't save files locally
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 15 * 1024 * 1024 } // 15MB limit
});

/// Nodemailer SMTP setup using Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify SMTP transport connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to take our messages');
  }
});

// Endpoint to process contract inquiries
app.post('/api/inquiry', upload.single('projectDocs'), async (req, res) => {
  try {
    const {
      companyName,
      contactName,
      mobile,
      email,
      projectType,
      location,
      description,
      requiredManpower,
      startDate
    } = req.body;

    // Server-side validation
    if (!contactName || !mobile || !email || !location || !description || !requiredManpower || !startDate) {
      return res.status(400).json({ success: false, error: 'Required fields are missing.' });
    }

    const subject = `[New Inquiry] ${projectType} - ${companyName || 'Individual'} (${contactName})`;

    // Beautiful Industrial Structured HTML Mail Body
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            margin: 0;
            padding: 30px 10px;
          }
          .container {
            max-width: 600px;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
            border: 1px solid #e2e8f0;
            margin: 0 auto;
          }
          .header {
            background-color: #0b132b;
            padding: 30px;
            text-align: center;
            border-bottom: 4px solid #ea580c;
          }
          .logo-text {
            font-size: 26px;
            font-weight: 800;
            color: #ffffff;
            letter-spacing: 2px;
            margin: 0;
          }
          .logo-text span {
            color: #ea580c;
          }
          .sublogo-text {
            font-size: 11px;
            color: #94a3b8;
            letter-spacing: 1px;
            margin-top: 6px;
            text-transform: uppercase;
          }
          .content {
            padding: 35px 30px;
          }
          .title {
            font-size: 18px;
            font-weight: 700;
            color: #0b132b;
            text-transform: uppercase;
            border-bottom: 2px solid #f1f5f9;
            padding-bottom: 12px;
            margin-bottom: 25px;
            letter-spacing: 0.5px;
          }
          .grid {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 25px;
          }
          .grid td {
            padding: 12px 10px;
            border-bottom: 1px solid #f1f5f9;
            font-size: 14px;
          }
          .label {
            font-weight: bold;
            color: #64748b;
            width: 40%;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.5px;
          }
          .value {
            color: #1e293b;
            font-weight: 600;
          }
          .desc-label {
            font-weight: bold;
            color: #64748b;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            margin-top: 20px;
          }
          .desc-box {
            background-color: #f8fafc;
            border-left: 4px solid #ea580c;
            padding: 16px;
            border-radius: 4px;
            font-size: 14px;
            line-height: 1.6;
            color: #334155;
            margin-top: 8px;
          }
          .footer {
            background-color: #0b132b;
            color: #64748b;
            font-size: 11px;
            text-align: center;
            padding: 24px;
            border-top: 1px solid #1e293b;
          }
          .footer p {
            margin: 4px 0;
            color: #94a3b8;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo-text">PAL <span>ENGINEERING WORKS</span></div>
            <div class="sublogo-text">Outage &amp; Contract Inquiry System</div>
          </div>
          <div class="content">
            <div class="title">New Contract Proposal Details</div>
            
            <table class="grid">
              <tr>
                <td class="label">Company Name</td>
                <td class="value">${companyName || 'Not Provided (Individual)'}</td>
              </tr>
              <tr>
                <td class="label">Contact Person</td>
                <td class="value">${contactName}</td>
              </tr>
              <tr>
                <td class="label">Mobile Number</td>
                <td class="value" style="font-family: monospace;">${mobile}</td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value">${email}</td>
              </tr>
              <tr>
                <td class="label">Project Type</td>
                <td class="value" style="color: #ea580c;">${projectType}</td>
              </tr>
              <tr>
                <td class="label">Project Location</td>
                <td class="value">${location}</td>
              </tr>
              <tr>
                <td class="label">Required Manpower</td>
                <td class="value">${requiredManpower} Skilled Personnel</td>
              </tr>
              <tr>
                <td class="label">Expected Start Date</td>
                <td class="value">${startDate}</td>
              </tr>
              <tr>
                <td class="label">Has Document Attached?</td>
                <td class="value">${req.file ? 'Yes (Attached)' : 'No'}</td>
              </tr>
            </table>

            <div class="desc-label">Project Scope &amp; Description</div>
            <div class="desc-box">
              ${description.replace(/\n/g, '<br />')}
            </div>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Pal Plant Erection &amp; Maintenance Services. All rights reserved.</p>
            <p>Kolkata Headquarters, Salt Lake Sector V, West Bengal, India</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Package the mail details
    const mailOptions = {
      from: `"Pal Inquiry System" <${process.env.EMAIL_USER}>`,
      to: 'pal.engineering.works91@gmail.com',
      replyTo: email,
      subject: subject,
      html: htmlBody,
      attachments: req.file ? [
        {
          filename: req.file.originalname,
          content: req.file.buffer
        }
      ] : []
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Inquiry Email Sent Successfully for:', contactName);

    res.status(200).json({ success: true, message: 'Inquiry details mailed successfully' });

  } catch (error) {
    console.error('Mail Sending Failure:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error. Unable to send email.' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).send('Pal Engineering backend is active');
});

// Start listening
app.listen(PORT, () => {
  console.log(`Backend Express server running on port ${PORT}`);
});

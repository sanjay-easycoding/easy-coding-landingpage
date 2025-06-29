import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


console.log(process.env.GMAIL_USER);
console.log(process.env.GMAIL_PASS);

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let formData: FormData;
    let jsonData: any = {};

    // Handle both JSON and FormData
    if (contentType.includes('application/json')) {
      jsonData = await request.json();
      // Convert JSON data to FormData-like structure for consistency
      formData = new FormData();
      Object.keys(jsonData).forEach(key => {
        formData.append(key, jsonData[key]);
      });
    } else if (contentType.includes('multipart/form-data')) {
      formData = await request.formData();
    } else {
      return NextResponse.json(
        { error: 'Content-Type must be application/json or multipart/form-data' },
        { status: 400 }
      );
    }

    const type = formData.get('type') as string;

    // Create transporter with environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Transporter verified successfully');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration error. Please check your Gmail credentials.' },
        { status: 500 }
      );
    }

    let mailOptions: any = {
      from: `"Website Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: formData.get('email') as string, // Set reply-to as the sender's email
    };

    if (type === 'resume_submission') {
      // Handle resume submission
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const position = formData.get('position') as string;
      const experience = formData.get('experience') as string;
      const message = formData.get('message') as string;
      const resume = formData.get('resume') as File;

      // Validate required fields
      if (!name || !email || !resume) {
        return NextResponse.json(
          { error: 'Name, email, and resume are required' },
          { status: 400 }
        );
      }

      mailOptions.subject = `New Resume Submission from ${name}`;
      mailOptions.html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Resume Submission - easyCoding</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    margin: 0;
                    padding: 20px;
                    background-color: #f8fafc;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    border: 1px solid #e5e7eb;
                }
                .header {
                    background: linear-gradient(135deg, #0891b2 0%, #2563eb 100%);
                    color: white;
                    padding: 30px;
                    text-align: center;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: 600;
                    letter-spacing: -0.025em;
                }
                .header p {
                    margin: 8px 0 0 0;
                    opacity: 0.9;
                    font-size: 14px;
                }
                .content {
                    padding: 30px;
                    background-color: #ffffff;
                }
                .section {
                    margin-bottom: 30px;
                }
                .section-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #111827;
                    margin-bottom: 16px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid #e5e7eb;
                }
                .info-grid {
                    display: grid;
                    gap: 16px;
                }
                .info-item {
                    padding: 16px 20px;
                    background-color: #f9fafb;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                }
                .info-label {
                    font-weight: 600;
                    color: #6b7280;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 4px;
                }
                .info-value {
                    color: #111827;
                    font-size: 16px;
                    font-weight: 500;
                }
                .info-value a {
                    color: #0891b2;
                    text-decoration: none;
                    font-weight: 600;
                }
                .info-value a:hover {
                    text-decoration: underline;
                }
                .message-section {
                    background-color: #f9fafb;
                    padding: 20px;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                }
                .message-content {
                    white-space: pre-wrap;
                    line-height: 1.6;
                    color: #374151;
                    margin: 0;
                    font-size: 15px;
                }
                .resume-section {
                    background-color: #dcfce7;
                    padding: 20px;
                    border-radius: 8px;
                    border: 1px solid #16a34a;
                }
                .resume-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: #166534;
                    margin-bottom: 12px;
                }
                .resume-info {
                    color: #166534;
                    font-size: 14px;
                    margin: 4px 0;
                }
                .footer {
                    background-color: #f3f4f6;
                    padding: 24px 30px;
                    text-align: center;
                    border-top: 1px solid #e5e7eb;
                }
                .easycoding-brand {
                    font-size: 18px;
                    font-weight: 700;
                    color: #0891b2;
                    margin-bottom: 8px;
                }
                .footer-text {
                    color: #6b7280;
                    font-size: 14px;
                    margin: 0 0 16px 0;
                }
                .timestamp {
                    background-color: #fef3c7;
                    color: #92400e;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 12px;
                    font-weight: 500;
                    display: inline-block;
                    border: 1px solid #f59e0b;
                }
                .badge {
                    background-color: #dcfce7;
                    color: #166534;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 10px;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-left: 8px;
                }
                @media (max-width: 600px) {
                    body {
                        padding: 10px;
                    }
                    .container {
                        border-radius: 8px;
                    }
                    .header, .content, .footer {
                        padding: 20px;
                    }
                    .section-title {
                        font-size: 16px;
                    }
                    .info-item, .message-section, .resume-section {
                        padding: 14px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>📄 New Resume Submission</h1>
                    <p>You have received a new resume from easyCoding website</p>
                </div>
                
                <div class="content">
                    <div class="section">
                        <h2 class="section-title">Candidate Information</h2>
                        <div class="info-grid">
                            <div class="info-item">
                                <div class="info-label">Name</div>
                                <div class="info-value">${name}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">Email Address</div>
                                <div class="info-value">
                                    <a href="mailto:${email}">${email}</a>
                                </div>
                            </div>
                            ${phone ? `
                            <div class="info-item">
                                <div class="info-label">Phone</div>
                                <div class="info-value">${phone}</div>
                            </div>
                            ` : ''}
                            ${position ? `
                            <div class="info-item">
                                <div class="info-label">Position of Interest</div>
                                <div class="info-value">${position}</div>
                            </div>
                            ` : ''}
                            ${experience ? `
                            <div class="info-item">
                                <div class="info-label">Experience</div>
                                <div class="info-value">${experience}</div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    
                    ${message ? `
                    <div class="section">
                        <h2 class="section-title">Additional Message</h2>
                        <div class="message-section">
                            <div class="message-content">${message}</div>
                        </div>
                    </div>
                    ` : ''}
                    
                    <div class="section">
                        <h2 class="section-title">Resume File</h2>
                        <div class="resume-section">
                            <div class="resume-title">📎 Resume Details</div>
                            <div class="resume-info"><strong>Filename:</strong> ${resume.name}</div>
                            <div class="resume-info"><strong>Size:</strong> ${(resume.size / 1024 / 1024).toFixed(2)} MB</div>
                            <div class="resume-info"><strong>Type:</strong> ${resume.type}</div>
                        </div>
                    </div>
                </div>
                
                <div class="footer">
                    <div class="easycoding-brand">easyCoding</div>
                    <p class="footer-text">This resume was submitted through the easyCoding website career page</p>
                    <div class="timestamp">
                        📅 ${new Date().toLocaleString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            timeZoneName: 'short'
                        })}
                        <span class="badge">New</span>
                    </div>
                </div>
            </div>
        </body>
        </html>
      `;

      // Attach resume file
      if (resume) {
        const buffer = Buffer.from(await resume.arrayBuffer());
        mailOptions.attachments = [{
          filename: resume.name,
          content: buffer,
          contentType: resume.type
        }];
      }

    } else if (type === 'job_application') {
      // Handle job application
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const position = formData.get('position') as string;
      const experience = formData.get('experience') as string;
      const company = formData.get('company') as string;
      const salary = formData.get('salary') as string;
      const coverLetter = formData.get('coverLetter') as string;
      const portfolio = formData.get('portfolio') as string;
      const jobTitle = formData.get('jobTitle') as string;
      const resume = formData.get('resume') as File;

      // Validate required fields
      if (!name || !email || !position || !experience || !resume) {
        return NextResponse.json(
          { error: 'Name, email, position, experience, and resume are required' },
          { status: 400 }
        );
      }

      mailOptions.subject = `New Job Application: ${jobTitle || position} - ${name}`;
      mailOptions.html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Job Application - easyCoding</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    margin: 0;
                    padding: 20px;
                    background-color: #f8fafc;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    border: 1px solid #e5e7eb;
                }
                .header {
                    background: linear-gradient(135deg, #0891b2 0%, #2563eb 100%);
                    color: white;
                    padding: 30px;
                    text-align: center;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: 600;
                    letter-spacing: -0.025em;
                }
                .header p {
                    margin: 8px 0 0 0;
                    opacity: 0.9;
                    font-size: 14px;
                }
                .content {
                    padding: 30px;
                    background-color: #ffffff;
                }
                .section {
                    margin-bottom: 30px;
                }
                .section-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #111827;
                    margin-bottom: 16px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid #e5e7eb;
                }
                .info-grid {
                    display: grid;
                    gap: 16px;
                }
                .info-item {
                    padding: 16px 20px;
                    background-color: #f9fafb;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                }
                .info-label {
                    font-weight: 600;
                    color: #6b7280;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 4px;
                }
                .info-value {
                    color: #111827;
                    font-size: 16px;
                    font-weight: 500;
                }
                .info-value a {
                    color: #0891b2;
                    text-decoration: none;
                    font-weight: 600;
                }
                .info-value a:hover {
                    text-decoration: underline;
                }
                .message-section {
                    background-color: #f9fafb;
                    padding: 20px;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                }
                .message-content {
                    white-space: pre-wrap;
                    line-height: 1.6;
                    color: #374151;
                    margin: 0;
                    font-size: 15px;
                }
                .resume-section {
                    background-color: #dcfce7;
                    padding: 20px;
                    border-radius: 8px;
                    border: 1px solid #16a34a;
                }
                .resume-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: #166534;
                    margin-bottom: 12px;
                }
                .resume-info {
                    color: #166534;
                    font-size: 14px;
                    margin: 4px 0;
                }
                .footer {
                    background-color: #f3f4f6;
                    padding: 24px 30px;
                    text-align: center;
                    border-top: 1px solid #e5e7eb;
                }
                .easycoding-brand {
                    font-size: 18px;
                    font-weight: 700;
                    color: #0891b2;
                    margin-bottom: 8px;
                }
                .footer-text {
                    color: #6b7280;
                    font-size: 14px;
                    margin: 0 0 16px 0;
                }
                .timestamp {
                    background-color: #fef3c7;
                    color: #92400e;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 12px;
                    font-weight: 500;
                    display: inline-block;
                    border: 1px solid #f59e0b;
                }
                .badge {
                    background-color: #dcfce7;
                    color: #166534;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 10px;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-left: 8px;
                }
                @media (max-width: 600px) {
                    body {
                        padding: 10px;
                    }
                    .container {
                        border-radius: 8px;
                    }
                    .header, .content, .footer {
                        padding: 20px;
                    }
                    .section-title {
                        font-size: 16px;
                    }
                    .info-item, .message-section, .resume-section {
                        padding: 14px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>💼 New Job Application</h1>
                    <p>You have received a new job application from easyCoding website</p>
                </div>
                
                <div class="content">
                    <div class="section">
                        <h2 class="section-title">Applicant Information</h2>
                        <div class="info-grid">
                            <div class="info-item">
                                <div class="info-label">Name</div>
                                <div class="info-value">${name}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">Email Address</div>
                                <div class="info-value">
                                    <a href="mailto:${email}">${email}</a>
                                </div>
                            </div>
                            ${phone ? `
                            <div class="info-item">
                                <div class="info-label">Phone</div>
                                <div class="info-value">${phone}</div>
                            </div>
                            ` : ''}
                            <div class="info-item">
                                <div class="info-label">Position</div>
                                <div class="info-value">${position}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">Experience</div>
                                <div class="info-value">${experience}</div>
                            </div>
                            ${company ? `
                            <div class="info-item">
                                <div class="info-label">Current Company</div>
                                <div class="info-value">${company}</div>
                            </div>
                            ` : ''}
                            ${salary ? `
                            <div class="info-item">
                                <div class="info-label">Expected Salary</div>
                                <div class="info-value">$${salary}</div>
                            </div>
                            ` : ''}
                            ${portfolio ? `
                            <div class="info-item">
                                <div class="info-label">Portfolio</div>
                                <div class="info-value">
                                    <a href="${portfolio}" target="_blank">${portfolio}</a>
                                </div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    
                    ${coverLetter ? `
                    <div class="section">
                        <h2 class="section-title">Cover Letter</h2>
                        <div class="message-section">
                            <div class="message-content">${coverLetter}</div>
                        </div>
                    </div>
                    ` : ''}
                    
                    <div class="section">
                        <h2 class="section-title">Resume File</h2>
                        <div class="resume-section">
                            <div class="resume-title">📎 Resume Details</div>
                            <div class="resume-info"><strong>Filename:</strong> ${resume.name}</div>
                            <div class="resume-info"><strong>Size:</strong> ${(resume.size / 1024 / 1024).toFixed(2)} MB</div>
                            <div class="resume-info"><strong>Type:</strong> ${resume.type}</div>
                        </div>
                    </div>
                </div>
                
                <div class="footer">
                    <div class="easycoding-brand">easyCoding</div>
                    <p class="footer-text">This application was submitted through the easyCoding website career page</p>
                    <div class="timestamp">
                        📅 ${new Date().toLocaleString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            timeZoneName: 'short'
                        })}
                        <span class="badge">New</span>
                    </div>
                </div>
            </div>
        </body>
        </html>
      `;

      // Attach resume file
      if (resume) {
        const buffer = Buffer.from(await resume.arrayBuffer());
        mailOptions.attachments = [{
          filename: resume.name,
          content: buffer,
          contentType: resume.type
        }];
      }

    } else {
      // Handle regular contact form
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const company = formData.get('company') as string;
      const message = formData.get('message') as string;

      // Validate required fields
      if (!name || !email || !message) {
        return NextResponse.json(
          { error: 'Name, email, and message are required' },
          { status: 400 }
        );
      }

      mailOptions.subject = `New Contact Form Submission from ${name}`;
      mailOptions.html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission - easyCoding</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    margin: 0;
                    padding: 20px;
                    background-color: #f8fafc;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    border: 1px solid #e5e7eb;
                }
                .header {
                    background: linear-gradient(135deg, #0891b2 0%, #2563eb 100%);
                    color: white;
                    padding: 30px;
                    text-align: center;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: 600;
                    letter-spacing: -0.025em;
                }
                .header p {
                    margin: 8px 0 0 0;
                    opacity: 0.9;
                    font-size: 14px;
                }
                .content {
                    padding: 30px;
                    background-color: #ffffff;
                }
                .section {
                    margin-bottom: 30px;
                }
                .section-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #111827;
                    margin-bottom: 16px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid #e5e7eb;
                }
                .info-grid {
                    display: grid;
                    gap: 16px;
                }
                .info-item {
                    padding: 16px 20px;
                    background-color: #f9fafb;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                }
                .info-label {
                    font-weight: 600;
                    color: #6b7280;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 4px;
                }
                .info-value {
                    color: #111827;
                    font-size: 16px;
                    font-weight: 500;
                }
                .info-value a {
                    color: #0891b2;
                    text-decoration: none;
                    font-weight: 600;
                }
                .info-value a:hover {
                    text-decoration: underline;
                }
                .message-section {
                    background-color: #f9fafb;
                    padding: 20px;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                }
                .message-content {
                    white-space: pre-wrap;
                    line-height: 1.6;
                    color: #374151;
                    margin: 0;
                    font-size: 15px;
                }
                .footer {
                    background-color: #f3f4f6;
                    padding: 24px 30px;
                    text-align: center;
                    border-top: 1px solid #e5e7eb;
                }
                .easycoding-brand {
                    font-size: 18px;
                    font-weight: 700;
                    color: #0891b2;
                    margin-bottom: 8px;
                }
                .footer-text {
                    color: #6b7280;
                    font-size: 14px;
                    margin: 0 0 16px 0;
                }
                .timestamp {
                    background-color: #fef3c7;
                    color: #92400e;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 12px;
                    font-weight: 500;
                    display: inline-block;
                    border: 1px solid #f59e0b;
                }
                .badge {
                    background-color: #dcfce7;
                    color: #166534;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 10px;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-left: 8px;
                }
                @media (max-width: 600px) {
                    body {
                        padding: 10px;
                    }
                    .container {
                        border-radius: 8px;
                    }
                    .header, .content, .footer {
                        padding: 20px;
                    }
                    .section-title {
                        font-size: 16px;
                    }
                    .info-item, .message-section {
                        padding: 14px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>📧 New Contact Form Submission</h1>
                    <p>You have received a new message from easyCoding website</p>
          </div>
          
                <div class="content">
                    <div class="section">
                        <h2 class="section-title">Contact Information</h2>
                        <div class="info-grid">
                            <div class="info-item">
                                <div class="info-label">Name</div>
                                <div class="info-value">${name}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">Email Address</div>
                                <div class="info-value">
                                    <a href="mailto:${email}">${email}</a>
                                </div>
                            </div>
                            ${company ? `
                            <div class="info-item">
                                <div class="info-label">Company</div>
                                <div class="info-value">${company}</div>
                            </div>
                            ` : ''}
                        </div>
          </div>
          
                    <div class="section">
                        <h2 class="section-title">Message</h2>
                        <div class="message-section">
                            <div class="message-content">${message}</div>
                        </div>
          </div>
        </div>
                
                <div class="footer">
                    <div class="easycoding-brand">easyCoding</div>
                    <p class="footer-text">This message was sent from the easyCoding website contact form</p>
                    <div class="timestamp">
                        📅 ${new Date().toLocaleString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            timeZoneName: 'short'
                        })}
                        <span class="badge">New</span>
                    </div>
                </div>
            </div>
        </body>
        </html>
      `;
    }

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Gmail authentication failed. Please check your credentials.';
      } else if (error.message.includes('Username and Password not accepted')) {
        errorMessage = 'Gmail credentials not accepted. Please use an App Password.';
      } else if (error.message.includes('Less secure app access')) {
        errorMessage = 'Gmail requires App Password. Please enable 2FA and use an App Password.';
      } else {
        errorMessage = error.message;
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 
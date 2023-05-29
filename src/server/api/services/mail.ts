import nodemailer from 'nodemailer';
export type SentMessageInfo = any

// Create a transporter using SMTP
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
const transporter: SentMessageInfo = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false, // Set to true if using SSL/TLS
  auth: {
    user: 'your-email@example.com',
    pass: 'your-password',
  },
});

// Send an email
export const sendEmail = async ({to, subject, text}:{
    to: string;
    subject: string;
    text: string;
}) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await transporter.sendMail({
      from: '"Kristens Creations" <calebcampbellcrm@gmail.com>',
      to,
      subject,
      text,
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

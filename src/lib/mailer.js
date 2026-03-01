import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: process.env.RESEND_SMTP_HOST,
    port: Number(process.env.RESEND_SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.RESEND_SMTP_USER,
        pass: process.env.RESEND_SMTP_PASS,
    },
});


export const sendEmail = async ({ to, subject, html }) => {
    try {
        await transporter.sendMail({
            from: process.env.FROM_EMAIL,
            to,
            subject,
            html,
        })
    } catch (error) {
        console.error("Email sending failed:", error);
        throw error;
    }
}
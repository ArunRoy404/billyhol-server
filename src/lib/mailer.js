import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ to, subject, html }) => {
    try {
        await resend.emails.send({
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
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

export const sendEmail = async ({ to, subject, html }) => {
    try {
        await transporter.sendMail({
            from: `"Wenthura" <${process.env.FROM_EMAIL}>`,
            to,
            subject,
            html,
        });
    } catch (error) {
        console.error("Email sending failed:", error);
        throw error;
    }
};
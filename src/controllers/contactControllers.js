import contactModel from "../models/contactModel.js";
import { contactEmailTemplate } from "../emailTemplates/contactEmailTemplate.js";
import { sendEmail } from "../lib/nodemailer.js";


export const submitContact = async (req, res) => {
    try {
        const {
            fullname,
            address,
            country,
            phoneNumber,
            description
        } = req.body;

        if (!fullname || !address || !country || !phoneNumber || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const newContact = await contactModel.create({
            fullname,
            address,
            country,
            phoneNumber,
            description
        });

        await sendEmail({
            to: process.env.ADMIN_EMAIL,
            subject: "New Contact Submission – Wenthura",
            html: contactEmailTemplate({
                fullname,
                address,
                country,
                phoneNumber,
                description,
            }),
        });

        return res.status(201).json({
            success: true,
            data: newContact,
            message: "Your message has been sent successfully! Our team will get back to you within 24-48 hours.",
        });
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
        return res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        });
    }
};

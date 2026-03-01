import { waitingEmailTemplate } from "../emailTemplates/waitingEmatilTemplate.js"
import { sendEmail } from "../lib/nodemailer.js"
import requestAccessModel from "../models/requestAccessModel.js"

export const submitRequestAccess = async (req, res) => {
    try {
        const {
            role,
            companyName,
            country,
            email,
            linkedinProfile,
            agreeTermsConditions,
            agreePrivacyPolicy
        } = req.body

        if (!role || !companyName || !country || !email || !linkedinProfile || !agreeTermsConditions || !agreePrivacyPolicy) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const existing = await requestAccessModel.findOne({ email: email.toLowerCase().trim() })
        if (existing) {
            return res.status(400).json({ message: "Request access already exists" })
        }

        const newRequest = await requestAccessModel.create({
            role,
            companyName,
            country,
            email: email.toLowerCase().trim(),
            linkedinProfile,
            agreeTermsConditions,
            agreePrivacyPolicy
        })


        // Email to the user
        await sendEmail({
            to: email,
            subject: "You're on the Waiting List – Wenthura",
            html: waitingEmailTemplate({
                role,
                companyName,
                country,
                email,
                linkedinProfile,
            }),
        });


        return res.status(201).json({
            success: true,
            data: newRequest,
            message: "Submission successful! Check your email for confirmation.",
        })
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: error.message
            })
        }
        return res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        })
    }
}
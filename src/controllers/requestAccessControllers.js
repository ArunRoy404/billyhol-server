import { sendEmail } from "../lib/mailer.js"
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
            html: `
                        <h2>Hi there,</h2>
                        <p>Thank you for requesting access. Here's a summary of your submission:</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Company:</strong> ${companyName}</p>
                        <p><strong>Role:</strong> ${role}</p>
                        <p><strong>Country:</strong> ${country}</p>
                        <p><strong>LinkedIn:</strong> ${linkedinProfile}</p>
                        <br/>
                        <p>You are now on the waiting list. This can take between <strong>24 hours to 6 months</strong>. If you are given access, you will receive a <strong>PIN</strong>. After entering the PIN, the AI interview will begin.</p>
                        <p>All this information will be stored securely and kept confidential.</p>
                        <br/>
                        <p>Best regards,<br/>The Wenthura Team</p>
                    `,
        });


        return res.status(201).json({
            success: true,
            data: newRequest,
            message: "Submission successful! Check your email for confirmation.",
        })
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message })
        }
        return res.status(500).json({ message: "Internal server error" })
    }
}
import requestAccessModel from "../models/requestAccessModel"

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


        return res.status(201).json({
            success: true,
            data: newRequest,
            message: "Request access submitted successfully",
        })
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message })
        }
        return res.status(500).json({ message: "Internal server error" })
    }
}
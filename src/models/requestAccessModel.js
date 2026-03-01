import mongoose from "mongoose";

const requestAccessSchema = new mongoose.Schema(
    {
        role: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        linkedinProfile: {
            type: String,
            required: true
        },
        agreeTermsConditions: {
            type: Boolean,
            required: true
        },
        agreePrivacyPolicy: {
            type: Boolean,
            required: true
        },
    },
    {
        timestamps: true
    }
)

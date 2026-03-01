import mongoose from "mongoose";
const { Schema, model, models } = mongoose


const requestAccessSchema = new Schema(
    {
        role: {
            type: String,
            required: true,
            enum: ['startups', 'investors', 'company', 'ceo']
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
            required: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
        },
        linkedinProfile: {
            type: String,
            required: true,
            trim: true,
            match: [/^https?:\/\/(www\.)?linkedin\.com\//, 'Invalid LinkedIn URL']
        },
        agreeTermsConditions: {
            type: Boolean,
            required: true,
            validate: { validator: (v) => v === true, message: "Must agree to terms and conditions" }
        },
        agreePrivacyPolicy: {
            type: Boolean,
            required: true,
            validate: { validator: (v) => v === true, message: "Must agree to privacy policy" }
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        },
        pin: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true,
        collection: "request_access"
    }
)

const requestAccessModel = models?.RequestAccess || model("RequestAccess", requestAccessSchema)

export default requestAccessModel

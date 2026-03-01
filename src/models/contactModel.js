import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const contactSchema = new Schema(
    {
        fullname: {
            type: String,
            required: [true, 'Full name is required'],
            trim: true
        },
        address: {
            type: String,
            required: [true, 'Address is required'],
            trim: true
        },
        country: {
            type: String,
            required: [true, 'Country is required'],
            trim: true
        },
        phoneNumber: {
            type: String,
            required: [true, 'Phone number is required'],
            trim: true
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            trim: true
        }
    },
    {
        timestamps: true,
        collection: "contacts"
    }
);

const contactModel = models?.Contact || model("Contact", contactSchema);

export default contactModel;

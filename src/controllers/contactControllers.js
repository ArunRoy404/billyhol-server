import contactModel from "../models/contactModel.js";

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

        return res.status(201).json({
            success: true,
            data: newContact,
            message: "Contact submitted successfully!",
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

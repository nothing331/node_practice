const mongoose = require("mongoose");

const contactSchema = mongoose.Schema;

const contact = new contactSchema( // Add `new` here
    {
        name: {
            type: String,
            required: [true, "Please add the contact name"],
        },
        email: {
            type: String,
            required: [true, "Please add the email"],
        },
        phone: {
            type: String,
            required: [true, "Please add the phone number"],
        },
    },
    {
        timestamps: true,
    }
);
const contactsDB = mongoose.model("Contact", contact);
module.exports = contactsDB;

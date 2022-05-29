const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    status: { type: String },
    description: { type: String },
    image: { data: Buffer, contentType: String },
    logo: { data: Buffer, contentType: String }
});

module.exports = mongoose.model("services", servicesSchema);

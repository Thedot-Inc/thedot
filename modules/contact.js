const mongoose = require('mongoose');


const conSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: String
    },
    cname: {
        type: String
    },
    email: {
        type: String
    },
    country: {
        type: String
    },
    idea: {
        type: String
    }
}, {
    timestamps: true
});


module.exports = mongoose.model("Contact", conSchema);
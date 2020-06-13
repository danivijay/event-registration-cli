const mongoose = require("mongoose");

const registeredPersonSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  phone: { type: String },
  email: { type: String },
});

module.exports = mongoose.model("RegisteredPerson", registeredPersonSchema);

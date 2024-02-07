const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dotenv = require("dotenv");
const User = require("./userModel");
dotenv.config();

const projectSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: String, required: true },
  clientid: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  description: { type: String },
  amount: {type: Number},
  paid: {type: Number},
  reimbersed: {type: Number},
  balance: {type: Number},
  document: [{
    name: {type: String, required: true},
    uploadedAt: {type: Date, default: Date.now},
    uploadedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  }],
  createAt: { type: Date, default: Date.now},
});

const Project = mongoose.model("Project", projectSchema);
module.exports = { Project };

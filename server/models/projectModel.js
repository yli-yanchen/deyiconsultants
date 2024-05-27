const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv');
const User = require('./userModel');
const { date } = require('joi');
dotenv.config();

const projectSchema = new Schema(
  {
    ID: { type: String, required: true },
    Name: { type: String, required: true },
    Address: { type: String, required: true },
    City: { type: String, required: true },
    ClientFirstName: { type: String, required: true },
    ClientLastName: { type: String, required: true },
    ProjectType: { type: String, required: true },
    StartDate: { type: Date },
    EndDate: { type: Date },
    Status: { type: String, required: true },

    ContractAmount: { type: Number },
    Reimbersement: { type: Number },
    PaidAmount: { type: Number },
    BalanceAmount: { type: Number },

    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ClientID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    Document: [
      {
        name: { type: String, required: true },
        uploadedAt: { type: Date, default: Date.now },
        uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);
module.exports = { Project };

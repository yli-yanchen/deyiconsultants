const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv');
const User = require('./userModel');
const { date, types } = require('joi');
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

    ContractAmount: { type: Number, required: true },
    Reimbersement: { type: Number, required: true },
    IncomingAmount: { type: Number, required: true },
    BalanceAmount: { type: Number, required: true },

    Engineer: [
      {
        Name: { type: String, required: true, default: 'Jeff' },
        OutcomingAmount: { type: Number, required: true, default: 0 },
        Deadline: {
          type: Date,
          required: true,
          default: function () {
            return this.StartDate;
          },
        },
      },
    ],

    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ClientID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    EngineerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

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

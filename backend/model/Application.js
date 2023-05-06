const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    relationshipManagerName: {
      type: String,
      required: true,
    },

    relationshipManagerId: {
      type: String,
      required: true,
    },

    customerName: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    pan: {
      type: String,
      required: true,
      unique: true,
    },

    adharCard: {
      type: String,
      required: true,
      unique: true,
    },

    dob: {
      type: Date,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    products: {
      type: Array,
      default: [],
    },

    status: {
      type: String,
      enum: ["draft", "submitted", "approved", "denied"],
      default: "draft",
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;

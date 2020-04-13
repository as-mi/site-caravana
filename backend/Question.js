const mongoose = require("mongoose");
const validator = require("validator");

const questionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    question: {
      type: String,
      required: true,
    },
    resolved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.createdAt;
        ret.createdAt = new Date(doc.createdAt);
        delete ret.updatedAt;
      },
    },
  }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;

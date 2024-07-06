const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    messages: [
      {
        // text: { type: String, required: true },
        text: {
          type: String,
        },
        from: {
          type: String,
          enum: ["user", "admin"],
        },
      },
    ],
    // users: Array,
    // reciever: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Messages", MessageSchema);

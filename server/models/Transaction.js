import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
  {
    amount: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      default: "others",
    },
    type: {
      type: String,
      enum: ["debit", "credit"],
    },
    user: {
      type: Schema.type.objectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Transaction = model("Transaction", transactionSchema);

export default Transaction;

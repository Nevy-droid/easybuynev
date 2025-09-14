import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orders",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentType: {
      type: String,
      enum: ["card", "jazzcash", "easypaisa"],
      default: "card",
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("payments", paymentSchema);

export default Payment;

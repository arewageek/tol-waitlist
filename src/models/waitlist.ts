import mongoose, { Schema } from "mongoose";

const waitlistSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    telegram: { type: String, required: true },
    twitter: { type: String, required: true },
    wallet: { type: String, required: true },
    referredBy: { type: String, required: true },
    referralCode: { type: String, require: true },
    score: { type: Number, required: false, default: 0 },
  },
  { timestamps: true }
);

const Waitlist =
  mongoose.models.Waitlist || mongoose.model("Waitlist", waitlistSchema);

export default Waitlist;

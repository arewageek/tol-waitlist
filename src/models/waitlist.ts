import mongoose, { Schema } from "mongoose";

const waitlistSchema = new Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    telegram: { type: String, required: false, unique: true },
    twitter: { type: String, required: false, unique: true },
    wallet: { type: String, required: false },
    referredBy: { type: String, required: true, default: "admin" },
    referralCode: { type: String, require: true },
    tgId: { type: String, required: false, unique: true },
    score: { type: Number, required: false, default: 5000 },
  },
  { timestamps: true }
);

const Waitlist =
  mongoose.models.Waitlist || mongoose.model("Waitlist", waitlistSchema);

export default Waitlist;

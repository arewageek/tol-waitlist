import { Schema } from "mongoose";

const TaskCompletionSchema = new Schema(
  {
    taskId: { type: String, required: String },
    userId: { type: String, required: String },
    reward: { type: Number, default: 0 },
  },
  { timestamps: true }
);

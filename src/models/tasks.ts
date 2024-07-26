import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    url: { type: String, required: false },
    valid: { type: Boolean, default: true },
    reward: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

export default Task;

import mongoose, { Schema } from "mongoose";

export interface TaskInterface {
  id?: string;
  name: string;
  description: string;
  url: string;
  valid?: boolean;
  reward: number;
}

const TaskSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    url: { type: String, required: false },
    valid: { type: Boolean, default: true },
    reward: { type: Number, default: 0, required: true },
  },
  { timestamps: true }
);

const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

export default Task;

import mongoose, { Schema } from "mongoose";

export interface TasksCompletionInterface {
  taskId: string;
  userId: string;
  reward: number;
}

const TaskCompletionSchema = new Schema(
  {
    taskId: { type: String, required: true },
    userId: { type: String, required: true },
    reward: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const TaskCompletion =
  mongoose.models.TaskCompletion ||
  mongoose.model("TaskCompletion", TaskCompletionSchema);

export default TaskCompletion;

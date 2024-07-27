"use server";

import { connectMongoDB } from "@/lib/db";
import TaskCompletion from "@/models/taskCompletion";
import Task from "@/models/tasks";
import Waitlist from "@/models/waitlist";

export interface TaskDetails {
  name: string;
  descrption: string;
  url?: string;
}

export interface LeaderboardInterface {
  _id?: string;
  twitter: string;
  score: number;
}

export async function createTask(
  data: TaskDetails
): Promise<"success" | "unknownError"> {
  try {
    connectMongoDB();
    const task = new Task(data);
    task.save();

    return "success";
  } catch (error) {
    console.log(error);
    return "unknownError";
  }
}

export async function allTasks(): Promise<(typeof Task)[] | "unknownError"> {
  try {
    connectMongoDB();
    const tasks = Task.find();

    // console.log(tasks);
    return tasks;
  } catch (error) {
    console.log(error);
    return "unknownError";
  }
}

export async function completeTask({
  taskId,
  userId,
  reward,
}: {
  taskId: string;
  userId: string;
  reward: number;
}): Promise<"success" | "unknownError" | "taskAlreadyCompleted"> {
  try {
    connectMongoDB();
    const previousCompletion = await TaskCompletion.find({
      where: { taskId, userId },
    });

    if (previousCompletion.length > 0) return "taskAlreadyCompleted";

    const task = new TaskCompletion({
      taskId,
      userId,
      reward,
    });

    task.save();

    const user = await Waitlist.findById(userId);
    // console.log(user);
    const score = user.score;
    const newPoints = score + reward;

    await Waitlist.findByIdAndUpdate(userId, { score: newPoints });

    console.log(await Waitlist);
    return "success";
  } catch (error) {
    console.log({ error });
    return "unknownError";
  }
}

export async function allCompletedTasks(userId: string) {
  connectMongoDB();
  const tasks = await TaskCompletion.find({ userId });
  console.log({ tasks });
  return tasks;
}

export async function fetchLeaderboard(userId: string) {
  connectMongoDB();
  const leaderboard = await Waitlist.find().sort({ score: -1 });
  return leaderboard;
}

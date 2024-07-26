"use server";

import Task from "@/models/tasks";

export interface TaskDetails {
  name: string;
  descrption: string;
  url?: string;
}

export async function createTask(
  data: TaskDetails
): Promise<"success" | "unknownError"> {
  try {
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
    const tasks = Task.find();

    console.log(tasks);
    return tasks;
  } catch (error) {
    console.log(error);
    return "unknownError";
  }
}

// export async function completeTask({
//   id,
// }: {id: string}): Promise<"complete" | "unknownError"> {
//   try {
//     const TaskComplation = await
//   } catch (error) {
//     console.log(error);
//     return "unknownError";
//   }
// }

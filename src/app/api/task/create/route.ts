import Task from "@/models/tasks";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, description, url, reward } = await request.json();

    const task = new Task({
      name,
      description,
      url,
      valid: Date.now() + 3000,
      reward,
    });

    task.save();
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ status: "failed" });
  }
}

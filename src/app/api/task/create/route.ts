import { connectMongoDB } from "@/lib/db";
import Task from "@/models/tasks";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    connectMongoDB();
    const task = new Task({
      name: "Follow us on Telegram",
      description: "",
      url: "#",
      valid: true,
      reward: 500,
    });

    task.save();
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ status: "failed" });
  }
}

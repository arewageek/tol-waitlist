"use server";

import { connectMongoDB } from "@/lib/db";
import Waitlist from "@/models/waitlist";
import mongoose from "mongoose";

export type Account = {
  name: string;
  email: string;
  telegram: string;
  twitter: string;
  wallet: string;
  referredBy?: string;
  referralCode?: string;
  score?: number;
  id?: string;
};

export type Response = {
  status: string;
  id?: string;
};

export async function createAccount(data: Account): Promise<Response> {
  try {
    await connectMongoDB();
    const { name, email, telegram, twitter, wallet, referredBy } = data;

    // console.log({ data });

    const waitlist = new Waitlist({
      name,
      email,
      telegram,
      twitter,
      wallet,
      referredBy: referredBy || "admin",
      referralCode: crypto.randomUUID(),
    });

    const waitlistId = await waitlist.save();

    const response = {
      status: "success",
      id: waitlistId._id,
    };

    console.log(response, waitlistId);

    return response;
  } catch (e) {
    console.log(e);
    return { status: "unknownError" };
  }
}

export async function getBalance(id: string): Promise<number> {
  try {
    const user = await Waitlist.findById(id);
    if (!user) return 0;
    const balance = user.score;

    return balance;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

export async function joinWaitlistWithEmail(
  email: string
): Promise<"success" | "unknownError"> {
  connectMongoDB();
  try {
    const waitlist = new Waitlist({
      email,
      referredBy: "admin",
      referralCode: crypto.randomUUID(),
      score: 5000,
    });

    const waitlistId = await waitlist.save();

    const id = await waitlistId._id.toLocaleString();

    console.log(waitlistId);
    return id;
  } catch (error) {
    console.log(error);
    return "unknownError";
  }
}

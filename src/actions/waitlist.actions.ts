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

export async function createAccount(
  data: Account
): Promise<"success" | "unknownError"> {
  try {
    await connectMongoDB();
    const { name, email, telegram, twitter, wallet, referredBy } = data;

    // console.log({ data });

    await Waitlist.create({
      name,
      email,
      telegram,
      twitter,
      wallet,
      referredBy: referredBy || "admin",
      referralCode: crypto.randomUUID(),
    });

    return "success";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

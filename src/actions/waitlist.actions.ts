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

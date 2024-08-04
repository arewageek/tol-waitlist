"use server";

import { connectMongoDB } from "@/lib/db";
import Waitlist from "@/models/waitlist";
import mongoose from "mongoose";
import { Bot } from "grammy";

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

export async function joinWaitlistWithEmail({
  email,
  telegramId,
}: {
  email: string;
  telegramId?: string;
}): Promise<{
  status: "success" | "unknownError" | "alreadyOnWaitlist";
  id: string | undefined;
}> {
  try {
    connectMongoDB();

    // verify user account by email
    const wl = await Waitlist.findOne({ email });
    // console.log({ wl });
    // console.log({ wl });
    if (wl) return { id: wl.id, status: "alreadyOnWaitlist" };

    // verify user account by telegram id or username
    if (telegramId) {
      const wlById = await Waitlist.findOne({ tgId: telegramId! });
      if (wlById) return { id: wlById.id, status: "alreadyOnWaitlist" };
    }

    const waitlist = new Waitlist({
      email,
      tgId: telegramId ? telegramId : 0,
      referredBy: "admin",
      referralCode: crypto.randomUUID(),
      score: 5000,
    });

    const waitlistId = await waitlist.save();

    const bot = new Bot(process.env.TELEGRAM_BOT_API!);

    if (telegramId)
      bot.api.sendPhoto(
        telegramId,
        "https://lh3.googleusercontent.com/proxy/PAp2VcqRN8Xx43Lwc5g3Sl2De92ZJk7XN_BFQitYH-0AcIUWYA29pBziLRjGBRsvnWJ6A5uPU-Vv5Ur11mh66moJaO2UNy5Y-2RZqAqO6HY",
        {
          caption:
            "Hey! you've been added to our waitlist. It's great to have you onboard \n\nAs a way of appreciating you for being early, we have rewarded you with 5,000$TOL. This will be made claimable when our P2E game goes live. \n\nThere's a lot more coming than you would expect. \n\nCheers!",
        }
      );

    const id = await waitlistId._id.toLocaleString();

    console.log(waitlistId);

    return { id, status: "success" };
  } catch (error) {
    console.log(error);
    return { id: undefined, status: "unknownError" };
  }
}

// export async function clearWaitlist() {
//   await Waitlist.deleteMany();
// }

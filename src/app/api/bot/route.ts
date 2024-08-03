import { Bot } from "grammy";
import { welcomeMessage } from "./helpers";
import { NextResponse } from "next/server";
const bot = new Bot(process.env.TELEGRAM_BOT_API as string);

async function handler() {
  bot.command("start", async (ctx) => {
    const sender = await ctx;
    // const message = welcomeMessage({ firstName: sender?.first_name! });

    // console.log({ api: process.env.TELEGRAM_BOT_API as string });
    console.log({ sender: sender.senderChat });

    // bot.api.sendMessage(sender?.id!, await message);
  });

  bot.start();
  return NextResponse.json({ status: 200 });
}

export { handler as GET, handler as POST, handler as PUT, handler as PATCH };

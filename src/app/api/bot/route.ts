import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";
import { connectMongoDB } from "@/lib/db";
import Waitlist from "@/models/waitlist";
import { Bot, InlineKeyboard } from "grammy";
// import {} from ''
// import { welcomeMessage } from "./helpers";
import { NextResponse } from "next/server";
const bot = new Bot(process.env.TELEGRAM_BOT_API as string);

let waitlistKeyboard = new InlineKeyboard().webApp(
  "Join Waitlist 🚀🚀",
  "https://tol-waitlist.vercel.app"
);

async function handler() {
  bot.command("start", async (ctx) => {
    if (ctx.from?.id) {
      connectMongoDB();
      const isRegistered = await Waitlist.findOne({ tgId: ctx.from?.id });
      if (isRegistered) {
        ctx.replyWithPhoto(
          "https://yt3.googleusercontent.com/sI8ar6l47Ay3cpjv3sKnQzlI_enRAX4NLY9yYp7ebbddj8FYHwMVoU0S4D0g0vYVvUhQi9vt_ZI=s900-c-k-c0x00ffffff-no-rj",
          {
            caption:
              "Welcome onboard chief. Are you ready for what's coming? Join our waitlist using the link below",
            reply_markup: new InlineKeyboard().webApp(
              "Join Waitlist 🚀",
              `https://tol-waitlist.vercel.app/waitlist/${isRegistered.id}`
            ),
          }
        );
        console.log({ registered: true });
      } else {
        ctx.replyWithPhoto(
          "https://blog.invitemember.com/content/images/2024/05/TON-Space.png",
          {
            caption:
              "Welcome onboard chief. Are you ready for what's coming? Join our waitlist using the link below",
            reply_markup: waitlistKeyboard,
          }
        );
        console.log("no acct");
      }
    } else {
      ctx.replyWithPhoto(
        "https://blog.invitemember.com/content/images/2024/05/TON-Space.png",
        {
          caption:
            "Welcome onboard chief. Are you ready for what's coming? Join our waitlist using the link below",
          reply_markup: waitlistKeyboard,
        }
      );
    }

    // console.log({ user: ctx });

    // const sender = await ctx;
    // const message = welcomeMessage({ firstName: sender?.first_name! });

    // console.log({ api: process.env.TELEGRAM_BOT_API as string });
    // console.log({ sender: sender.senderChat });

    // bot.api.sendMessage(sender?.id!, await message);
  });

  //   bot.command("join-aitl")

  return NextResponse.json({ status: 200 });
}

export { handler as GET, handler as POST, handler as PUT, handler as PATCH };

bot.stop();
bot.start();

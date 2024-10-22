import { NextResponse } from "next/server";

export async function POST() {
  console.log({ api: process.env.TELEGRAM_BOT_API });
  try {
    const reqUrl = `https://api.telegram.org/bot${process.env
      .TELEGRAM_BOT_API!}/setWebhook?url=${process.env.TELEGRAM_WEBHOOK_URL!}`;

    const headers = {
      ContentType: "Application/json",
    };

    const webhook = await fetch(reqUrl, { headers });

    console.log({ res: await webhook.json() });

    if (!webhook.ok) return NextResponse.json({ status: 400 });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 });
  }
}

// import express, { Express} from 'express'
import {Bot, InlineKeyboard} from 'grammy'
import { connectMongoDB } from "@/lib/db";
import Waitlist from "@/models/waitlist";
import {NextResponse} from 'next/server'


const botAPi = process.env.TELEGRAM_BOT_API as string
const bot = new Bot(botAPi)

bot.start()

export async function handler () {
    console.log('received')

    bot.command("start", async ctx => {
        const sender:{id: number, is_bot: boolean, first_name: string, username: string, language_code: string} = ctx.from
        console.log({sender})

        const isJoinedWaitlist = await verifyWaitlistStatus(sender.id)

        const joinWaitlistMsg = await waitlistInvitation(sender.id, sender.first_name)

        console.log({ joinWaitlistMsg })

        ctx.replyWithPhoto('https://pintu-academy.pintukripto.com/wp-content/uploads/2023/12/Ton.png', {
            caption: joinWaitlistMsg.message,
            reply_markup: new InlineKeyboard().webApp(isJoinedWaitlist ? "Check My Points ✨💎" : "Join Waitlist 🚀🚀🚀", isJoinedWaitlist ? joinWaitlistMsg.link.joined : joinWaitlistMsg.link.new)
        })
    })


    return NextResponse.json({status: 200})
}

export {
    handler as GET,
    handler as POST,
    handler as PUT,
    handler as PUSH,
}


export async function waitlistInvitation (id: number, first_name: string): Promise<{message: string, waitlistLink: {new: string, joined: string}}>{

    const userId = await retrieveUserId(id)

    const message = `Hey, it's great to have you here ${first_name}. \n \nOur waitlist is currently on. You can join to stay in the loop for any updates on this project. \n \nYou also earn some reward reserved for our early adopters. \n\nUse the button below to get in`
    const link = {
        new: `${process.env.APP_URL}/join/${id}`,
        joined: `${process.env.APP_URL}/waitlist/${userId}`
    }

    return {message, link}
}

export async function verifyWaitlistStatus(telegramId: string): Promise<boolean> {
    try{
        connectMongoDB()
    
        const wl = await Waitlist.findOne({ tgId: telegramId })
    
        if(wl) return true;
    
        return false;
    }
    catch(e){
        console.log(e)
        return false
    }
}

export async function retrieveUserId(telegramId: string): Promise <string | 404> {
    try{
        connectMongoDB()

        const wl = await Waitlist.findOne({ tgId: telegramId })

        if(!wl) return 404

        return wl.id;
    }

    catch(e){
        console.log(e)
        return false
    }
}
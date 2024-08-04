// import express, { Express} from 'express'
import {Bot, InlineKeyboard} from 'grammy'
import { connectMongoDB } from "@/lib/db";
import Waitlist from "@/models/waitlist";
import {NextResponse} from 'next/server'


const botAPi = process.env.TELEGRAM_BOT_API as string
const bot = new Bot(botAPi)


export async function POST () {
    async function retrieveUserId(telegramId: string): Promise <string | 404> {
        try{
            connectMongoDB()

            const wl = await Waitlist.findOne({ tgId: telegramId })

            if(!wl) return 404

            return wl.id;
        }

        catch(e){
            console.log(e)
            return 404
        }
    } 
    
    async function waitlistInvitation (id: number | string, first_name: string): Promise<{message: string, link: {new: string, joined: string}}>{
        id = id.toLocaleString()
        const userId = await retrieveUserId(id)

        const message = `Hey, it's great to have you here ${first_name}. \n \nOur waitlist is currently on. You can join to stay in the loop for any updates on this project. \n \nYou also earn some reward reserved for our early adopters. \n\nUse the button below to get in`
        const link = {
            new: `${process.env.APP_URL}/join/${id}`,
            joined: `${process.env.APP_URL}/waitlist/${userId}`
        }

        return {message, link}
    }

    async function verifyWaitlistStatus(telegramId: number | string): Promise<boolean> {
        try{
            telegramId = telegramId.toLocaleString()
            
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
    
    
    
    
    console.log('received')

    bot.command("start", async ctx => {
        const sender = ctx.from
        console.log({sender})

        const isJoinedWaitlist = await verifyWaitlistStatus(sender?.id!)

        const joinWaitlistMsg = await waitlistInvitation(sender?.id!, sender?.first_name!)

        console.log({ joinWaitlistMsg })

        ctx.replyWithPhoto('https://pintu-academy.pintukripto.com/wp-content/uploads/2023/12/Ton.png', {
            caption: joinWaitlistMsg.message,
            reply_markup: new InlineKeyboard().webApp(isJoinedWaitlist ? "Check My Points ✨💎" : "Join Waitlist 🚀🚀🚀", isJoinedWaitlist ? joinWaitlistMsg.link.joined : joinWaitlistMsg.link.new)
        })
    })


    return NextResponse.json({status: 200})
}

bot.stop()
bot.start()

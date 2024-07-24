"use client"

import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Input } from '../ui/input'
import ShinyButton from '../magicui/shiny-button'
import { createAccount } from '@/actions/waitlist.actions'

type WaitlistFormData = {
    name: string,
    email: string,
    twitter: string,
    telegram: string,
    wallet: string
}

// const WaitlistForm = ({ showModal }: { showModal: (state: boolean) => void }) => {
const WaitlistForm = () => {
    const [data, setData] = useState<WaitlistFormData>({ name: '', email: '', twitter: '', telegram: '', wallet: '' })
    const [status, setStatus] = useState<"success" | "error" | "">("")

    const updateInput = ({ field, val }: { field: string, val: string }) => {
        setData((prev) => ({ ...prev, [field]: val }))
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        console.log({ data })

        const makeMyAccount = await createAccount(data)
        console.log(makeMyAccount)

        setStatus(() => makeMyAccount == "success" ? makeMyAccount : "error")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                <Input required onChange={(e) => updateInput({ field: 'name', val: e.target.value })} value={data.name} className="w-full bg-black border-white/30 py-7 px-7" placeholder="Name" />
                <Input required onChange={(e) => updateInput({ field: 'telegram', val: e.target.value })} value={data.telegram} className="w-full bg-black border-white/30 py-7 px-7" placeholder="Telegram Username" />
                <Input required onChange={(e) => updateInput({ field: 'twitter', val: e.target.value })} value={data.twitter} className="w-full bg-black border-white/30 py-7 px-7" placeholder="X Username" />
                <Input required type="email" onChange={(e) => updateInput({ field: 'email', val: e.target.value })} value={data.email} className="w-full bg-black border-white/30 py-7 px-7" placeholder="Email Address" />
                <Input required onChange={(e) => updateInput({ field: 'wallet', val: e.target.value })} value={data.wallet} className="w-full bg-black border-white/30 py-7 px-7" placeholder="Ton Wallet Address" />

                {/* <Button className="flex items-center justify-between px-7 py-7 bg-white/10 hover:text-gray-300 transition duration-100">
                  </Button> */}

                <div className="">
                    <ShinyButton type="submit" text="Continue" className="w-full  py-5 rounded-xl" />

                </div>
            </form>
        </>
    )
}

export default WaitlistForm
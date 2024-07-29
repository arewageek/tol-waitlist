"use client"

import React, { SyntheticEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { joinWaitlistWithEmail } from '@/actions/waitlist.actions'
import { toast } from 'react-toastify'

const WaitlistForm2 = () => {
    const [email, setEmail] = useState<string>('')

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        try {
            const joinWL = async () => {
                const joinWaitlist = await joinWaitlistWithEmail(email)

                if (joinWaitlist == "unknownError") {
                    toast.error("Could not join waitlist")
                }
                else {
                    toast.success("You have successfully joined our waitlist")
                    window.location.href = `/waitlist/${joinWaitlist}`
                    console.log(joinWaitlist)
                }
            }
            joinWL()

        }
        catch (error) {
            console.log(error)
            toast.error("An error occurred")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-y-4 flex-col w-full mt-4">
            <div className="w-full px-5">
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="bg-stone-900 px-5 py-6 text-lg h-[60pt] rounded-3xl ring-0 focus-within:ring-0 focus-visible:ring-0 border-0 text-center w-full text-gray-50 placeholder:text-gray-400" placeholder="Enter your email" />
            </div>

            <div className="w-full px-5">
                <Button className="w-full h-[60pt] rounded-3xl font-bold text-2xl text-black bg-white shadow transition hover:shadow-sm hover:text-black/80 duration-100">
                    Join Waitlist
                </Button>
            </div>
        </form>
    )
}

export default WaitlistForm2
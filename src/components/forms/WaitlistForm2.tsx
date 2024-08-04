"use client"

import React, { SyntheticEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { joinWaitlistWithEmail } from '@/actions/waitlist.actions'
import { toast } from 'react-toastify'
import Modal from '../Modal'
import { useUserStore } from '@/store/user'

type Status = {
    title: string, content: string, type: "success" | "error" | "alreadyOnWaitlist", id?: string
}

const WaitlistForm2 = ({ tgId }: { tgId?: string }) => {
    const [email, setEmail] = useState<string>('')
    const [status, setStatus] = useState<Status | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // const { tgId } = useUserStore()

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const joinWL = async () => {

                const id = tgId ? tgId : ''

                const joinWaitlist = await joinWaitlistWithEmail({ email, telegramId: id })

                if (joinWaitlist.status == "unknownError") {
                    toast.error("Could not join waitlist")
                }
                else if (joinWaitlist.status == "alreadyOnWaitlist") {
                    toast.info("You're already on our waitlist")

                    setStatus(() => ({
                        title: "Already on Waitlist",
                        content: "Hey, we found your details on our waitlist. Just keep your fingers crossed and anticipate what's next",
                        type: 'alreadyOnWaitlist',
                        id: joinWaitlist.id
                    }))
                }
                else if (joinWaitlist.status == "success") {
                    console.log(joinWaitlist)

                    setStatus(() => ({
                        title: "Waitlist Submitted",
                        content: "Yey..... You have been added to our waitlist. Keep your fingers crossed for what's coming",
                        type: 'success',
                        id: joinWaitlist.id
                    }))
                }
                else {
                    toast.error("An unknown error occurred")
                }


                setTimeout(() => setIsLoading(false), 2000)
            }
            joinWL()

        }
        catch (error) {
            console.log(error)
            toast.error("An error occurred")
            setTimeout(() => setIsLoading(false), 2000)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex gap-y-4 flex-col w-full mt-4">
                <div className="w-full px-5">
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="bg-stone-900 px-5 py-6 text-lg h-[60pt] rounded-3xl ring-0 focus-within:ring-0 focus-visible:ring-0 border-0 text-center w-full text-gray-50 placeholder:text-gray-400" placeholder="Enter your email" />
                </div>

                <div className="w-full px-5">
                    <Button className="w-full h-[60pt] rounded-3xl font-bold text-2xl text-black bg-white shadow transition hover:shadow-sm hover:text-black/80 duration-100 flex items-center gap-x-3">
                        <span>
                            Join Waitlist
                        </span>
                        <span>
                            {isLoading && <div className='w-5 h-5 rounded-full border-2 border-black border-t-0 animate-spin border-l-0'></div>}
                        </span>
                    </Button>
                </div>
            </form>
            {status && <Modal status={status.type} title={status.title} doRedirect={status.type == "success" ? true : false} id={status.id} content={status.content} isModalOpen={!!status} closeModal={() => setStatus(undefined)} />}
        </>
    )
}

export default WaitlistForm2
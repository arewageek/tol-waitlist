"use client"

import WaitlistForm2 from '@/components/forms/WaitlistForm2'
import React from 'react'

const JoinPage2 = ({ params }: { params: { id: string } }) => {
    // const

    return (
        <main className="flex min-h-screen flex-col items-center justify-between max-w-screen p-0">
            <div className="min-h-screen w-full py-20">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-x-5 w-full lg:px-12 py-5 h-full">

                    <div className="w-full p-2 lg:px-[140px] lg:w-1/2 flex flex-col gap-y-10 items-center">

                        <h2 className="text-4xl font-bold text-center font-[montserrat]">
                            Start connecting with web3 Builders today!
                        </h2>

                        <WaitlistForm2 tgId={params.id} />
                    </div>

                    <div>
                        <img src={"/phone.png"} alt="" className="w-[500pt] lg:w-[300pt]" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default JoinPage2
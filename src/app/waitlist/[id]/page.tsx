import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import ShineBorder from '@/components/magicui/shine-border'
import { cn } from '@/lib/utils'
import { Zap } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#181818] to-black max-w-screen p-0">

            <div className="min-h-screen w-full py-10">
                {/* <Meteors number={30} /> */}
                <div className="flex items-center justify-center w-full lg:px-12 py-5 h-full flex-col">

                    <div className="w-full p-2 lg:px-[30px] lg:w-2/3 flex flex-col gap-y-4 items-center">

                        <ShineBorder
                            className="relative flex py-10 h-auto w-full overflow-y-auto border-transparent flex-col items-center justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl gap-y-4"
                            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        >
                            <div className='my-10 flex items-center flex-col gap-3'>
                                <div className="rounded-full p-3 bg-[#181818] text-gray-300 cursorpoin">
                                    <Zap height={30} width={30} />
                                </div>
                                <p className="text-sm font-semibold text-white/70">
                                    The Open Lab
                                </p>
                            </div>

                            <div className="w-full text-gray-300 text-center">
                                <AnimatedGradientText className="bg-transparent rounded-none">
                                    <h2
                                        className={cn(
                                            `md:text-4xl text-3xl font-bold text-white inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                                        )}
                                    >
                                        Congratulations! You're on Our waitlist
                                    </h2>
                                </AnimatedGradientText>
                                <p className='text-sm md:text-lg font-semibold'>Complete simple tasks to ascend on our leaderboard</p>
                            </div>

                            <div className="w-full lg:w-1/2 px-4 z-50 text-gray-200">

                            </div>
                        </ShineBorder>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page

import LeaderboardTable from '@/components/leaderboard/LeaderboardTable'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import ShineBorder from '@/components/magicui/shine-border'
import { cn } from '@/lib/utils'
import { Zap } from 'lucide-react'
import React from 'react'

const LeaderboardPage = () => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#181818] to-black max-w-screen p-0">

            <div className="min-h-screen w-full py-10">

                <div className="flex items-center justify-center w-full lg:px-12 py-5 h-full flex-col">

                    <div className="w-full p-2 lg:px-[30px] lg:w-2/3 flex flex-col gap-y-4 items-center">

                        <ShineBorder
                            className="relative flex py-10 h-auto w-full overflow-y-auto border-transparent flex-col items-center justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl gap-y-4"
                            color={["#66B2FF", "#3366CC", "#00188F"]}
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
                                            `md:text-4xl text-3xl font-bold text-white inline animate-gradient bg-gradient-to-r from-[#2196F3] via-[#673AB7] to-[#007BFF] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                                        )}
                                    >
                                        Leaderboard
                                    </h2>
                                </AnimatedGradientText>

                            </div>

                            <LeaderboardTable />
                        </ShineBorder>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LeaderboardPage
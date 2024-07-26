import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import ShineBorder from '@/components/magicui/shine-border'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Zap } from 'lucide-react'
import React from 'react'

const page = () => {
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
                                        Congratulations! You're on Our waitlist
                                    </h2>
                                </AnimatedGradientText>
                                <p className='text-sm md:text-lg font-semibold'>Complete simple tasks to ascend on our leaderboard</p>
                            </div>

                            <div className="w-full lg:w-2/3 px-4 z-50 text-gray-200">
                                <div className='flex items-center justify-center py-5'>
                                    <h2 className='text-xl lg:text-3xl font-bold gap-x-2 flex items-baseline'>
                                        Token Balance:
                                        <div className='text-2xl lg:text-4xl flex gap-x-2 text-white'>
                                            {(5000).toLocaleString()}
                                            <span className='font-bold'>
                                                $TOL
                                            </span>
                                        </div>
                                    </h2>
                                </div>

                                <div className='w-full flex gap-5 flex-col mt-10 px-5'>
                                    <div className='border-2 border-pink-300/30 rounded-xl px-4 py-5 flex items-center justify-between'>
                                        <div className='font-semibold text-lg'>
                                            Subscribe to our Newsletter
                                        </div>
                                        <div className='flex items-center gap-x-3 flex-col lg:flex-row gap-y-2'>
                                            <div className='font-bold lg:text-md text-sky-500 text-xs'>
                                                + 300 $TOL
                                            </div>
                                            <Button className='bg-sky-500 text-black hover:bg-sky-500/80 transition duration-100'>
                                                Proceed
                                            </Button>
                                        </div>
                                    </div>

                                    <div className='border-2 border-pink-300/30 rounded-xl px-4 py-5 flex items-center justify-between'>
                                        <div className='font-semibold text-lg'>
                                            Join our discord server
                                        </div>
                                        <div className='flex items-center gap-x-3 flex-col lg:flex-row gap-y-2'>
                                            <div className='font-bold lg:text-md text-sky-500 text-xs'>
                                                + 300 $TOL
                                            </div>
                                            <Button className='bg-sky-500 text-black hover:bg-sky-500/80 transition duration-100'>
                                                Proceed
                                            </Button>
                                        </div>
                                    </div>

                                    <div className='border-2 border-pink-300/30 rounded-xl px-4 py-5 flex items-center justify-between'>
                                        <div className='font-semibold text-lg'>
                                            Follow us on Twitter
                                        </div>
                                        <div className='flex items-center gap-x-3 flex-col lg:flex-row gap-y-2'>
                                            <div className='font-bold lg:text-md text-sky-500 text-xs'>
                                                + 300 $TOL
                                            </div>
                                            <Button className='bg-sky-500 text-black hover:bg-sky-500/80 transition duration-100'>
                                                Proceed
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ShineBorder>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
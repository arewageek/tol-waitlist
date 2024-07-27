import { allCompletedTasks, allTasks } from '@/actions/task.actions'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import ShineBorder from '@/components/magicui/shine-border'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Zap } from 'lucide-react'
import React from 'react'
import Task from '@/models/tasks'
import Link from 'next/link'
import WLTasks from '@/components/tasks/WLTask'
import { getBalance } from '@/actions/waitlist.actions'
import ScoreBalance from '@/components/tasks/ScoreBalance'
import AppProvider from '@/providers/AppProvider'
import UpdateId from '@/components/UpdateId'
import AllTasks from '@/components/tasks/AllTasks'

const page = async ({ params }: { params: { id: string } }) => {
    // const tasks: (typeof Task)[] | "unknownError" = await allTasks()
    // const completedTasks = await allCompletedTasks(params.id)

    // let filteredTasks: (typeof Task)[] = []
    // if (Array.isArray(tasks)) {
    //     filteredTasks = tasks.filter(task => {
    //         const isCompleted = completedTasks.some(completedTask => completedTask.taskId === task._id.toString());
    //         return !isCompleted;
    //     });
    // }

    // console.log({ filteredTasks, completedTasks, tasks })

    return (
        <AppProvider id={params.id}>
            <UpdateId id={params.id} />
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
                                    <p className='text-sm md:text-lg font-semibold lg:w-2/3 mx-auto'>
                                        You have been awarded 5,000 $TOL. Complete simple tasks and ascend the leaderboards all point will be displayed on our upcoming P2E Game
                                    </p>
                                </div>

                                <div className="w-full lg:w-2/3 px-4 z-50 text-gray-200">
                                    <ScoreBalance id={params.id} />

                                    <div className='w-full flex gap-5 flex-col mt-10 px-5'>
                                        <AllTasks />
                                        {/* {filteredTasks?.length > 0 && filteredTasks.map((task, id) =>
                                            <WLTasks id={task.id} name={task.name} description={task.description} reward={task.reward} key={id} />
                                        )} */}
                                    </div>

                                    <div className='mt-10 text-center text-sm underline decoration-dotted hover:text-sky-400 transition duration-100'>
                                        <Link href="/leaderboard" className='font-bold text-sky-500'>See leaderboard</Link>
                                    </div>
                                </div>
                            </ShineBorder>
                        </div>
                    </div>
                </div>
            </main>
        </AppProvider>
    )
}

export default page
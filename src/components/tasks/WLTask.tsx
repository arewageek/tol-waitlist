"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { completeTask } from '@/actions/task.actions'
import { toast } from 'react-toastify'
import { Rocket } from 'lucide-react'
import { useUserStore } from '@/store/user'
import TaskCompletion, { TasksCompletionInterface } from '@/models/taskCompletion'
import { url } from 'inspector'

export type WLTask = {
    name: string,
    description?: string,
    reward: number,
    id: string,
    uid?: string,
    url: string
}

const WLTasks = ({ name, description, reward, id, url }: WLTask) => {
    const [completion, setCompletion] = useState<boolean>()
    const [isLoading, setIsLoading] = useState<boolean>()

    const { setBalance, balance, userId, completedTasks, setCompleteTasks } = useUserStore()

    const updateCompletedTasks = () => {
        const data: TasksCompletionInterface = { taskId: id, userId, reward }
        setCompleteTasks([...completedTasks, data])
    }

    const handleTaskClick = async () => {
        if (completion) {
            setIsLoading(true)
            const completed = await completeTask({ taskId: id, userId, reward })
            if (completed == "taskAlreadyCompleted") {
                toast.error("Task has already been done")
            }
            else if (completed == "unknownError") {
                toast.error("Task could not be completed")
            }
            else if (completed == "success") {
                toast.success("Task has been completed")
                setBalance(balance + reward)
                updateCompletedTasks()
            }
            else {
                toast.error("Invalid completion state")
            }
            setTimeout(() => setIsLoading(false), 1000)
        }
        else {
            setTimeout(() => setCompletion(true), 2000)
            window.open(url)
        }


    }

    return (
        <div className='border-2 border-sky-300/30 rounded-xl px-4 py-5 flex items-center justify-between gap-x-1'>
            <div className='font-semibold text-lg'>
                {name}
            </div>
            <div className='flex items-center gap-x-3 flex-col lg:flex-row gap-y-2'>
                {!completion && <div className='font-bold lg:text-md text-sky-500 text-xs pr-2'>
                    + {reward?.toLocaleString()} $TOL
                </div>}
                <Button onClick={handleTaskClick} className='bg-sky-500 text-black hover:bg-sky-500/80 transition duration-100 flex items-center gap-x-1'>
                    {completion ? "Claim Reward" : "Proceed"}
                    <span>
                        {isLoading ? <div className='h-4 w-4 rounded-full animate-spin border-2 border-black border-t-0'></div> : <Rocket height={16} />}
                    </span>
                </Button>
            </div>
        </div>
    )
}

export default WLTasks
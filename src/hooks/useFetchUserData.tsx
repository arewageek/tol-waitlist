"use client"

import { allCompletedTasks, allTasks, completeTask } from '@/actions/task.actions'
import { getBalance } from '@/actions/waitlist.actions'
import { useUserStore } from '@/store/user'
import React, { useEffect, useState } from 'react'



const useFetchUserData = ({ id }: { id: string }) => {

    // const [completedTasks, setCompletedTasks] = useState<(typeof TaskCompletion)[] | []>()

    // const tasks: (typeof Task)[] | "unknownError" = await allTasks()
    // const completedTasks = await allCompletedTasks(params.id)

    const { setBalance, setTasks, tasks, completedTasks, setCompleteTasks, setFilteredTasks } = useUserStore()

    const fetchBalance = async () => {
        const bal = await getBalance(id) // Use id here
        setBalance(bal)
    }

    const fetchTasks = async () => {
        const tsks = await allTasks()

        if (tsks != "unknownError") {
            setTasks(tsks)
        }
    }

    const fetchCompletedTasks = async () => {
        const tasks = await allCompletedTasks(id)
        setCompleteTasks(tasks)
    }

    const filterTasks = async () => {
        if (Array.isArray(tasks)) {
            const filteredTasks = tasks.filter(task => {
                const isCompleted = completedTasks.some(completedTask => completedTask.taskId === task.id);
                return !isCompleted;
            });

            setFilteredTasks(filteredTasks)
        }
    }

    useEffect(() => {
        fetchBalance()
        fetchTasks()
        fetchCompletedTasks()
    }, [])

    useEffect(() => {
        filterTasks()
    }, [tasks, completedTasks])
}

export default useFetchUserData
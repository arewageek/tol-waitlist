"use client"

import { useUserStore } from '@/store/user'
import { useState, useEffect } from 'react'
import WLTasks from './WLTask'

const AllTasks = () => {
    const { filteredTasks } = useUserStore()

    return (
        <>
            {filteredTasks.length > 0
                ? filteredTasks.map((task, id) => <WLTasks id={task.id!} name={task.name} description={task.description} reward={task.reward} key={id} />)
                : <div className='border-2 border-sky-300/30 rounded-xl px-4 py-5 flex items-center justify-center text-lg font-medium'>
                    No available task 🤷‍♂️
                </div>}
        </>
    )
}

export default AllTasks
"use client"
import { LeaderboardInterface, fetchLeaderboard } from '@/actions/task.actions'
import { useUserStore } from '@/store/user'
import React, { useEffect, useState } from 'react'

const LeaderboardTable = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardInterface[]>()
    const { userId } = useUserStore()

    const fetchLeaderboardData = async () => {
        const ldb = await fetchLeaderboard(userId)
        setLeaderboard(ldb)
        console.log(ldb)
        console.log({ userId })
    }

    useEffect(() => {
        fetchLeaderboardData()
    }, [userId])

    return <div className='w-full px-5 lg:w-2/3'>
        <table className='text-gray-300 text-xs w-full table table-auto'>
            <thead>
                <tr className=' border-2 border-gray-300/30 border-collapse text-left'>
                    <th className='px-2 py-1'>S/N</th>
                    <th className='px-2 py-1'>Twitter</th>
                    <th className='px-2 py-1'>Score</th>
                </tr>
            </thead>
            <tbody>

                {
                    leaderboard && leaderboard.length > 0 && leaderboard.map(
                        (lb, id) => <tr key={id + 1} className={`border-2 border-gray-300/30 border-collapse ${lb._id == userId && "text-sky-500"}`}>
                            <td className='px-2 py-1'>{lb._id}</td>
                            <td className='px-2 py-1'>{lb.twitter}</td>
                            <td className='px-2 py-1'>{lb.score.toLocaleString()} $TOL</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
}

export default LeaderboardTable
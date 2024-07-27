"use client"
import { LeaderboardInterface, fetchLeaderboard } from '@/actions/task.actions'
import { useUserStore } from '@/store/user'
import React, { useEffect, useState } from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


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
        <Table className='text-gray-300 text-xs w-full table table-auto'>
            <TableHeader>
                <TableRow className=' border-2 border-gray-300/30 border-collapse text-left'>
                    <TableHead className='px-2 py-1'>S/N</TableHead>
                    <TableHead className='px-2 py-1'>Twitter</TableHead>
                    <TableHead className='px-2 py-1'>Score</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {
                    leaderboard && leaderboard.length > 0 && leaderboard.map(
                        (lb, id) => <TableRow key={id + 1} className={`border-2 border-gray-300/30 border-collapse ${lb._id == userId && "text-sky-500"}`}>
                            <TableCell className='px-2 py-1'>{id + 1}</TableCell>
                            <TableCell className='px-2 py-1'>{lb.twitter}</TableCell>
                            <TableCell className='px-2 py-1'>{lb.score.toLocaleString()} $TOL</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </div>
}

export default LeaderboardTable
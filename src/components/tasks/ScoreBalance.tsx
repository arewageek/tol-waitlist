"use client"

import { getBalance } from '@/actions/waitlist.actions'
import { useUserStore } from '@/store/user'
import React, { useEffect, useState } from 'react'

const ScoreBalance = ({ id, refresh }: { id: string, refresh?: boolean }) => {

    const { balance } = useUserStore()

    return (
        <div className='flex items-center justify-center py-5'>
            <h2 className='text-xl lg:text-3xl font-bold gap-x-2 flex items-baseline'>
                Token Balance:
                <div className='text-2xl lg:text-4xl flex gap-x-2 text-white'>
                    {balance.toLocaleString()}
                    <span className='font-bold'>
                        $TOL
                    </span>
                </div>
            </h2>
        </div>
    )
}

export default ScoreBalance
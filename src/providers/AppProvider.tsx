"use client"

import useFetchUserData from '@/hooks/useFetchUserData'
import React from 'react'

const AppProvider = ({ children, id }: { children: React.ReactNode, id: string }) => {
    useFetchUserData({ id })

    return (
        <>
            {children}
        </>
    )
}

export default AppProvider
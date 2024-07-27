"use client "

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React from 'react'

const Leaderboard = ({ id, isModalOpen }: { id: string, isModalOpen: boolean }) => {
    const closeModal = () => {
        isModalOpen = false;
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={closeModal} >

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Leaderboard</DialogTitle>
                </DialogHeader>
                <div className="mt-2 text-xl font-medium text-center">


                </div>
            </DialogContent>

        </Dialog>
    )
}

export default Leaderboard
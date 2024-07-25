"use client "

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react"

export interface ModalProps {
    title: string,
    content?: string,
    children?: ReactNode,
    closeModal: () => void,
    isModalOpen: boolean
}

const Modal = ({ title, content, closeModal, isModalOpen, children }: ModalProps) => {
    return (
        <Dialog open={isModalOpen} onOpenChange={closeModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="mt-2 text-md text-center">

                    {content || children}

                </div>
            </DialogContent>
        </Dialog>

    )
}

export default Modal
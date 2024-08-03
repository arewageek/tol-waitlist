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
import { ReactNode, useEffect } from "react";
import confetti from "canvas-confetti";

// import ShineBorder from "./magicui/shine-border";

export interface ModalProps {
    title: string,
    content?: string,
    children?: ReactNode,
    closeModal: () => void,
    isModalOpen: boolean,
    redirectUrl?: string,
    status: "success" | "error" | "alreadyOnWaitlist",
    doRedirect?: boolean
    id?: string
}

const Modal = ({ title, content, closeModal, isModalOpen, children, redirectUrl, status, doRedirect, id }: ModalProps) => {

    useEffect(() => {

        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        if (doRedirect == true) {
            status == 'success' && frame();
        }
    }, [])

    useEffect(() => {
        if (id) {
            redirectUrl != '' && setTimeout(() => window.location.href = `/waitlist/${id}`, 2000)
        }
    }, [])

    return (

        <Dialog open={isModalOpen} onOpenChange={closeModal} >

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="mt-2 text-xl font-medium text-center">

                    {content || children}

                </div>
            </DialogContent>

        </Dialog>

    )
}

export default Modal
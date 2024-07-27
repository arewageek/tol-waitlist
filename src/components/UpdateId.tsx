"use client"

import { useUserStore } from "@/store/user"
import { useEffect } from "react"


const UpdateId = ({ id }: { id: string }) => {
    const { setId } = useUserStore()

    useEffect(() => setId(id), [])
    return (
        <></>
    )

}

export default UpdateId
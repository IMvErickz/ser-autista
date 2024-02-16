'use client'

import { useContext, useEffect } from "react";
import { Avatar } from "./Avatar";
import { NewsContext } from "@/context/NewsContext";

export function Comment() {

    const { id, getComments, comments } = useContext(NewsContext)

    useEffect(() => {
        getComments(id)
    }, [id])

    return (
        <>
            {comments.map(comment => {
                return (
                    <div className="w-full flex flex-row items-center justify-start space-x-4">
                        <Avatar />
                        <div className=" flex flex-col items-start justify-center">
                            <span className="text-zinc-450 font-bold text-base">{comment.author}</span>
                            <p className="text-zinc-450 font-normal text-base">{comment.content}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
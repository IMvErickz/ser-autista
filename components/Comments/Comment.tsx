

import { Avatar } from "./Avatar";

export function Comment() {
    return (
        <div className="w-full flex flex-row items-center justify-start space-x-4">
            <Avatar />
            <div className=" flex flex-col items-start justify-center">
                <span className="text-zinc-450 font-bold text-base">Junior Santos</span>
                <p className="text-zinc-450 font-normal text-base">Adorei essa informação, me ajudou muito!</p>
            </div>
        </div>
    )
}
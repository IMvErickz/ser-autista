import Link from "next/link";
import Image from "next/image";
import { DataProps } from "@/@types/News";

export function Apresentation(props: DataProps) {
    return (
        <div className="w-full max-w-[900px] max-h-[186px] flex flex-col sm:flex-row items-center justify-center gap-y-9 sm:pt-0 pt-60 sm:gap-x-9">
            <Image src={props.imgUrl} width={344} height={18} alt="" className="rounded" />
            <div className="sm:size-full size-[300px] flex flex-col pt-1 gap-y-1">
                <Link href={`/news/${props.id}`} className="text-blue-450 font-bold text-2xl leading-9 hover:underline">
                    {props.title}
                </Link>
                <div className="max-w-[532px] h-[90px]">
                    <p className="font-normal text-sm text-zinc-750 text-justify">
                        {props.excert}
                    </p>
                </div>
            </div>
        </div>
    )
}
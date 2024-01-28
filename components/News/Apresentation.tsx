import Link from "next/link";
import Image from "next/image";
import { DataProps } from "@/@types/News";

export function Apresentation(props: DataProps) {
    return (
        <div className="w-[900px] h-[186px] flex flex-row items-center justify-center gap-x-9">
            <Image src={props.imgUrl} width={344} height={18} alt="" className="rounded" />
            <div className="size-full flex flex-col pt-1 gap-y-1">
                <Link href={`/news/${props.id}`} className="text-blue-450 font-bold text-2xl leading-9 hover:underline">
                    {props.title}
                </Link>
                <div className="w-[532px] h-[90px]">
                    <p className="font-normal text-sm text-zinc-750 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc lorem, venenatis quis maximus nec, iaculis id elit. Ut nec dolor molestie, viverra dui eu, molestie turpis. Nulla tincidunt euismod ipsum in vehicula. Donec quis ipsum neque. Ut luctus tellus sed fermentum rutrum. Quisque tincidunt suscipit elementum. Nulla ullamcorper lorem gravida magna pretium, sit amet egestas turpis interdum.
                    </p>
                </div>
            </div>
        </div>
    )
}
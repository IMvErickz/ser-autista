import { Comment } from "./Comment";

export function CommentContainer() {
    return (
        <section className="w-[764px] h-max flex flex-col items-center justify-center bg-white drop-shadow-2xl gap-y-5">
            <header className="w-full flex items-center justify-start pt-4 pl-9">
                <h3 className="text-blue-450 font-bold text-2xl leading-10">Comentários</h3>
            </header>

            <div className="w-full h-full flex flex-col items-center justify-start gap-y-7 pl-9 pb-8">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </section>
    )
}
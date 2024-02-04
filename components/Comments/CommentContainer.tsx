import { Comment } from "./Comment";
import { CreateCommentModal } from "./Modal/CreateComentModal";

export function CommentContainer() {
    return (
        <section className="w-[764px] h-max flex flex-col items-center justify-center bg-white drop-shadow-2xl gap-y-5">
            <header className="w-full flex items-center justify-between pt-4 px-4 pl-9">
                <h3 className="text-blue-450 font-bold text-2xl leading-10">Comentários</h3>
                <CreateCommentModal />
            </header>

            <div className="w-full h-max max-h-[668px] overflow-auto flex flex-col items-center justify-start gap-y-7 pl-9 pb-8">
                <Comment />
            </div>
        </section>
    )
}
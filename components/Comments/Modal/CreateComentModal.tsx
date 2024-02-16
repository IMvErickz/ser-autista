'use client'
import React, { useContext } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '@/lib/axios';
import { NewsContext } from '@/context/NewsContext';

const commentSchema = z.object({
    author: z.string(),
    content: z.string()
})

type commentSchemaData = z.infer<typeof commentSchema>

export function CreateCommentModal() {

    const { id, handleSetComments } = useContext(NewsContext)

    const { register, handleSubmit } = useForm<commentSchemaData>({
        resolver: zodResolver(commentSchema)
    })

    async function handleCreateComment(data: commentSchemaData) {
        const { author, content } = data

        await api.post(`/comment/${id}`, {
            author,
            content
        })

        handleSetComments({
            author,
            content
        })
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="text-blue-450 hover:underline">Deixe seu comentário</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[180vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-blue-450 font-bold text-3xl">
                        Deixe seu comentário
                    </Dialog.Title>
                    <Dialog.Description className="text-black text-md">
                        Nos diga o que achou sobre esta publicação
                    </Dialog.Description>
                    <form onSubmit={handleSubmit(handleCreateComment)} className="w-full flex flex-col items-center justify-center gap-y-4 pt-12">
                        <div className='w-full flex items-center justify-between gap-x-4'>
                            <label className="text-blue-450" htmlFor="name">
                                Nome
                            </label>
                            <input
                                className="w-[80%] bg-slate-400 text-white py-2 px-4 rounded"
                                id="name"
                                {...register('author')}
                            />
                        </div>
                        <div className='w-full flex items-center justify-between gap-x-4'>
                            <label className="text-blue-450" htmlFor="name">
                                Comentário
                            </label>
                            <input
                                className="w-[80%] bg-slate-400 text-white py-2 px-4 rounded"
                                id="name"
                                {...register('content')}
                            />
                        </div>
                        <button type='submit' className='bg-blue-450 py-2 px-4 rounded hover:bg-blue-450/80 transition-colors'>Enviar</button>
                    </form>
                    <Dialog.Close asChild>
                        <button
                            className="text-black hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                            X
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
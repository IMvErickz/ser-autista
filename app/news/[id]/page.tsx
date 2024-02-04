import { NewsInfo } from "@/components/pages/News/NewsInfo";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ser Autista/Notícia',
    description: 'Notícia',
}

export default function News({ params }: { params: { id: string } }) {
    return (
        <NewsInfo id={params.id} />
    )
}
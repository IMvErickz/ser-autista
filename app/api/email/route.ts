
import { EmailTemplate } from '@/components/Email/Template';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export async function POST(req: Request) {
    const { name, question } = await req.json()
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['erick.spbrasil@outlook.com'],
            subject: 'Hello world',
            text: 'asd',
            react: EmailTemplate({ firstName: name, question }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
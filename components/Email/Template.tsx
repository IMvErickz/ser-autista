import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    question: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    question
}) => (
    <div>
        <h1>Olá, sou {firstName}!</h1>
        <p>
            Minha dúvida seria: {question}
        </p>
    </div>
);

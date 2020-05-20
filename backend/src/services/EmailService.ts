interface IMailTo {
    name: string,
    email: string,
}

interface IMailMessage{
    subject: string,
    body: string,
    attachement ?: string[];
}

interface IMessageDTO{
    to : IMailTo,
    message: IMailMessage,
}

interface IEmailService{
    sendEmail( request : IMessageDTO ): void;
}

class EmailService implements IEmailService {
    sendEmail( {to , message} : IMessageDTO ) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;
interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attchmeng ?: string[];
}

interface IMessageDTo {
    to: IMailTo,
    message: IMailMessage
}

class EmailService {
 sendEmail({to, message}: IMessageDTo){
     console.log(`Email enviado para ${to.name}:${message.subject}`);
 }    
}

export default EmailService;
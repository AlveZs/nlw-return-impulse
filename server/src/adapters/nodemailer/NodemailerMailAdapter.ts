import { MailAdapter, SendMailData } from "../MailAdapter";
import nodemailer from 'nodemailer';
import { env } from 'process'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth : {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASSWORD
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe feedget <test@feedget.com>',
            to: 'João Alves <alvezsdev@gmail.com>',
            subject,
            html: body
         });
    }
}
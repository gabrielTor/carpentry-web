import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer, { Transporter } from 'nodemailer'

const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { nombre, email, mensaje, asunto } = req.body as EmailBody

    const mailOptions = {
        from: `${nombre} <${email}>`,
        to: 'dariogabrieltorres93@gmail.com',
        subject: asunto,
        html: `<p>Email: ${email}</p> 
        <p>Nombre: ${nombre}</p> 
        <p>Mensaje: ${mensaje}</p>`,
    }

    try {
        await transporter.sendMail(mailOptions)
        res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Email could not be sent, please try again at a later time.' })
    }
}
import NodeMailer from 'nodemailer'

const enviarEmail = async (usuario) => {
    
    const config = {
        host : 'smtp.gmail.com',
        port : 465,
        auth: {
            user : 'UniWork@gmail.com',
            pass : 'basbyiasybuiiu'
        }
    }

    const mensaje = {
        from : 'UniWork@gmail.com',
        to : usuario.email,
        subject : 'Bienvenido a UniWork ',
        text : `Hola ${usuario.user}`
    }

    const transport = NodeMailer.createTransport(config);

    const info = await transport.sendMail(mensaje);

    console.log(info)
}

export {enviarEmail}

//enviarEmail();
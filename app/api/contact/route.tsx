import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configurar la clave API de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const msg = {
      to: 'hernandezreyomar@gmail.com', // Destinatario
      from: 'hernandezreyomar@gmail.com', // Remitente verificado
      subject: `Nuevo Mensaje de Contacto: ${data.asunto}`,
      text: `Nombre: ${data.nombre}\nCorreo: ${data.email}\nMensaje: ${data.mensaje}`,
      html: `
        <strong>Nombre:</strong> ${data.nombre}<br/>
        <strong>Correo:</strong> ${data.email}<br/>
        <strong>Mensaje:</strong> ${data.mensaje}
      `,
    };

    // Intentar enviar el correo
    await sgMail.send(msg);
    return NextResponse.json({ message: 'Correo enviado exitosamente' }, { status: 200 });
  } catch (error: any) {
    console.error('Error al enviar el correo:', error?.response?.body || error.message);
    return NextResponse.json(
      { message: 'Error al enviar el correo', error: error?.response?.body || error.message },
      { status: 500 }
    );
  }
}

// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.eu",
    port: 465,
    secure: true,
    auth: {
      user: "info@carlavillastudio.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"Carlavilla Studio" <info@carlavillastudio.com>',
      to: "info@carlavillastudio.com",
      subject: "Solicitud de cita",
      text: data?.text || "Mensaje sin contenido",
      html: `<b>${data?.html || "Mensaje sin contenido"}</b>`,
    });

    console.log("Email enviado:", info.messageId);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error al enviar email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

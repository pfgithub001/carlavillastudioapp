import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { Redis } from "@upstash/redis";

export const dynamic = "force-dynamic";

export async function GET() {
  const redis = new Redis({
    url: process.env.REDIS_URL!,
    token: process.env.REDIS_TOKEN!,
  });

  try {
    const keys: string[] = await redis.keys("*");

    console.log("Keys encontradas:", keys);

    if (!keys || keys.length === 0) {
      console.warn("No hay emails para exportar.");
      return NextResponse.json({ message: "No hay emails para exportar." }, { status: 200 });
    }

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Newsletter");

    worksheet.columns = [
      { header: "Email", key: "email", width: 40 },
    ];

    for (const email of keys) {
      worksheet.addRow({ email });
    }

    const buffer = await workbook.xlsx.writeBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": "attachment; filename=emails.xlsx",
      },
    });
  } catch (error) {
    console.error("Error al exportar:", error);
    return NextResponse.json({ error: "Error al exportar datos." }, { status: 500 });
  }
}

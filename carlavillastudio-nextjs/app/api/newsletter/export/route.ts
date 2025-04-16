// app/api/newsletter/export/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync } from 'fs';
import * as XLSX from 'xlsx';

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');
  if (token !== process.env.NEWSLETTER_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const res = await fetch(`${process.env.REDIS_URL}/keys/*`, {
    headers: {
      Authorization: `Bearer ${process.env.REDIS_TOKEN}`,
    },
  });

  const emails = await res.json();

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet([["Email"], ...emails.map((e: string) => [e])]);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Newsletter");

  const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      'Content-Disposition': 'attachment; filename="newsletter_emails.xlsx"',
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
  });
}

"use client"

import { useState } from "react";
import AdminOverlay from "../c_admin_overlay";

export default function ExportPage() {
  const [authorized, setAuthorized] = useState(false);

  const downloadFile = async () => {
    const res = await fetch("/api/admin/export");
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "emails.xls";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      {!authorized && <AdminOverlay onSuccess={() => {
        setAuthorized(true);
        downloadFile();
      }} />}
      {authorized && (
        <div className="p-10">
          <h1 className="text-xl font-semibold">Descarga en curso...</h1>
        </div>
      )}
    </>
  );
}

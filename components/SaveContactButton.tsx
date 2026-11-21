
"use client";

import { Download } from "lucide-react";
import type { Profile } from "@/data/profiles";

function escapeVCard(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export default function SaveContactButton({
  profile,
}: {
  profile: Profile;
}) {
  function saveContact() {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${escapeVCard(profile.name)}`,
      `TITLE:${escapeVCard(profile.role)}`,
      `ORG:${escapeVCard(profile.company)}`,
      `TEL;TYPE=CELL:${profile.phone}`,
      `EMAIL:${profile.email}`,
      `URL:${profile.website}`,
      `NOTE:${escapeVCard(profile.bio)}`,
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vcard], {
      type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = `${profile.username}-contact.vcf`;

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={saveContact}
      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[10px] border border-[#DFE3E5] bg-white px-4 text-xs font-bold text-cardlink-navy transition hover:-translate-y-0.5 hover:bg-[#F7F8F8] min-[420px]:w-auto sm:gap-[9px] sm:px-[17px]"
    >
      <Download size={17} />
      Save contact
    </button>
  );
}

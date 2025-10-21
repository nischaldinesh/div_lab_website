"use client";

import React, { useState } from "react";

export default function BibtexBox({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      const t = setTimeout(() => setCopied(false), 1500);
      return () => clearTimeout(t);
    } catch {}
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        type="button"
        className="absolute -top-8 right-0 z-10 rounded-md bg-white/95 px-2.5 py-1.5 text-xs font-medium text-neutral-800 shadow-md ring-1 ring-black/10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#841617] transition"
        aria-label="Copy citation"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      <pre className="mt-2 whitespace-pre-wrap rounded-md bg-white p-4 text-sm text-neutral-800 border border-neutral-200">
        {bibtex}
      </pre>
    </div>
  );
}

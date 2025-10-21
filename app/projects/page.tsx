"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { FaFilePdf } from "react-icons/fa";

const ResearchPage = () => {
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModal(null);
    document.addEventListener("keydown", onKey);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [modal]);

  return (
    <main className="main-content px-10 py-10 bg-neutral-100 rounded-xl border border-neutral-200 shadow-sm">
      {projects.map((proj, i) => (
        <section
          key={i}
          className="mb-12 bg-white p-8 rounded-xl shadow-sm flex flex-col lg:flex-row gap-8 items-start lg:items-center"
        >
          {/* LEFT — Text and Papers */}
          <div className="flex-1">
            <h3 className="text-2xl text-[#323232] font-semibold mb-4">
              {proj.title}
            </h3>

            <p className="text-neutral-700 mb-6 leading-relaxed text-justify">
              {proj.description}
            </p>

            {/* Related Papers */}
            <div className="space-y-3">
              <p className="font-semibold text-[#323232]">Related Papers:</p>

              {proj.papers.map((paper, k) => (
                <div key={k} className="text-sm text-neutral-700">
                  <span className="inline">
                    {paper.title}
                    <Link
                      href={paper.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open PDF for ${paper.title}`}
                      className="ml-2 inline-block align-middle text-[#841617] hover:text-[#a8201a] transition-colors"
                    >
                      <FaFilePdf className="text-base" />
                    </Link>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image */}
          <div className="flex-shrink-0 w-full lg:w-[40%] flex items-center justify-center">
            {proj.images[0] && (
              <Image
                src={proj.images[0].src}
                alt={proj.images[0].alt}
                width={800}
                height={500}
                className="block mx-auto rounded-lg cursor-pointer hover:opacity-90 transition object-cover w-full h-auto"
                onClick={() => setModal(proj.images[0])}
              />
            )}
          </div>
        </section>
      ))}
      {modal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 backdrop-blur-md p-2 sm:p-4"
          onClick={() => setModal(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setModal(null)}
            className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-md ring-1 ring-black/10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#841617] transition"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[min(98vw,1600px)] h-[min(92vh,1000px)]"
          >
            <Image
              src={modal.src}
              alt={modal.alt}
              fill
              priority
              className="object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default ResearchPage;

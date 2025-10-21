"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  publications,
  publicationsIntro,
  Publication,
} from "@/data/publications";

function usePublicationsByYear(data: Publication[]) {
  return useMemo(() => {
    const map = new Map<number, Publication[]>();
    data.forEach((p) => {
      if (!map.has(p.year)) map.set(p.year, []);
      map.get(p.year)!.push(p);
    });
    const years = Array.from(map.keys()).sort((a, b) => b - a);
    return years.map((year) => ({ year, items: map.get(year)! }));
  }, [data]);
}

const PublicationsPage: React.FC = () => {
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);
  const years = usePublicationsByYear(publications);

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
    <main className="main-content mx-4 md:mx-8  px-5 md:px-10 py-8">
      <section className="mb-6">
        <p className="text-neutral-800 leading-relaxed">
          {publicationsIntro.description} <br />
          <Link href="/venues" className="underline text-blue-500">
            List of venues (conferences & venues), where we submit our works
          </Link>
          {/* <strong>Keywords:</strong> {publicationsIntro.keywords.join(", ")} */}
        </p>
      </section>

      {years.map(({ year, items }) => (
        <section key={year} className="year-section mb-10">
          <div className="flex items-end gap-3">
            <h2 className="text-2xl font-bold">{year}</h2>
          </div>
          <hr className="my-3 border-black" />

          <div className="space-y-6">
            {items.map((pub, idx) => (
              <article
                key={`${pub.title}-${idx}`}
                className="publication-card flex flex-col lg:flex-row items-start gap-6 rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="publication-content flex-1">
                  <h3 className="publication-title text-lg md:text-xl font-semibold text-justify">
                    {pub.title}
                  </h3>

                  {pub.highlight && (
                    <p className="mt-1 text-sm font-semibold text-red-600">
                      {pub.highlight}
                    </p>
                  )}

                  <p className="publication-detail mt-2 text-sm text-neutral-700 text-justify">
                    {pub.authors} {pub.venue}{" "}
                    <Link
                      href={`/publications/${pub.slug}`}
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      Read More
                    </Link>
                  </p>

                  {pub.links?.length > 0 && (
                    <div className="publication-links mt-4 flex flex-wrap gap-2">
                      {pub.links.map((l, i) => (
                        <Link
                          key={`${l.label}-${i}`}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button inline-flex items-center rounded-md border border-neutral-200 bg-[#f0f0f0] px-3 py-1.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="publication-image-container w-full lg:w-[38%] flex justify-center">
                  <Image
                    src={pub.image.src}
                    alt={pub.image.alt}
                    width={900}
                    height={600}
                    className="publication-image block w-full h-auto rounded-lg shadow-sm cursor-pointer hover:opacity-90 transition"
                    onClick={() => setModal(pub.image)}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {modal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 backdrop-blur-md p-2 sm:p-4 cursor-zoom-out"
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
            className="relative w-[min(98vw,1600px)] h-[min(92vh,1000px)] cursor-default"
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

export default PublicationsPage;

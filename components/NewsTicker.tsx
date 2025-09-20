"use client";

import Link from "next/link";
import { newsData } from "@/data/news";

export default function NewsTicker() {
  const items = newsData.slice(0, 3);

  return (
    <section
      aria-label="Latest news"
      className="relative z-[100] w-full overflow-hidden 
                 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-indigo-600 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-pink-600 to-transparent" />

      <div className="group relative flex h-10 items-center">
        <div className="flex w-max animate-marquee-slow motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          <TickerRow items={items} />
          <TickerRow items={items} />
        </div>
      </div>
    </section>
  );
}

function TickerRow({
  items,
}: {
  items: {
    date: string;
    content: string;
    link?: string;
    conferenceLink?: string;
  }[];
}) {
  return (
    <ul className="flex items-center gap-10 whitespace-nowrap px-6">
      {items.map((n, i) => (
        <li
          key={i}
          className="flex items-center gap-3 text-[14px] font-medium leading-none"
        >
          <span className="text-white">
            {n.content}{" "}
            {n.link ? (
              <Link
                href={n.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline underline-offset-2 hover:text-yellow-200"
              >
                paper
              </Link>
            ) : null}
            {n.conferenceLink ? (
              <Link
                href={n.conferenceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-white/90 underline underline-offset-2 hover:text-yellow-200"
              >
                venue
              </Link>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

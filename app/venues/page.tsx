"use client";

import { useEffect, useState } from "react";
import { VENUE_GROUPS, DEADLINES, VenueLite, DISPLAY_TZ } from "@/data/venues";

function formatDate(dateStr?: string | null): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "TBA";
  return new Intl.DateTimeFormat("en-US", {
    timeZone: DISPLAY_TZ,
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

function getTimeLeft(dateStr?: string | null): string {
  if (!dateStr) return "—";
  const deadline = new Date(dateStr);
  if (isNaN(deadline.getTime())) return "TBA";

  const diff = deadline.getTime() - Date.now();
  if (diff <= 0) return "Deadline passed";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}

function getNextYearDeadline(dateStr?: string | null): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "—";
  d.setFullYear(d.getFullYear() + 1);
  return formatDate(d.toISOString());
}

function isJournal(key: string): boolean {
  return ["tvcg", "cgf", "tsc", "tochi"].includes(key);
}

function VenueRow({ v }: { v: VenueLite }) {
  const deadline = DEADLINES[v.key] || {};
  const journal = isJournal(v.key);

  const absStr = journal ? null : deadline.abs ?? null;
  const finStr = journal ? null : deadline.final ?? null;

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(finStr));
  const isPassed = timeLeft === "Deadline passed";

  useEffect(() => {
    if (!finStr) return;
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(finStr));
    }, 1000);
    return () => clearInterval(timer);
  }, [finStr]);

  return (
    <tr className="border-b">
      <td className="px-4 py-3 text-sm font-medium text-blue-600">
        <a href={v.url} target="_blank" rel="noopener noreferrer">
          {v.name}
        </a>
      </td>

      <td className="px-4 py-3 text-sm text-black">{formatDate(absStr)}</td>

      <td className="px-4 py-3 text-sm text-black">{formatDate(finStr)}</td>

      <td
        className={`px-4 py-3 text-sm ${
          isPassed ? "text-red-600 font-semibold" : "text-black"
        }`}
      >
        {timeLeft}
      </td>

      <td className="px-4 py-3 text-sm text-black">
        {getNextYearDeadline(finStr)}
      </td>
    </tr>
  );
}

export default function VenuesPage() {
  return (
    <div className="w-full p-4">
      <h1 className="mb-6 text-2xl font-bold">
        Venue Submissions Deadlines ⏱️
      </h1>

      {VENUE_GROUPS.map((group) => (
        <section key={group.category} className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-blue-600">
            {group.category}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Venue</th>
                  <th className="px-4 py-2">Abstract Deadline</th>
                  <th className="px-4 py-2">Main Paper Deadline</th>
                  <th className="px-4 py-2">Time Left</th>
                  <th className="px-4 py-2">Next Year Deadline</th>
                </tr>
              </thead>
              <tbody>
                {group.venues.map((v) => (
                  <VenueRow key={v.key} v={v} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}

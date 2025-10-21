"use client";

import newsData from "@/data/news";
function parseMonthYear(mmyyyy: string): Date {
  const [mmRaw, yyyyRaw] = mmyyyy.split("-").map((s) => s.trim());
  const mm = parseInt(mmRaw, 10) - 1 || 0;
  const yyyy = parseInt(yyyyRaw, 10) || 1970;
  return new Date(yyyy, mm, 1);
}

function buildContentHTML(
  content: string,
  paperLink?: string,
  confLink?: string
) {
  let html = content;

  const titleMatch = content.match(/"([^"]+)"/);
  if (titleMatch && paperLink) {
    const title = titleMatch[1];
    html = html.replace(
      `"${title}"`,
      `<span class="paper-title" data-link="${paperLink}">"${title}"</span>`
    );
  }

  const confCandidates = [
    "IEEE VIS 2025",
    "IEEE VIS 2024",
    "EuroVis 2024",
    "ACM CHI 2024",
    "ACM ASSETS 2024",
    "Dagstuhl",
    "BELIV",
    "IEEE TVCG",
  ];

  if (confLink) {
    for (const conf of confCandidates) {
      if (html.includes(conf)) {
        html = html.replace(
          conf,
          `<span class="conference-name" data-link="${confLink}">${conf}</span>`
        );
        break;
      }
    }
  }

  return html;
}

export default function News() {
  const latest = [...newsData]
    .sort((a, b) => +parseMonthYear(b.date) - +parseMonthYear(a.date))
    .slice(0, 10);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;
    if (target.matches(".paper-title, .conference-name")) {
      const url = target.getAttribute("data-link");
      if (url) window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="mt-6 rounded border border-neutral-200 bg-neutral-100 p-4 text-sm">
      <h2 className="mb-3 text-base font-semibold text-neutral-900">
        News and Updates
      </h2>

      <div
        className="grid grid-cols-[max-content_1fr] items-baseline gap-x-4 gap-y-2"
        onClick={handleClick}
      >
        {latest.map((n, i) => {
          const contentHTML = buildContentHTML(
            n.content,
            n.link,
            n.conferenceLink
          );
          return (
            <div className="contents" key={`${n.date}-${i}`}>
              <div className="text-left text-[0.8rem] text-neutral-900">
                {n.date}
              </div>
              <div
                className="-ml-2 pl-1 text-[0.8rem] text-neutral-600"
                dangerouslySetInnerHTML={{ __html: contentHTML }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

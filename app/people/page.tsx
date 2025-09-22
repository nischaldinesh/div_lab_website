import {
  DIRECTOR,
  STUDENTS,
  ALUMNI,
  COLLABORATORS,
  Person,
  Collaborator,
  Social,
} from "@/data/people";
import Image from "next/image";
import Link from "next/link";

const SOCIAL_ICON: Record<Social["type"], { src: string; alt: string }> = {
  web: { src: "/icons/internet.png", alt: "Website" },
  scholar: { src: "/icons/google_scholar.png", alt: "Google Scholar" },
  linkedin: { src: "/icons/linkedin.png", alt: "LinkedIn" },
  mail: { src: "/icons/mail.png", alt: "Email" },
};

function PersonCard({
  person,
  showFocus,
}: {
  person: Person;
  showFocus: boolean;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 md:p-6">
      <div className="flex flex-col items-center text-center">
        <Image
          src={person.img}
          alt={person.name}
          width={120}
          height={120}
          className="h-[120px] w-[120px] rounded-full object-cover"
        />
        <h3 className="mt-3 font-medium text-black">{person.name}</h3>

        <p className="text-xs text-black">
          {person.role}
          {person.subtitle && (
            <>
              <br />

              {!showFocus && person.subtitle.includes("—")
                ? person.subtitle.split("—").map((line, i) => (
                    <span key={i}>
                      {line.trim()}
                      <br />
                    </span>
                  ))
                : person.subtitle}
            </>
          )}
        </p>
      </div>

      {showFocus && person.focus && person.focus.length > 0 && (
        <p className="mt-3 text-sm text-black text-center">
          {person.focus.join(", ")}
        </p>
      )}

      {person.socials && person.socials.length > 0 && (
        <div className="mt-3 flex justify-center gap-3">
          {person.socials.map((s, i) => {
            const icon = SOCIAL_ICON[s.type];
            const Anchor = s.href.startsWith("http") ? Link : "a";
            const anchorProps = s.href.startsWith("http")
              ? { href: s.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: s.href };

            return (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <Anchor key={i} {...(anchorProps as any)}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  className="opacity-80 transition hover:opacity-100"
                />
              </Anchor>
            );
          })}
        </div>
      )}
    </div>
  );
}

function DirectorCard({ person }: { person: Person }) {
  return (
    <div className="flex max-w-2xl items-start gap-8 rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5">
      <div className="relative h-40 w-40 overflow-hidden rounded-md bg-neutral-200">
        <Image
          src={person.img}
          alt={person.name}
          fill
          className="object-cover"
          sizes="160px"
          priority
        />
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-black">{person.name}</h3>
        <p className="mt-1 text-sm text-black">
          {person.role}
          {person.subtitle && (
            <>
              <br />
              {person.subtitle}
            </>
          )}
        </p>

        {person.focus && person.focus.length > 0 && (
          <p className="mt-2 text-sm text-black">{person.focus.join(", ")}</p>
        )}

        {person.socials && (
          <div className="mt-3 flex items-center gap-3">
            {person.socials.map((s, i) => {
              const icon = SOCIAL_ICON[s.type];
              const Anchor = s.href.startsWith("http") ? Link : "a";
              const anchorProps = s.href.startsWith("http")
                ? { href: s.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: s.href };

              return (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <Anchor key={i} {...(anchorProps as any)}>
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={20}
                    height={20}
                    className="opacity-80 transition hover:opacity-100"
                  />
                </Anchor>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function CollaboratorCard({ c }: { c: Collaborator }) {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-16 w-16 overflow-hidden rounded-full bg-neutral-200">
        <Image
          src={c.img}
          alt={`${c.name} Logo`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-base font-semibold text-black">
          <a
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            {c.name}
          </a>
        </h3>
        <p className="text-sm text-black">{c.org}</p>
      </div>
    </div>
  );
}

export default function PeoplePage() {
  return (
    <div className="space-y-10 p-4">
      {/* <section>
        <h2 className="mb-4 text-2xl font-semibold text-black">
          Current Members
        </h2>
        <DirectorCard person={DIRECTOR} />
      </section> */}

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-black">
          Current Members
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {STUDENTS.map((p) => (
            <PersonCard key={p.name} person={p} showFocus={true} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-black">Alumni</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {ALUMNI.map((p) => (
            <PersonCard key={p.name} person={p} showFocus={false} />
          ))}
        </div>
      </section>

      <section className="rounded-lg bg-neutral-100 p-6">
        <h3 className="text-xl font-semibold text-black">Our Collaborators</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {COLLABORATORS.map((c) => (
            <CollaboratorCard key={c.name} c={c} />
          ))}
        </div>
      </section>
    </div>
  );
}

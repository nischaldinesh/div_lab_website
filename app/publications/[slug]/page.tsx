import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { publications } from "@/data/publications";
import BibtexBox from "@/components/BibtexBox";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return publications.map((p) => ({ slug: p.slug }));
}

export default function PublicationDetailPage({ params }: Props) {
  const pub = publications.find((p) => p.slug === params.slug);
  if (!pub) return notFound();

  const hero = pub.detail?.hero ?? pub.image;
  const pdfPrimary =
    pub.detail?.pdf ||
    pub.links.find((l) => ["PDF", "Preprint"].includes(l.label))?.href;

  return (
    <main className="main-content mx-4 md:mx-8 my-6  px-5 md:px-10 py-8 shadow-sm">
      <section className="pub-detail">
        <div className="pub-header mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-justify">
            {pub.title}
          </h1>
          <div className="pub-meta mt-3 text-neutral-700 text-justify">
            <p className="authors">{pub.authors}</p>
            <p className="venue">{pub.venue}</p>
          </div>
        </div>

        <div className="pub-content flex flex-col items-center gap-8">
          <div className="pub-image w-full flex justify-center">
            <Image
              src={hero.src}
              alt={hero.alt}
              width={1200}
              height={800}
              className="teaser-image block mx-auto rounded-lg shadow-sm w-full h-auto max-w-5xl"
              priority
            />
          </div>

          {pub.detail?.abstract && (
            <div className="pub-abstract w-full max-w-3xl">
              <h2 className="text-xl font-semibold mb-2">Abstract</h2>
              <p className="leading-relaxed text-neutral-800 text-justify">
                {pub.detail.abstract}
              </p>
            </div>
          )}

          {pdfPrimary && (
            <div className="pub-resources w-full max-w-3xl">
              <h2 className="text-xl font-semibold mb-3">Resources</h2>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={pdfPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-green-400 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  <Image
                    src="/icons/download.png"
                    alt="PDF"
                    width={20}
                    height={20}
                  />
                  PDF
                </Link>
              </div>
            </div>
          )}

          {pub.detail?.bibtex && (
            <div className="bibtex-content w-full max-w-3xl">
              <h3 className="text-lg font-semibold mb-2">Citation</h3>
              <BibtexBox bibtex={pub.detail.bibtex} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

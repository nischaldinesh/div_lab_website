import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[400px] w-full items-center justify-center overflow-hidden text-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="flex h-full w-[200%] animate-[moveImageHorizontal_20s_linear_infinite]">
          <div className="relative h-full w-1/2">
            <Image
              src="/images/bgg.png"
              alt="Background 1"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative h-full w-1/2">
            <Image
              src="/images/bgg.png"
              alt="Background 2"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Image
          src="/images/div-initial_concept-1-linear.png"
          alt="DivLab Logo"
          width={800}
          height={200}
          className="mx-auto h-auto w-auto max-w-full"
          priority
        />
        <Link
          href="/projects"
          className="mt-6 inline-block border border-neutral-900 px-5 py-3 text-sm uppercase tracking-wide text-green-700 transition hover:bg-white hover:text-black"
        >
          Discover our Projects
        </Link>
      </div>
    </section>
  );
}

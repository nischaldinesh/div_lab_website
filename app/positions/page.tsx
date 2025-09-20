import Link from "next/link";

export default function PositionsPage() {
  return (
    <section className="w-full p-4">
      <h1 className="mb-6 text-2xl font-semibold">Open Positions</h1>

      <p className="mb-8  text-neutral-800">
        We recruit motivated students and researchers to join our group at
        DIV-Lab, University of Oklahoma. Currently we have no funded positions
        available for Spring 2026.
      </p>

      <div className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">
          Prospective Ph.D./M.S. students
        </h2>
        <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-black/5">
          <div className="space-y-4 text-neutral-800">
            <p>
              Our primary research areas are{" "}
              <strong>Information Visualization</strong> and{" "}
              <strong>Human-Computer Interaction</strong>, focusing on
              constructing optimal visual design, exploring and understanding
              high-level visualization comprehension, empirical studies,
              graphical perception, human-centered computing, and human-computer
              interfaces. We publish our work at premier venues in visualization
              (e.g., IEEE VIS, IEEE TVCG, EuroVis) and human-computer
              interaction (e.g., ACM CHI and ACM ASSETS). We encourage you to
              familiarize yourself with our projects and publications before
              emailing. Please refer to our{" "}
              <Link href="/projects" className="text-blue-600 hover:underline">
                projects
              </Link>{" "}
              page.
            </p>

            <div>
              <h4 className="mb-1 font-semibold">Requirements:</h4>
              <p>
                The student should have a B.S. or M.S. in computer science or
                related disciplines and must exhibit strong programming,
                writing, and verbal communication skills.
              </p>
            </div>

            <div className="rounded-md bg-neutral-50 p-4 ring-1 ring-neutral-200">
              <p className="text-neutral-800">
                <strong>About applications:</strong> If you are interested in
                joining our lab, make sure to contact the faculty member/advisor
                of interest before applying to the University. Funding is
                typically available through teaching assistantships (TA),
                research assistantships (RA), or fellowships for students in
                good standing.
              </p>
            </div>

            <div className="rounded-md bg-neutral-50 p-4 ring-1 ring-neutral-200">
              <p className="text-neutral-800">
                <strong>About emails:</strong> If you are emailing to join the
                lab, mention <em>&quot;Prospective Student&quot;</em> in your
                email subject. Send your CV, transcripts, test scores, and
                research statement in the{" "}
                <a
                  href="mailto:quadri@ou.edu"
                  className="text-blue-600 hover:underline"
                >
                  email
                </a>
                . We review all emails, so avoid multiple emails and follow-ups.
                We will get back to you if we think your research interests
                match ours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">
          Existing Master&apos;s or Undergraduate students at OU
        </h2>
        <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-black/5">
          <p className="text-neutral-800">
            If you are a current Master&apos;s or undergraduate student at the
            University of Oklahoma, we can discuss opportunities for independent
            study, research positions, or summer internships. Please{" "}
            <a
              href="mailto:quadri@ou.edu"
              className="text-blue-600 hover:underline"
            >
              email
            </a>{" "}
            with your project interests.
          </p>
        </div>
      </div>
      <div className="mb-2">
        <h2 className="mb-3 text-xl font-semibold">Other Opportunities</h2>
        <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-black/5">
          <p className="text-neutral-800">
            We welcome both on-campus and external collaborations. If
            interested, please reach out directly.
          </p>
        </div>
      </div>
    </section>
  );
}

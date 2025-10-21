export default function ContactsPage() {
  return (
    <section className="w-full p-8">
      <h1 className="mb-6 text-2xl font-semibold">Contact Us</h1>

      <div className="flex w-full flex-wrap gap-6">
        <div className="min-w-[300px] flex-1">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                Address
              </h3>
              <p className="text-neutral-700">
                Devon Energy Hall, Second Floor
                <br />
                110 W. Boyd St.
                <br />
                Norman, OK 73019
              </p>
              <h4 className="mt-4 mb-2 text-base font-semibold text-neutral-900">
                Email
              </h4>
              <p>
                <a
                  href="mailto:quadri@ou.edu"
                  className="text-blue-600 hover:underline"
                >
                  quadri@ou.edu
                </a>
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-base font-semibold text-neutral-900">
                Finding Us
              </h4>
              <p className="text-neutral-700">
                Devon Energy Hall is located on the University of Oklahoma,
                Norman. Visitor parking is available in the nearby parking
                garage on Jenkins Avenue. The DIV-Lab is located on the 2nd
                floor.
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-full md:min-w-[500px] md:max-w-[400px] md:flex-1">
          <div className="h-[300px] rounded-xl border border-neutral-400 md:h-[500px]">
            <iframe
              title="Devon Energy Hall Map"
              className="h-full w-full rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.715857863885!2d-97.4481133844617!3d35.217534579116835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a375f8b6a37a7f%3A0x4c3d6b5e2a23f25f!2sDevon%20Energy%20Hall!5e0!3m2!1sen!2sus!4v1672573200000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

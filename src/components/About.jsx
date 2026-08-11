function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

        {/* Visual */}

        <div className="relative mx-auto w-full max-w-xl lg:mx-0">

          {/* Background glow */}

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />

          {/* Main visual */}

          <div className="relative overflow-hidden rounded-[2rem] bg-gray-950 p-4 shadow-xl sm:p-5">

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600">

              {/* Decorative circles */}

              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10 blur-2xl" />

              {/* Main content */}

              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">

                <div className="flex items-center justify-between">

                  <span className="text-sm font-semibold text-white">
                    DIGITALBOOST
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur">
                    Since 2016
                  </span>

                </div>

                <div>

                  <p className="max-w-xs text-3xl font-bold leading-tight text-white sm:text-4xl">
                    We turn
                    <span className="text-indigo-200">
                      {" "}ideas
                    </span>
                    {" "}into
                    <span className="text-indigo-200">
                      {" "}growth.
                    </span>
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">

                      <p className="text-2xl font-bold text-white sm:text-3xl">
                        10+
                      </p>

                      <p className="mt-1 text-xs text-indigo-100">
                        Years experience
                      </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">

                      <p className="text-2xl font-bold text-white sm:text-3xl">
                        200+
                      </p>

                      <p className="mt-1 text-xs text-indigo-100">
                        Brands grown
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Decorative orbit */}

              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-52 sm:w-52" />

              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 sm:h-32 sm:w-32" />

              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg font-bold text-indigo-600 shadow-xl">
                +
              </div>

            </div>
          </div>

          {/* Floating result card */}

          <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:block lg:-right-8">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                ↗
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Average growth
                </p>

                <p className="text-lg font-bold text-gray-900">
                  +184%
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Content */}

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 sm:text-sm">
            Who we are
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Marketing isn't about
            <span className="block text-indigo-600">
              being everywhere.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            It's about being in the right place, with the right
            message, at the right moment.
          </p>

          <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            DigitalBoost is a full-service digital marketing agency
            helping ambitious businesses turn attention into
            measurable growth. We combine strategy, creative
            thinking, technology, and data to build marketing
            systems that actually move the numbers.
          </p>

          {/* Feature list */}

          <div className="mt-8 space-y-4">

            <div className="flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
                ✓
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Strategy first
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Every campaign starts with a clear business
                  objective and measurable outcome.
                </p>
              </div>

            </div>

            <div className="flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
                ✓
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Data-driven decisions
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  We use performance data to understand what works,
                  what doesn't, and where to scale.
                </p>
              </div>

            </div>

            <div className="flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
                ✓
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Focused on results
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Vanity metrics are nice. Business growth is what
                  actually matters.
                </p>
              </div>

            </div>

          </div>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-600"
          >
            Work with us
            <span className="ml-2 text-lg">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;
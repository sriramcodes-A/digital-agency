const results = [
  {
    value: "200+",
    label: "Brands scaled",
    description: "Businesses we've helped move forward.",
  },
  {
    value: "5.2x",
    label: "Average ROI",
    description: "Average return generated across campaigns.",
  },
  {
    value: "84K+",
    label: "Monthly visitors",
    description: "Organic and paid traffic generated.",
  },
  {
    value: "95%",
    label: "Client retention",
    description: "Long-term partnerships built on results.",
  },
];

function Stats() {
  return (
    <section
      id="results"
      className="overflow-hidden bg-gray-950 py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">

          {/* Heading */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 sm:text-sm">
              The numbers
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Results speak
              <span className="block text-indigo-400">
                louder than promises.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              We measure success by the things that actually
              matter to a business: visibility, qualified traffic,
              conversions, revenue, and long-term growth.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-400 hover:text-white"
            >
              See what we can do
              <span className="ml-2 text-lg">
                →
              </span>
            </a>
          </div>

          {/* Main result visual */}

          <div className="relative">

            {/* Glow */}

            <div className="pointer-events-none absolute -inset-10 rounded-full bg-indigo-600/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-7">

              {/* Top row */}

              <div className="flex items-center justify-between border-b border-white/10 pb-5">

                <div>
                  <p className="text-xs text-gray-500">
                    Campaign performance
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    Growth overview
                  </p>
                </div>

                <span className="rounded-full bg-green-400/10 px-3 py-1.5 text-xs font-semibold text-green-400">
                  +184% growth
                </span>

              </div>

              {/* Graph */}

              <div className="mt-8">

                <div className="flex h-44 items-end gap-2 sm:h-56 sm:gap-3">

                  {[
                    22,
                    30,
                    27,
                    38,
                    34,
                    47,
                    44,
                    59,
                    55,
                    68,
                    76,
                    91,
                  ].map((height, index) => (
                    <div
                      key={index}
                      className="group relative flex h-full flex-1 items-end"
                    >
                      <div
                        className="w-full rounded-t-lg bg-indigo-500/80 transition duration-300 group-hover:bg-indigo-400"
                        style={{
                          height: `${height}%`,
                        }}
                      />
                    </div>
                  ))}

                </div>

                <div className="mt-3 flex justify-between text-[10px] text-gray-600 sm:text-xs">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Nov</span>
                </div>

              </div>

              {/* Results */}

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

                {results.map((result) => (
                  <div
                    key={result.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.07]"
                  >
                    <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {result.value}
                    </p>

                    <p className="mt-1 text-xs font-medium text-indigo-300">
                      {result.label}
                    </p>

                    <p className="mt-2 hidden text-[11px] leading-4 text-gray-500 sm:block">
                      {result.description}
                    </p>
                  </div>
                ))}

              </div>

            </div>

            {/* Floating badge */}

            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-gray-900 p-4 shadow-xl sm:block lg:-left-8">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400/10 text-green-400">
                  ↗
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Revenue generated
                  </p>

                  <p className="text-lg font-bold">
                    ₹24.8L+
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom statement */}

        <div className="mt-20 border-t border-white/10 pt-10 sm:mt-24 lg:mt-28">

          <div className="grid gap-6 sm:grid-cols-3 sm:items-center">

            <p className="text-sm font-medium text-gray-400">
              Strategy
              <span className="mx-2 text-indigo-400">→</span>
              Execution
            </p>

            <p className="text-sm font-medium text-gray-400 sm:text-center">
              Data
              <span className="mx-2 text-indigo-400">→</span>
              Optimization
            </p>

            <p className="text-sm font-medium text-gray-400 sm:text-right">
              Growth
              <span className="mx-2 text-indigo-400">→</span>
              Scale
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;
function Hero() {
  const chartBars = [32, 45, 38, 58, 52, 68, 61, 76, 72, 88, 82, 96];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 75%)",
        }}
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 top-1/2 h-[400px] w-[400px] rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">

        {/* LEFT CONTENT */}

        <div className="text-center lg:text-left">

          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700 sm:text-sm lg:mx-0">
            <span className="h-2 w-2 rounded-full bg-indigo-600" />
            Digital growth that delivers
          </div>

          <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:mx-0 lg:text-6xl xl:text-7xl">
            Turn attention into
            <span className="block text-indigo-600">
              real growth.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
            We build data-driven digital marketing strategies
            that attract the right audience, increase conversions,
            and turn your brand into a growth engine.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Get a Free Strategy Call
              <span className="ml-2 text-lg">
                →
              </span>
            </a>

            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition duration-300 hover:border-indigo-600 hover:text-indigo-600"
            >
              Explore Services
            </a>

          </div>

          {/* Trust stats */}

          <div className="mx-auto mt-9 flex max-w-md items-center justify-center divide-x divide-gray-200 lg:mx-0 lg:justify-start">

            <div className="px-4 first:pl-0">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                200+
              </p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Brands
              </p>
            </div>

            <div className="px-4">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                5x
              </p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Avg. ROI
              </p>
            </div>

            <div className="px-4 last:pr-0">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                95%
              </p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Retention
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT VISUAL */}

        <div className="relative mx-auto w-full max-w-xl">

          {/* Main glow */}

          <div className="absolute inset-10 rounded-full bg-indigo-300/30 blur-3xl" />

          {/* Dashboard */}

          <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-gray-950 p-3 shadow-2xl sm:p-4">

            {/* Browser header */}

            <div className="flex items-center gap-2 border-b border-gray-800 px-2 pb-4">

              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

              <div className="ml-3 h-7 flex-1 rounded-lg bg-gray-800" />

            </div>

            {/* Dashboard content */}

            <div className="mt-4 grid gap-3">

              {/* Main analytics card */}

              <div className="rounded-2xl bg-white p-4 sm:p-5">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-xs font-medium text-gray-500">
                      Campaign performance
                    </p>

                    <div className="mt-1 flex items-baseline gap-2">

                      <span className="text-2xl font-bold text-gray-950 sm:text-3xl">
                        +248%
                      </span>

                      <span className="text-xs font-semibold text-green-600">
                        ↑ 32.4%
                      </span>

                    </div>
                  </div>

                  <div className="rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-600">
                    This year
                  </div>

                </div>

                {/* Chart */}

                <div className="mt-7 flex h-32 items-end gap-1.5 sm:h-40 sm:gap-2">

                  {chartBars.map((height, index) => (
                    <div
                      key={index}
                      className="group relative flex h-full flex-1 items-end"
                    >
                      <div
                        className="w-full rounded-t-md bg-indigo-500 transition-all duration-300 group-hover:bg-indigo-700"
                        style={{
                          height: `${height}%`,
                        }}
                      />
                    </div>
                  ))}

                </div>

                <div className="mt-3 flex justify-between text-[10px] text-gray-400 sm:text-xs">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Nov</span>
                </div>

              </div>

              {/* Bottom metrics */}

              <div className="grid grid-cols-3 gap-3">

                <div className="rounded-2xl bg-gray-900 p-4">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-sm text-indigo-400">
                    ↗
                  </div>

                  <p className="mt-3 text-[10px] text-gray-500 sm:text-xs">
                    Traffic
                  </p>

                  <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                    84.2K
                  </p>

                </div>

                <div className="rounded-2xl bg-gray-900 p-4">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/20 text-sm text-green-400">
                    ✓
                  </div>

                  <p className="mt-3 text-[10px] text-gray-500 sm:text-xs">
                    Leads
                  </p>

                  <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                    3,842
                  </p>

                </div>

                <div className="rounded-2xl bg-gray-900 p-4">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-sm text-purple-400">
                    $
                  </div>

                  <p className="mt-3 text-[10px] text-gray-500 sm:text-xs">
                    Revenue
                  </p>

                  <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                    ₹24.8L
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* Floating conversion card */}

          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:block">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                ↗
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Conversion rate
                </p>

                <p className="text-lg font-bold text-gray-900">
                  18.7%
                </p>
              </div>

            </div>

          </div>

          {/* Floating ROI card */}

          <div className="absolute -right-4 top-10 hidden rounded-2xl bg-indigo-600 px-5 py-4 text-white shadow-xl sm:block">

            <p className="text-xs text-indigo-100">
              Average ROI
            </p>

            <p className="mt-1 text-2xl font-bold">
              5.2x
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "SEO Growth",
    shortDescription:
      "Build long-term organic visibility and attract customers who are already searching for what you offer.",
    description:
      "We create a complete SEO growth strategy around your business, audience, competitors, and search opportunities. From technical optimization to content strategy, every part of the system is designed to increase qualified organic traffic and conversions.",
    tags: ["SEO", "Analytics", "Content"],
    includes: [
      "Technical SEO audit",
      "Keyword and competitor research",
      "On-page optimization",
      "Content strategy",
      "Performance tracking",
    ],
    outcomes: [
      "Higher search visibility",
      "More qualified organic traffic",
      "Improved conversion opportunities",
    ],
    visual: "search",
  },
  {
    number: "02",
    title: "Paid Advertising",
    shortDescription:
      "Turn advertising budgets into predictable growth with targeted campaigns across high-intent channels.",
    description:
      "We design and optimize paid advertising campaigns around your customer journey. Every campaign is continuously analyzed and refined so your budget is focused on audiences, creatives, and channels that generate meaningful results.",
    tags: ["Google Ads", "Meta Ads", "Retargeting"],
    includes: [
      "Campaign strategy",
      "Audience research",
      "Ad creative direction",
      "Conversion tracking",
      "Continuous optimization",
    ],
    outcomes: [
      "Better return on ad spend",
      "Lower acquisition costs",
      "More qualified leads",
    ],
    visual: "ads",
  },
  {
    number: "03",
    title: "Social Media",
    shortDescription:
      "Create a recognizable brand presence with content and campaigns that turn attention into engagement.",
    description:
      "We build social media systems that make your brand recognizable, relevant, and consistent. From content planning to campaign execution, we focus on creating meaningful interactions with the people who matter to your business.",
    tags: ["Instagram", "LinkedIn", "Content"],
    includes: [
      "Social media strategy",
      "Content planning",
      "Creative direction",
      "Community engagement",
      "Performance reporting",
    ],
    outcomes: [
      "Stronger brand awareness",
      "Higher audience engagement",
      "Consistent social presence",
    ],
    visual: "social",
  },
  {
    number: "04",
    title: "Content Strategy",
    shortDescription:
      "Build content systems that educate your audience, strengthen your authority, and generate demand.",
    description:
      "We develop content strategies that connect your expertise with the questions your customers are actually asking. The goal is not simply to publish more content, but to create content that earns attention and supports your business objectives.",
    tags: ["Strategy", "Copywriting", "Creative"],
    includes: [
      "Content research",
      "Editorial planning",
      "Copywriting",
      "Creative concepts",
      "Content performance analysis",
    ],
    outcomes: [
      "Stronger brand authority",
      "More valuable website traffic",
      "A repeatable content system",
    ],
    visual: "content",
  },
];

function SearchVisual() {
  return (
    <div className="relative h-52 overflow-hidden rounded-2xl bg-gray-950 p-5">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-600/30 blur-2xl" />

      <div className="relative rounded-xl bg-white p-4 shadow-lg">
        <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2">
          <span className="text-gray-400">⌕</span>
          <span className="text-xs text-gray-500">
            digital marketing agency
          </span>
        </div>

        <div className="mt-4 space-y-3">
          <div>
            <div className="h-2 w-3/4 rounded bg-indigo-500" />
            <div className="mt-2 h-2 w-full rounded bg-gray-100" />
            <div className="mt-2 h-2 w-2/3 rounded bg-gray-100" />
          </div>

          <div>
            <div className="h-2 w-2/3 rounded bg-indigo-400" />
            <div className="mt-2 h-2 w-full rounded bg-gray-100" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 rounded-xl bg-indigo-600 px-4 py-3 text-white shadow-lg">
        <p className="text-[10px] text-indigo-100">
          Organic traffic
        </p>
        <p className="mt-1 text-lg font-bold">
          +184%
        </p>
      </div>
    </div>
  );
}

function AdsVisual() {
  return (
    <div className="relative h-52 overflow-hidden rounded-2xl bg-indigo-600 p-5">
      <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-purple-400/40 blur-3xl" />

      <div className="relative grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white p-4">
          <p className="text-[10px] text-gray-500">
            Ad spend
          </p>

          <p className="mt-2 text-xl font-bold text-gray-900">
            ₹2.4L
          </p>

          <div className="mt-4 h-2 rounded-full bg-gray-100">
            <div className="h-2 w-3/4 rounded-full bg-indigo-600" />
          </div>
        </div>

        <div className="rounded-xl bg-gray-950 p-4 text-white">
          <p className="text-[10px] text-gray-500">
            Revenue
          </p>

          <p className="mt-2 text-xl font-bold">
            ₹12.6L
          </p>

          <p className="mt-3 text-xs text-green-400">
            ↑ 5.2x ROI
          </p>
        </div>

        <div className="col-span-2 rounded-xl bg-white p-4">
          <div className="flex items-end gap-2">
            {[35, 48, 42, 65, 58, 78, 72, 92].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t bg-indigo-500"
                  style={{ height: `${height}px` }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialVisual() {
  return (
    <div className="relative h-52 overflow-hidden rounded-2xl bg-gray-100 p-5">
      <div className="grid grid-cols-3 gap-3">
        <div className="aspect-square rounded-xl bg-indigo-200" />
        <div className="aspect-square rounded-xl bg-purple-200" />
        <div className="aspect-square rounded-xl bg-indigo-300" />
        <div className="aspect-square rounded-xl bg-purple-300" />
        <div className="aspect-square rounded-xl bg-indigo-100" />
        <div className="aspect-square rounded-xl bg-gray-300" />
      </div>

      <div className="absolute bottom-4 left-5 rounded-xl bg-white px-4 py-3 shadow-lg">
        <p className="text-[10px] text-gray-500">
          Engagement
        </p>

        <p className="text-lg font-bold text-gray-900">
          +76%
        </p>
      </div>

      <div className="absolute right-5 top-4 rounded-full bg-indigo-600 px-3 py-2 text-xs font-semibold text-white">
        @yourbrand
      </div>
    </div>
  );
}

function ContentVisual() {
  return (
    <div className="relative h-52 overflow-hidden rounded-2xl bg-gray-950 p-5">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/30 blur-3xl" />

      <div className="relative rounded-xl bg-white p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">
              Content performance
            </p>

            <p className="mt-1 text-xl font-bold text-gray-900">
              92%
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
            ↗
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <div className="h-2 w-full rounded-full bg-gray-100">
            <div className="h-2 w-[92%] rounded-full bg-indigo-600" />
          </div>

          <div className="h-2 w-full rounded-full bg-gray-100">
            <div className="h-2 w-[74%] rounded-full bg-purple-500" />
          </div>

          <div className="h-2 w-full rounded-full bg-gray-100">
            <div className="h-2 w-[61%] rounded-full bg-indigo-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceVisual({ type }) {
  if (type === "search") return <SearchVisual />;
  if (type === "ads") return <AdsVisual />;
  if (type === "social") return <SocialVisual />;

  return <ContentVisual />;
}

function ServiceDetails({ service, onClose }) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-gray-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] bg-white p-5 shadow-2xl sm:rounded-[2rem] sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-title"
      >
        <button
          onClick={onClose}
          aria-label="Close service details"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
        >
          ×
        </button>

        <div className="pr-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Service {service.number}
          </p>

          <h2
            id="service-title"
            className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl"
          >
            {service.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            {service.description}
          </p>
        </div>

        <div className="mt-7 overflow-hidden rounded-2xl">
          <ServiceVisual type={service.visual} />
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">

          <div>
            <h3 className="text-lg font-bold text-gray-900">
              What's included
            </h3>

            <div className="mt-4 space-y-3">
              {service.includes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                    ✓
                  </span>

                  <span className="text-sm leading-6 text-gray-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900">
              What you can expect
            </h3>

            <div className="mt-4 space-y-3">
              {service.outcomes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">
                    ↗
                  </span>

                  <span className="text-sm leading-6 text-gray-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-8 rounded-2xl bg-gray-950 p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-lg font-bold text-white">
                Ready to grow?
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Let's build a strategy around your goals.
              </p>
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Get Started
              <span className="ml-2">
                →
              </span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section
        id="services"
        className="bg-white py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 sm:text-sm">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Everything your brand needs
              <span className="block text-indigo-600">
                to grow online.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:text-lg sm:leading-8">
              From search visibility to social campaigns, we
              combine strategy, creativity, and data to build
              sustainable digital growth.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-2">

            {services.map((service) => (
              <button
                key={service.number}
                type="button"
                onClick={() => setSelectedService(service)}
                className="group w-full rounded-3xl border border-gray-200 bg-white p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:p-5"
              >
                <ServiceVisual type={service.visual} />

                <div className="p-2 pt-6 sm:p-3 sm:pt-7">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <p className="text-xs font-semibold text-indigo-600">
                        {service.number}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
                        {service.title}
                      </h3>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition duration-300 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white">
                      ↗
                    </span>

                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                    {service.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-xs font-semibold text-indigo-600">
                    Click to explore service →
                  </p>

                </div>
              </button>
            ))}

          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceDetails
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}

export default Services;
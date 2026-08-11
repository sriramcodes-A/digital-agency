const brands = [
  "NOVA",
  "VERTEX",
  "LUMINA",
  "NEXORA",
  "AURELIA",
  "PIXELCO",
];

function TrustedBrands() {
  return (
    <section className="border-y border-gray-100 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-sm">
          Trusted by growing brands
        </p>

        <div className="mt-8 overflow-hidden">
          <div className="flex w-max animate-[brandScroll_20s_linear_infinite] items-center gap-12 sm:gap-20 lg:w-full lg:justify-between lg:gap-8 lg:animate-none">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex h-10 shrink-0 items-center text-lg font-bold tracking-tight text-gray-300 transition duration-300 hover:text-indigo-600 sm:text-xl"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes brandScroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}

export default TrustedBrands;
import { useEffect, useRef, useState } from "react";

const testimonialsTop = [
  {
    name: "Arjun Mehta",
    role: "Founder, NovaTech",
    text: "DigitalBoost completely changed how we approach growth. Our organic traffic increased significantly within months.",
    initials: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Lead, Lumina",
    text: "Their team combines creativity with actual data. We finally have a marketing system that we can measure.",
    initials: "PS",
  },
  {
    name: "Rahul Kapoor",
    role: "CEO, FinEdge",
    text: "The paid advertising strategy helped us reduce acquisition costs while increasing qualified leads.",
    initials: "RK",
  },
  {
    name: "Ananya Rao",
    role: "Founder, Bloom",
    text: "What impressed us most was their attention to detail. Every campaign had a clear reason behind it.",
    initials: "AR",
  },
];

const testimonialsBottom = [
  {
    name: "Vikram Singh",
    role: "Founder, Elevate",
    text: "We went from inconsistent leads to a predictable acquisition system. The difference has been huge.",
    initials: "VS",
  },
  {
    name: "Meera Iyer",
    role: "CMO, Orbit",
    text: "Their social strategy gave our brand a much stronger identity and helped us connect with the right audience.",
    initials: "MI",
  },
  {
    name: "Karan Shah",
    role: "Director, Vertex",
    text: "They don't just send reports. They explain what happened, why it happened, and what we should do next.",
    initials: "KS",
  },
  {
    name: "Neha Patel",
    role: "Founder, Aster",
    text: "A genuinely strategic team. Our content finally feels connected to our actual business goals.",
    initials: "NP",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <article className="w-[280px] shrink-0 rounded-3xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[340px] sm:p-6 lg:w-[380px]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
            {testimonial.initials}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-gray-900">
              {testimonial.name}
            </h3>

            <p className="mt-0.5 truncate text-xs text-gray-500">
              {testimonial.role}
            </p>
          </div>
        </div>

        <div className="shrink-0 text-sm tracking-wide text-yellow-500">
          ★★★★★
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
        “{testimonial.text}”
      </p>
    </article>
  );
}

function TestimonialRow({ testimonials, reverse = false }) {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  const positionRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);

  const dragStartX = useRef(0);
  const dragStartPosition = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  const speed = reverse ? 0.35 : -0.35;

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    function animate() {
      if (!pausedRef.current && !draggingRef.current) {
        positionRef.current += speed;
      }

      const halfWidth = track.scrollWidth / 2;

      if (positionRef.current <= -halfWidth) {
        positionRef.current += halfWidth;
      }

      if (positionRef.current >= 0) {
        positionRef.current -= halfWidth;
      }

      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;

      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [speed]);

  function handlePointerDown(event) {
    draggingRef.current = true;
    setIsDragging(true);

    pausedRef.current = true;

    dragStartX.current = event.clientX;
    dragStartPosition.current = positionRef.current;

    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    if (!draggingRef.current) return;

    const distance = event.clientX - dragStartX.current;

    positionRef.current =
      dragStartPosition.current + distance;
  }

  function handlePointerUp() {
    draggingRef.current = false;
    setIsDragging(false);

    pausedRef.current = false;
  }

  function handlePointerCancel() {
    draggingRef.current = false;
    setIsDragging(false);

    pausedRef.current = false;
  }

  function handleMouseEnter() {
    if (!draggingRef.current) {
      pausedRef.current = true;
    }
  }

  function handleMouseLeave() {
    if (!draggingRef.current) {
      pausedRef.current = false;
    }
  }

  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div
      className="overflow-hidden select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className={`flex w-max gap-4 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          touchAction: "pan-y",
          willChange: "transform",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 sm:text-sm">
            Client stories
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Don't take our word{" "}
            <span className="text-indigo-600">
              for it.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Real businesses. Real challenges. Real results.
          </p>
        </div>

        <div className="mt-12 space-y-5 sm:mt-16">

          <TestimonialRow
            testimonials={testimonialsTop}
          />

          <TestimonialRow
            testimonials={testimonialsBottom}
            reverse
          />

        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            Hover to pause • Drag or swipe to explore
          </p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
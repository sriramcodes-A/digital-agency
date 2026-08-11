import { useState } from "react";

function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  }

  return (
    <section
      id="contact"
      className="bg-indigo-600 py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* Left side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200">
              Let's Work Together
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to turn
              <span className="block text-indigo-200">
                attention into growth?
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-indigo-100">
              Tell us about your business, your goals, and the
              challenges you're facing. Our team will help you
              identify the right digital growth strategy.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-indigo-100">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  ✓
                </span>
                Free initial strategy discussion
              </div>

              <div className="flex items-center gap-3 text-indigo-100">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  ✓
                </span>
                Customized growth recommendations
              </div>

              <div className="flex items-center gap-3 text-indigo-100">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  ✓
                </span>
                No long-term commitment required
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">

            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Thanks for reaching out!
                </h3>

                <p className="mt-3 max-w-md leading-7 text-gray-600">
                  Your request has been recorded in this demo.
                  In a production application, this form would
                  send the information to a backend or CRM.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Send Another Message
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Start a conversation
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Tell us a little about your project.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Tell Us About Your Project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What are you trying to achieve?"
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Send Project Details →
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;
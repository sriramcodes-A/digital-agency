const footerLinks = {
  Company: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
  ],
  Resources: [
    { name: "Our Approach", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Get Started", href: "#contact" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "in",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "◎",
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: "𝕏",
  },
];

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-2">

            <a
              href="#home"
              className="text-2xl font-bold tracking-tight"
            >
              Digital<span className="text-indigo-500">Boost</span>
            </a>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              We help ambitious businesses turn their digital
              presence into a powerful engine for sustainable growth.
            </p>

            <div className="mt-7 flex gap-3">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit DigitalBoost on ${social.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-sm font-semibold text-gray-400 transition hover:border-indigo-500 hover:bg-indigo-500 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}

            </div>
          </div>

        
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>

              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                {title}
              </h3>

              <ul className="mt-6 space-y-4">

                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 transition hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

    
        <div className="mt-16 flex flex-col gap-5 border-t border-gray-800 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} DigitalBoost. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">

            <button
              type="button"
              className="transition hover:text-white"
              onClick={() =>
                alert(
                  "Privacy Policy: This assessment project does not collect or store personal information."
                )
              }
            >
              Privacy Policy
            </button>

            <button
              type="button"
              className="transition hover:text-white"
              onClick={() =>
                alert(
                  "Terms of Service: This is a frontend assessment demonstration."
                )
              }
            >
              Terms
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
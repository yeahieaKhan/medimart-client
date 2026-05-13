import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-gray-300">
      {/* Ultra Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827]"></div>

      {/* Animated Gradient Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]"></div>

        <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[120px]"></div>

        <div className="absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full bg-purple-500/20 blur-[120px]"></div>

        <div className="absolute bottom-[-100px] right-0 h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-[140px]"></div>
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black tracking-wide bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              YourBrand
            </h2>

            <p className="mt-5 text-gray-400 leading-relaxed text-[15px]">
              Creating next-level digital products with modern UI/UX,
              performance, and beautiful experiences.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-7">
              {[
                "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
                "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
              ].map((icon, index) => (
                <a
                  key={index}
                  href="/"
                  className="group relative p-[1px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                >
                  <div className="flex items-center justify-center rounded-full bg-slate-900 p-3 transition-all duration-300 group-hover:bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="fill-current text-white group-hover:text-white"
                    >
                      <path d={icon}></path>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-xl font-semibold text-white mb-6">Services</h6>

            <ul className="space-y-4">
              {["Branding", "UI/UX Design", "Marketing", "Development"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-xl font-semibold text-white mb-6">Company</h6>

            <ul className="space-y-4">
              {["About", "Careers", "Contact", "Press Media"].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="text-xl font-semibold text-white mb-6">
              Stay Updated
            </h6>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Subscribe to our newsletter for exclusive updates and premium
              content.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-500 outline-none backdrop-blur-xl focus:border-cyan-400 transition-all"
              />

              <button className="mt-4 w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 YourBrand. Crafted with passion.</p>

          <div className="flex gap-6">
            <a href="/" className="hover:text-cyan-400 transition">
              Privacy
            </a>

            <a href="/" className="hover:text-cyan-400 transition">
              Terms
            </a>

            <a href="/" className="hover:text-cyan-400 transition">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

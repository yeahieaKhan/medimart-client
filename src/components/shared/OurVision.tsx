import React from "react";

const OurVision = () => {
  const stats = [
    {
      value: "500,000+",
      label: "Customers Target",
      icon: "🎯",
      color: "from-cyan-400 to-blue-500",
    },
    {
      value: "10,000+",
      label: "Partner Pharmacies",
      icon: "🏥",
      color: "from-emerald-400 to-cyan-500",
    },
    {
      value: "99.9%",
      label: "Service Reliability",
      icon: "⚡",
      color: "from-purple-400 to-pink-500",
    },
    {
      value: "24/7",
      label: "Support Availability",
      icon: "📞",
      color: "from-orange-400 to-red-500",
    },
  ];

  const certs = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      status: "In Progress",
      icon: "📜",
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "GDPR Compliance",
      subtitle: "Data Protection Standard",
      status: "Preparing",
      icon: "🔐",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "WHO Guidelines",
      subtitle: "Healthcare Quality Standard",
      status: "In Review",
      icon: "🏥",
      color: "from-emerald-400 to-cyan-500",
    },
  ];

  return (
    <div className="bg-slate-950">
      {/* ================= VISION SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#050b18] to-slate-900 py-24 text-white">
        {/* Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]"></div>
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-purple-500/20 blur-[140px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Setting new standards in healthcare delivery through innovation,
              trust, and accessibility
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10"
              >
                <div
                  className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 blur-2xl transition group-hover:opacity-30`}
                ></div>

                <div className="relative">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                    {item.icon}
                  </div>

                  <h3 className="text-3xl font-black">{item.value}</h3>
                  <p className="mt-2 text-sm text-gray-400">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              We aim to build a future where healthcare is a basic right, not a
              privilege — accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATION SECTION ================= */}
      <section className="relative overflow-hidden py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050b18] via-slate-900 to-slate-950"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black">
              Certifications We are{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Pursuing
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              We are actively working to meet global healthcare standards
            </p>
          </div>

          {/* Card */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certs.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10"
              >
                <div
                  className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 blur-2xl transition group-hover:opacity-30`}
                ></div>

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{item.subtitle}</p>

                  <div className="mt-5 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs text-yellow-300">
                    {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVision;

import React from "react";

const CoreValue = () => {
  const values = [
    {
      title: "Safety First",
      desc: "We prioritize patient safety in everything we do, from product selection to delivery.",
      icon: "🛡️",
      color: "from-emerald-400 to-cyan-500",
    },
    {
      title: "Trust & Transparency",
      desc: "We ensure clear communication, verified products, and honest healthcare service.",
      icon: "🤝",
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Care & Compassion",
      desc: "We treat every customer with empathy and provide care-driven healthcare solutions.",
      icon: "❤️",
      color: "from-pink-400 to-rose-500",
    },
    {
      title: "Affordability",
      desc: "We make healthcare affordable so everyone can access essential medicines easily.",
      icon: "💊",
      color: "from-purple-400 to-fuchsia-500",
    },
    {
      title: "Innovation",
      desc: "We use modern technology to improve healthcare access, speed, and reliability.",
      icon: "⚡",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Customer First",
      desc: "Every decision we make is focused on improving patient experience and satisfaction.",
      icon: "🌍",
      color: "from-blue-400 to-indigo-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#050b18] to-slate-900 py-24 text-white">
      {/* Glow Background */}
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
              Core Values
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Principles that guide everything we build and deliver
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10"
            >
              {/* Glow */}
              <div
                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 blur-2xl transition group-hover:opacity-30`}
              ></div>

              <div className="relative">
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl backdrop-blur-xl">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValue;

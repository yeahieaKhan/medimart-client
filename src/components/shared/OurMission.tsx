import React from "react";

const OurMission = () => {
  const features = [
    {
      title: "Accessibility",
      desc: "Making healthcare accessible to everyone, everywhere through our online platform and fast delivery service. We are breaking down barriers to quality healthcare.",
      icon: "🌍",
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Affordability",
      desc: "We ensure fair pricing so that essential medicines and healthcare products remain within everyone’s reach without compromise.",
      icon: "💊",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Trust & Safety",
      desc: "We work only with verified pharmacies and certified suppliers to guarantee safe, authentic, and reliable healthcare products.",
      icon: "🛡️",
      color: "from-emerald-400 to-cyan-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#050b18] to-slate-900 py-24 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-cyan-500/20 blur-[130px]"></div>
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-purple-500/20 blur-[130px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            At Pharma Nest, our mission is to revolutionize healthcare delivery
            by providing easy access to quality medications and healthcare
            products. Everyone deserves convenient, reliable, and affordable
            healthcare solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10"
            >
              {/* Glow border */}
              <div
                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 blur-xl transition group-hover:opacity-30`}
              ></div>

              <div className="relative">
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl backdrop-blur-xl">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                {/* Description */}
                <p className="mt-4 text-gray-400 leading-relaxed text-sm">
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

export default OurMission;

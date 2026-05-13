import React from "react";

const OurTeam = () => {
  const team = [
    {
      name: "Michael Chen",
      role: "Chief Executive Officer",
      desc: "Founded Pharma Nest with a vision to make healthcare accessible through technology and innovation.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Sarah Williams",
      role: "Chief Medical Officer",
      desc: "Ensures healthcare quality, safety, and compliance across all services.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "David Kim",
      role: "Head of Technology",
      desc: "Builds scalable and secure healthcare digital platforms.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      desc: "Manages operations and ensures smooth healthcare delivery.",
      img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
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
            Meet Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            The professionals behind Pharma Nest
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                {/* SOCIAL ICONS (Facebook first, LinkedIn second) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {/* Facebook */}
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-blue-500 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-white"
                    >
                      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14.2 6h2.3v3h-2a1 1 0 0 0-1 1V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-sky-500 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-white"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM8 7h4.8v2.3h.1c.7-1.3 2.4-2.6 4.9-2.6C22 6.7 24 9 24 13v11h-5v-9.5c0-2.3-.8-3.9-2.9-3.9-1.6 0-2.5 1.1-2.9 2.1-.2.4-.2 1-.2 1.6V24H8V7z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-cyan-400 text-sm mt-1">{member.role}</p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

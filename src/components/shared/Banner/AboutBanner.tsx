import React from "react";

const AboutBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#07111f] to-slate-900 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"></div>

        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]"></div>

        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[140px]"></div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative">
          {/* Glow Border */}
          <div className="absolute -inset-2 rounded-[30px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-40 blur-xl"></div>

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop"
              alt="Pharma Nest"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          {/* Badge */}
          <button className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-300 backdrop-blur-xl">
            Your Trusted Healthcare Partner
          </button>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Pharma Nest
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            The next generation healthcare partner committed to making
            healthcare accessible, affordable, and convenient for everyone. We
            combine technology, trust, and care to deliver better medical
            experiences for every patient.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-3xl font-bold text-cyan-400">25K+</h2>
              <p className="mt-2 text-sm text-gray-400">Happy Customers</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-3xl font-bold text-purple-400">120+</h2>
              <p className="mt-2 text-sm text-gray-400">Trusted Pharmacies</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40">
              Our Mission
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;

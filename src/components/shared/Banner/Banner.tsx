import React from "react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden min-h-screen lg:min-h-[85vh]">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2000&auto=format&fit=crop"
        alt="Healthcare Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen lg:min-h-[85vh] px-4 sm:px-6 md:px-10 py-16">
        <div className="max-w-5xl text-center text-white">
          {/* Top Badge */}
          <p className="inline-block px-4 sm:px-5 py-2 mb-5 text-xs sm:text-sm font-medium tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full">
            Trusted Online Pharmacy
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Your Health, <span className="text-green-400">Our Priority</span>
          </h1>

          {/* Description */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Get your medicines delivered to your doorstep with fast, safe, and
            reliable service. Healthcare made simple and convenient for
            everyone.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-green-500 hover:bg-green-600 transition-all duration-300 rounded-xl text-base md:text-lg font-semibold shadow-lg">
              Order Now
            </button>

            <button className="w-full sm:w-auto px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 rounded-xl text-base md:text-lg font-semibold">
              Explore Medicines
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
                10K+
              </h2>
              <p className="text-sm sm:text-base text-gray-200 mt-2">
                Happy Customers
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
                24/7
              </h2>
              <p className="text-sm sm:text-base text-gray-200 mt-2">
                Customer Support
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
                Fast
              </h2>
              <p className="text-sm sm:text-base text-gray-200 mt-2">
                Home Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

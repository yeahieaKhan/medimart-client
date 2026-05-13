import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="relative h-[85vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2000&auto=format&fit=crop"
          alt="Healthcare Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl text-center text-white">
            <p className="inline-block px-4 py-1 mb-5 text-sm font-medium tracking-wide uppercase bg-white/20 backdrop-blur-md rounded-full">
              Trusted Online Pharmacy
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Health, <span className="text-green-400">Our Priority</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              Get your medicines delivered to your doorstep with fast, safe, and
              reliable service. Healthcare made simple and convenient for
              everyone.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-green-500 hover:bg-green-600 transition duration-300 rounded-xl text-lg font-semibold shadow-lg">
                Order Now
              </button>

              <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300 rounded-xl text-lg font-semibold">
                Explore Medicines
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                <h2 className="text-3xl font-bold text-green-400">10K+</h2>
                <p className="text-sm text-gray-200 mt-1">Happy Customers</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                <h2 className="text-3xl font-bold text-green-400">24/7</h2>
                <p className="text-sm text-gray-200 mt-1">Customer Support</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 col-span-2 md:col-span-1">
                <h2 className="text-3xl font-bold text-green-400">Fast</h2>
                <p className="text-sm text-gray-200 mt-1">Home Delivery</p>
              </div>
            </div>
          </div>
        </div>
          </section>
          
    </div>
  );
};

export default Banner;

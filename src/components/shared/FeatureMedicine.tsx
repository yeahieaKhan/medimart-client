import React from "react";
import { ShoppingCart, Pill } from "lucide-react";

const medicines = [
  {
    id: 1,
    name: "Warfarin 5mg",
    manufacturer: "Bristol Myers Squibb",
    stock: "300 Units",
    image: "https://images.pexels.com/photos/4210606/pexels-photo-4210606.jpeg",
    prescription: true,
  },
  {
    id: 2,
    name: "Paracetamol 500mg",
    manufacturer: "Square Pharma",
    stock: "500 Units",
    image: "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg",
    prescription: false,
  },
  {
    id: 3,
    name: "Azithromycin",
    manufacturer: "Beximco Pharma",
    stock: "250 Units",
    image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg",
    prescription: true,
  },
  {
    id: 4,
    name: "Napa Extra",
    manufacturer: "ACI Limited",
    stock: "700 Units",
    image: "https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg",
    prescription: false,
  },
  {
    id: 5,
    name: "Vitamin C",
    manufacturer: "Healthcare Ltd",
    stock: "450 Units",
    image: "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg",
    prescription: false,
  },
  {
    id: 6,
    name: "Insulin Injection",
    manufacturer: "Novo Nordisk",
    stock: "120 Units",
    image: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg",
    prescription: true,
  },
];

const FeatureMedicine = () => {
  return (
    <section className="bg-slate-50 py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
            Featured Medicines
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-5 leading-tight">
            Premium Healthcare
            <span className="text-green-600"> Products</span>
          </h2>

          <p className="text-slate-600 mt-5 text-lg leading-relaxed">
            Discover our carefully selected range of trusted medicines and
            healthcare essentials for your wellbeing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicines.map((medicine) => (
            <div
              key={medicine.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {medicine.prescription && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Prescription Required
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Medicine Name */}
                <div className="flex items-center gap-2 mb-3">
                  <Pill className="text-green-600" size={20} />
                  <h2 className="text-2xl font-bold text-slate-900">
                    {medicine.name}
                  </h2>
                </div>

                {/* Manufacturer */}
                <div className="flex justify-between items-center border-b border-slate-100 py-3">
                  <span className="text-slate-500 font-medium">
                    Manufacturer
                  </span>

                  <span className="text-slate-800 font-semibold text-sm">
                    {medicine.manufacturer}
                  </span>
                </div>

                {/* Stock */}
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-500 font-medium">Available</span>

                  <span className="text-green-600 font-bold">
                    {medicine.stock}
                  </span>
                </div>

                {/* Button */}
                <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-green-200">
                  <ShoppingCart size={20} />
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureMedicine;

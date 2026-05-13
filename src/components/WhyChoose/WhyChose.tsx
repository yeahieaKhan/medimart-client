import React from "react";
import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  HeartHandshake,
  Pill,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: <Pill size={28} />,
    title: "Extensive Selection",
    description:
      "Access thousands of medications from trusted global and local pharmaceutical manufacturers.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Quality Assurance",
    description:
      "Every product is carefully verified to ensure authenticity, safety, and effectiveness.",
  },
  {
    icon: <Truck size={28} />,
    title: "Fast Delivery",
    description:
      "Reliable nationwide delivery service to ensure your medicines arrive on time.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Licensed Pharmacy",
    description:
      "Operated by certified professionals following strict pharmaceutical standards.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Customer Support",
    description:
      "Friendly and professional support team ready to assist you anytime.",
  },
  {
    icon: <Clock3 size={28} />,
    title: "24/7 Availability",
    description:
      "Order medicines and healthcare essentials anytime from anywhere.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-5 leading-tight">
            Trusted Pharmaceutical
            <span className="text-green-600"> Healthcare Partner</span>
          </h2>

          <p className="text-slate-600 text-lg mt-5 leading-relaxed">
            We are committed to delivering premium pharmaceutical services with
            uncompromising quality, trusted medicines, and customer-first care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

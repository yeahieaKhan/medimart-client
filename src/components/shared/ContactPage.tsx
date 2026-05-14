import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl bg-white/5">
        {/* Left Side */}
        <div className="relative p-10 lg:p-14 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 text-white flex flex-col justify-between">
          {/* Glow Effect */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <p className="uppercase tracking-[4px] text-sm text-white/70 mb-4">
              Contact
            </p>

            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Let’s Talk.
            </h1>

            <p className="text-lg text-white/80 leading-relaxed max-w-md">
              Have any questions or project ideas? Feel free to contact us. We’d
              love to hear from you and help bring your ideas to life.
            </p>
          </div>

          <div className="relative z-10 mt-14 space-y-5">
            <div className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-md hover:bg-white/20 transition">
              <div className="p-3 rounded-xl bg-white/20">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-sm text-white/70">Email</p>
                <p className="font-medium">support@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-md hover:bg-white/20 transition">
              <div className="p-3 rounded-xl bg-white/20">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-sm text-white/70">Phone</p>
                <p className="font-medium">+880 1234-567890</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-md hover:bg-white/20 transition">
              <div className="p-3 rounded-xl bg-white/20">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-sm text-white/70">Location</p>
                <p className="font-medium">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-slate-900/90 p-10 lg:p-14">
          <div className="mb-8">
            <p className="text-violet-400 font-medium mb-2">Send Message</p>

            <h2 className="text-4xl font-bold text-white mb-3">Contact Us</h2>

            <p className="text-slate-400">
              Fill out the form and our team will get back to you shortly.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="text-sm text-slate-300 mb-2 block">
                Your Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-2xl border border-slate-700 bg-slate-800/70 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-2 block">
                Your Email
              </label>

              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-2xl border border-slate-700 bg-slate-800/70 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-2 block">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-2xl border border-slate-700 bg-slate-800/70 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 text-lg font-semibold text-white shadow-lg shadow-violet-500/30 hover:scale-[1.02] hover:shadow-violet-500/50 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

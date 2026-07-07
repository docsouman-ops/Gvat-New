import { motion } from "motion/react";
import { ArrowRight, Droplets, Sun, CloudRain, Shield, Award, Users, MapPin, Phone, MessageSquare, Mail, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function Home() {
  const customPhone = "+91 90518 78901";
  const customWhatsApp = "+91 90518 78901";
  const customEmail = "contact@greenviewagrotech.com";

  return (
    <div className="overflow-hidden bg-[#fafbfa]">
      {/* 🔷 HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
            alt="Drip Irrigation Sustainable Agriculture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Layered sunset/field background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/80 to-transparent z-0" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green-950/90 to-transparent z-0" />
        </div>

        {/* Floating background blur effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white space-y-6"
          >
            {/* Dual Badges */}
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/35 text-amber-400 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full relative overflow-hidden">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-450"></span>
                </span>
                Official PM Surya Ghar Registered Vendor
              </span>
              <span className="inline-flex items-center bg-teal-500/12 border border-teal-500/30 text-teal-300 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                WBSEDCL + CESC Covered
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight drop-shadow-sm">
              Water. Power. Growth.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-300">
                All in Your Hands.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
              Irrigation systems, solar pumps, polyhouses, and <strong>PM Surya Ghar rooftop solar</strong> with up to <strong>₹78,000 government subsidy</strong> — complete installation and full support across all of West Bengal.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-500 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-xl shadow-green-600/30"
                >
                  📅 Book Free Site Visit
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/services?tab=pmsuryaghar"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-xl shadow-orange-500/20"
                >
                  ₹78,000 Subsidy — Check Now →
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center transition-all"
                >
                  Talk to Us
                </Link>
              </motion.div>
            </div>

            {/* Trust tags under hero */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-6 text-xs text-white/70 font-semibold border-t border-white/10">
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-450" /> WBSEDCL Empanelled</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-450" /> CESC Registered</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-450" /> All of West Bengal</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-450" /> Unlimited Install Capacity</span>
            </div>
          </motion.div>
        </div>

        {/* Scrolldown hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1">
          <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Scroll Details</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-green-400 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ═══ TRUST BAR — THE CREDIBILITY BRIDGE ═══ */}
      <section className="bg-slate-950 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="p-6 sm:p-8 text-center space-y-1 hover:bg-white/5 transition-colors cursor-default">
            <span className="text-2xl sm:text-3.5xl font-black text-yellow-400 block tracking-tight">₹78,000</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Max Govt. Subsidy PM Surya Ghar</span>
          </div>
          <div className="p-6 sm:p-8 text-center space-y-1 hover:bg-white/5 transition-colors cursor-default">
            <span className="text-2xl sm:text-3.5xl font-black text-yellow-400 block tracking-tight">300 Units</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Free Electricity Every Month</span>
          </div>
          <div className="p-6 sm:p-8 text-center space-y-1 hover:bg-white/5 transition-colors cursor-default">
            <span className="text-2xl sm:text-3.5xl font-black text-yellow-400 block tracking-tight">17+</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Authorized Manufacturing Partners</span>
          </div>
          <div className="p-6 sm:p-8 text-center space-y-1 hover:bg-white/5 transition-colors cursor-default">
            <span className="text-2xl sm:text-3.5xl font-black text-yellow-400 block tracking-tight">WB-Wide</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">WBSEDCL + CESC Both Areas Covered</span>
          </div>
        </div>
      </section>

      {/* 🔷 WHO WE ARE (Option 1 - Clean & Professional layout with tags) */}
      <section className="py-20 bg-white border-b border-gray-150 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50/70 via-emerald-50/40 to-green-50/70 rounded-3xl p-8 sm:p-12 border border-green-100 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-green-100/30 rounded-bl-full pointer-events-none" />
            <div className="shrink-0 bg-green-600 p-5 rounded-2xl text-white shadow-lg shadow-green-600/20">
              <Leaf className="w-10 h-10" />
            </div>
            <div className="space-y-6 relative z-10">
              <h2 className="text-3xl font-black text-gray-950 tracking-tight leading-none">Who We Are</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl">
                At <strong>Green View Agro Tech</strong>, we don't just supply equipment — we show up, do the work, and stand behind it. We design and install drip irrigation systems, solar pumping solutions, and polyhouses for farmers across West Bengal. We're also an <span className="text-green-700 font-extrabold bg-green-100/50 px-2 py-0.5 rounded">officially registered PM Surya Ghar vendor</span>, helping homeowners access up to ₹78,000 in government subsidy for rooftop solar — from registration to installation to subsidy in your account. We cover both WBSEDCL and CESC areas, and we take every project personally.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="flex items-center gap-1.5 bg-white border border-green-200 text-green-800 text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm">💧 Irrigation Systems</span>
                <span className="flex items-center gap-1.5 bg-white border border-green-200 text-green-800 text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm">☀️ Solar Pumps</span>
                <span className="flex items-center gap-1.5 bg-white border border-green-200 text-green-800 text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm">🏠 Polyhouses</span>
                <span className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-900 text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm">🌟 PM Surya Ghar Vendor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 WHAT WE DO (Redesigned Services Section) */}
      <section className="py-24 bg-gradient-to-b from-[#fafbfa] to-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-green-600 font-bold uppercase tracking-widest text-xs bg-green-50 px-4 py-1.5 rounded-full inline-block">Our Services</span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Everything Your Farm — And Home — Needs.
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              From the first drip line on your field to free electricity on your roof — we design, install, and stand behind everything.
            </p>
          </div>

          {/* Grid of 3 standard services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Tile 1 — Irrigation */}
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl border border-gray-150 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl w-fit mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-3">Irrigation Systems</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                Drip, sprinkler, mini & micro, pop-up, foggers — we supply, design, and install. We are authorized dealers of <strong>Premier Irrigation Adritec</strong> and <strong>Jain Irrigation</strong>, sourcing premium materials from <strong>Netafim</strong>.
              </p>
              <Link 
                to="/services?tab=irrigation" 
                className="text-green-600 font-extrabold flex items-center gap-2 hover:gap-3 transition-all mt-auto"
              >
                Explore Irrigation Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Tile 2 — Polyhouse */}
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl border border-gray-150 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl w-fit mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-3">Polyhouse Construction</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                We construct robust polyhouses from the ground up — framing, cladding, ventilation, misting systems, and interior automation. Handled by our experienced on-ground engineers for guaranteed durability.
              </p>
              <Link 
                to="/services?tab=polyhouse" 
                className="text-green-600 font-extrabold flex items-center gap-2 hover:gap-3 transition-all mt-auto"
              >
                Explore Polyhouse Construction <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Tile 3 — Solar Pumping */}
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl border border-gray-150 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-amber-50 text-amber-600 p-4 rounded-2xl w-fit mb-6">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-3">Solar Pumping Systems</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                Highly efficient surface or submersible solar pumps that harness maximum solar energy. We guide you through eligible subsidies, setup the arrays, and guarantee a smooth installation.
              </p>
              <Link 
                to="/services?tab=solar" 
                className="text-green-600 font-extrabold flex items-center gap-2 hover:gap-3 transition-all mt-auto"
              >
                Explore Solar Pumping <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* LARGE FEATURED PANEL — PM SURYA GHAR ROOFTOP SOLAR */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-xl relative overflow-hidden"
          >
            {/* Ambient glows inside panel */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Column: Info & Description */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-450" />
                  </span>
                  Official Registered Vendor — West Bengal
                </span>
                
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  PM Surya Ghar Rooftop Solar — With Full Subsidy Support.
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  The government is offering up to <strong>₹78,000 in direct subsidy</strong> to install solar panels on your home — with up to 300 units of free electricity every month. We are an officially registered vendor under this scheme for both <strong>WBSEDCL and CESC areas</strong>. We manage everything: portal registration, documentation, installation, net metering, and your subsidy — until the money is in your bank account.
                </p>

                <div className="pt-2">
                  <Link 
                    to="/services?tab=pmsuryaghar" 
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 text-sm shadow-lg shadow-orange-500/20"
                  >
                    Check My ₹78,000 Subsidy <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Mini Stats Box */}
              <div className="lg:col-span-5 bg-slate-900/55 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-800 pb-3">Scheme Highlights</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <span className="text-xl sm:text-2xl font-black text-amber-400 block">₹78,000</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Max Govt. Subsidy</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xl sm:text-2xl font-black text-emerald-400 block">300 Units</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Free Power / Month</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xl sm:text-2xl font-black text-teal-400 block">~7% p.a.</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Low-Interest Loans</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xl sm:text-2xl font-black text-blue-400 block">30 Days</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Subsidy Turnaround</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-start items-center pt-8 mt-8 border-t border-slate-800 text-xs text-slate-400 font-medium relative z-10">
              <span className="bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">🏛️ WBSEDCL Empanelled</span>
              <span className="bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">🏛️ CESC Registered</span>
              <span className="bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">🛡️ End-to-End D2C Service</span>
              <span className="bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">📍 All of West Bengal Covered</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔷 WHY FARMERS TRUST US */}
      <section className="py-24 bg-white border-y border-gray-150 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/[0.02] rounded-l-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-green-600 font-bold uppercase tracking-widest text-xs bg-green-50 px-4 py-1.5 rounded-full inline-block">Real Accountability</span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                Why Farmers Trust Us
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                We believe in providing honest advice, reliable machinery, and continuous local maintenance.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "We don't just sell — we install and stand behind our work.",
                  "Authorized dealer of Premier Irrigation Adritec Pvt. Ltd. & Jain Irrigation Systems Ltd.",
                  "Government subsidy support (PDMC and other schemes).",
                  "Experienced installation team — not outsourced labor, our own people.",
                  "We work across West Bengal and neighbouring states."
                ].map((reason, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="bg-green-100 p-1 rounded-full text-green-600 shrink-0 mt-1">
                      <Shield className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700 font-semibold">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-2xl z-0" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-50 rounded-2xl z-0" />
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200" 
                alt="Agricultural fields and irrigation setup" 
                className="relative z-10 w-full h-[450px] object-cover rounded-3xl shadow-xl border border-gray-150"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 bg-white py-4 px-6 rounded-2xl shadow-xl z-20 border border-gray-150 flex items-center gap-3">
                <div className="bg-green-100 p-2.5 rounded-xl text-green-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-950 text-lg leading-tight">100% On-Ground</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">No Outsourced Labor</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔷 BRANDS WE WORK WITH (Logo Strip) */}
      <section className="py-16 bg-[#fafbfa] border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-8">Brands We Work With</p>
          <div className="flex flex-wrap items-center justify-around gap-8 sm:gap-12 opacity-85">
            {[
              { name: "Premier Irrigation Adritec", title: "Authorized Dealer" },
              { name: "Jain Irrigation Systems", title: "Authorized Dealer" },
              { name: "Netafim", title: "Premium Sourcing" }
            ].map((brand) => (
              <div key={brand.name} className="flex flex-col items-center bg-white border border-gray-150 py-4 px-8 rounded-2xl shadow-sm text-center min-w-[200px]">
                <span className="text-lg font-extrabold text-gray-900 leading-none">{brand.name}</span>
                <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest mt-1.5">{brand.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 QUICK CONTACT STRIP */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=1000" 
            alt="Field background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <h2 className="text-2xl sm:text-3.5xl font-extrabold tracking-tight">Have a project in mind? Let's talk.</h2>
              <p className="text-green-100 text-sm sm:text-base">
                Whether you have simple questions about subsidy eligibility or want a comprehensive polyhouse estimate, we are standing by to help.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full lg:w-auto">
              {/* Call */}
              <a 
                href={`tel:${customPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 bg-white text-green-950 font-bold px-6 py-4 rounded-2xl hover:bg-green-50 transition-colors shadow-lg shadow-black/10 text-sm sm:text-base shrink-0"
              >
                <div className="bg-green-100 p-1.5 rounded-xl text-green-600">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Call: {customPhone}</span>
              </a>

              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${customWhatsApp.replace(/[+\s]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-4 rounded-2xl hover:bg-[#20ba5a] transition-colors shadow-lg shadow-black/10 text-sm sm:text-base shrink-0"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

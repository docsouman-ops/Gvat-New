import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, Shield, Users, Award, MapPin, Heart, Target, 
  ChevronDown, ChevronUp, FileText, Info, AlertCircle
} from "lucide-react";

export default function About() {
  const [showUnpublished, setShowUnpublished] = useState(false);

  // Expanded manufacturer trust list for West Bengal empanelment (PDF 3 Page 16)
  const trustPartners = [
    { name: "Premier Irrigation Adritec Pvt. Ltd.", type: "Authorized Dealer", cert: "ISO 9001:2015 Certified" },
    { name: "Jain Irrigation Systems Ltd.", type: "Authorized Dealer", cert: "World's Largest Drip Manufacturer" },
    { name: "Netafim Israel", type: "Sourced Systems Partner", cert: "Pioneer of Micro Irrigation" },
    { name: "Captain Polyplast Ltd", type: "Authorized Dealer", cert: "Premium Quality PVC & HDPE Pipes" },
    { name: "Greaves Cotton Limited", type: "Authorized Dealer", cert: "Robust Agricultural Engines" },
    { name: "VST Tillers Tractors Ltd", type: "Authorized Partner", cert: "Certified Farm Machinery" },
    { name: "C.R.I. Pumps", type: "Authorized Dealer", cert: "World-Class Water Pumps & Motors" },
    { name: "Shakti Pumps", type: "Authorized Solar Partner", cert: "Stainless Steel Submersibles" },
    { name: "Lubi Pumps", type: "Authorized Dealer", cert: "50+ Years Engineering Excellence" },
    { name: "Pahal-Solar", type: "Authorized Solar Dealer", cert: "High-Efficiency PV Modules" },
    { name: "SOVA SOLAR", type: "Empanelled Solar Partner", cert: "West Bengal-Based PV Manufacturer" },
    { name: "Latteys Industries Ltd", type: "Authorized Dealer", cert: "Borewell & Agricultural Motors" },
    { name: "Agriplast Tech India Pvt. Ltd.", type: "Premium Sourcing Partner", cert: "Protected Agriculture Claddings" }
  ];

  return (
    <div className="bg-[#fafbfa]">
      {/* Page Header (Fixed top gap and white line issue by removing wrapper padding and increasing top padding) */}
      <section className="bg-gradient-to-r from-green-950 to-emerald-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Farming field background" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Our Roots
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-none text-white text-shadow">
            We Started Because <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Farmers Deserved Better.
            </span>
          </h1>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full w-fit">Who We Are</h2>
              <h3 className="text-3xl sm:text-4.5xl font-black text-gray-950 tracking-tight leading-tight">We Show Up, Do the Work, and Stand Behind It.</h3>
              
              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  At <strong>Green View Agro Tech</strong>, we work on the ground with farmers and homeowners — understanding their land, their water supply, and their electricity costs before recommending anything. We design and install drip irrigation, sprinkler, and micro irrigation systems for farmers. We set up solar pumping systems and build polyhouses for year-round cultivation.
                </p>
                <p>
                  And as an <strong className="text-green-700 font-extrabold bg-green-100/40 px-1 py-0.5 rounded border border-green-200">officially registered PM Surya Ghar vendor</strong>, we manage the complete rooftop solar journey for homeowners — from government portal registration and installation to net metering and the <strong>₹78,000 subsidy</strong> reaching your bank account. We cover both <strong>WBSEDCL and CESC areas</strong>.
                </p>
                <p>
                  We're based in West Bengal, and we take every project personally — because we know the difference between a system that works and one that's been forgotten after installation. We are authorized dealers of <strong>Premier Irrigation Adritec Pvt. Ltd.</strong> and <strong>Jain Irrigation Systems Ltd.</strong>, and we source materials from <strong>Netafim</strong> and other top empanelled manufacturers to ensure our clients always receive the absolute best fit for their field.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-50 rounded-full z-0" />
              <img 
                src="https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780322531/ChatGPT_Image_Jun_1_2026_07_30_30_PM_iurca8.png" 
                alt="On ground team talking" 
                className="relative z-10 rounded-3xl shadow-xl border border-gray-150 w-full h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-150 max-w-xs text-center hidden sm:block">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-extrabold text-gray-950">Approved</span>
                </div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Authorized Installer West Bengal</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔷 UPDATED WHY FARMERS TRUST US SECTION (PDF 3 Page 16 Request) */}
      <section className="py-24 bg-[#fafbfa] border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-green-600 font-bold uppercase tracking-widest text-xs bg-green-50 px-4 py-1.5 rounded-full inline-block">Empanelled Sourcing</span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">Why Farmers Trust Us</h2>
            <p className="text-gray-600 text-lg">We only partner with manufacturers who hold official certifications and empanelment under national agricultural guidelines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPartners.map((brand) => (
              <div 
                key={brand.name} 
                className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-green-300 transition-all hover:shadow-md"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-green-600 uppercase bg-green-50 px-2.5 py-1 rounded-md">{brand.type}</span>
                    <span className="text-[9px] font-bold text-gray-400 font-mono">Approved Partner</span>
                  </div>
                  <h4 className="text-base font-extrabold text-gray-950 leading-tight pt-2">{brand.name}</h4>
                </div>
                <div className="border-t border-gray-100 pt-3.5 mt-4">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Certification / Standard:</span>
                  <span className="text-xs font-bold text-gray-700 block mt-0.5">{brand.cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-24 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-green-600 font-bold uppercase tracking-widest text-xs bg-green-50 px-4 py-1.5 rounded-full inline-block mb-4">Our Edge</span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">What Makes Us Different</h2>
            <p className="text-gray-600 text-lg mt-4 font-semibold">Four key pillars that define our relationship with farmers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#fafbfa] border border-gray-150 rounded-3xl p-8 shadow-sm flex gap-6 items-start hover:border-green-300 hover:shadow-md transition-all">
              <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-950 mb-2">We do the whole job.</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We don't hand you equipment and walk away. We survey the land, design the system, source the materials, build the structure, install everything, and make sure it's running right before we leave.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#fafbfa] border border-gray-150 rounded-3xl p-8 shadow-sm flex gap-6 items-start hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-950 mb-2">Our team is our own.</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Our technicians are experienced, trained, and employed by us — not day laborers picked up for each job. That means actual accountability at every step.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#fafbfa] border border-gray-150 rounded-3xl p-8 shadow-sm flex gap-6 items-start hover:border-amber-300 hover:shadow-md transition-all">
              <div className="bg-amber-50 text-amber-600 p-4 rounded-2xl shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-950 mb-2">We work under government schemes.</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We understand how subsidy systems like PDMC work and we help farmers navigate the process so they actually benefit from what the government offers.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#fafbfa] border border-gray-150 rounded-3xl p-8 shadow-sm flex gap-6 items-start hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="bg-indigo-50 text-indigo-600 p-4 rounded-2xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-950 mb-2">We cover a wide geography.</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We operate across West Bengal and extend into neighbouring states, so if your land is near the border, we've likely worked there before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-24 bg-white border-b border-gray-150">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-900 rounded-3.5xl p-8 sm:p-16 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000')] bg-cover filter saturate-50 pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="bg-green-700 p-3.5 rounded-full w-fit mx-auto text-green-300">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Our Mission</h3>
              <p className="text-lg sm:text-2xl font-light leading-relaxed text-green-50">
                "To make quality agricultural technology accessible — not just to large farms or well-connected clients, but to every farmer who needs it. We believe the right irrigation, the right structure, and the right water source can change the economics of a farm for generations."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 UNPUBLISHED GOVERNMENT SCHEMES / SUBSIDY SUPPORT SECTION (PDF 3 Page 10 Request) */}
      {/* Kept hidden/unpublished for now as requested, but toggles on click for internal verification/admin review */}
      <section className="py-16 bg-[#f1f5f9] border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-gray-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-gray-950 text-base leading-tight">Government Schemes & Subsidy Support</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Status: UNPUBLISHED DRAFT (ADMIN REFERENCE ONLY)</p>
                </div>
              </div>
              <button
                onClick={() => setShowUnpublished(!showUnpublished)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center gap-2 transition-all shrink-0"
              >
                {showUnpublished ? (
                  <><span>Hide Draft Content</span> <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <><span>Reveal Draft Content</span> <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>

            <AnimatePresence>
              {showUnpublished && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden mt-8 space-y-6 pt-6 border-t border-gray-200 text-xs text-gray-700"
                >
                  <p className="text-sm font-semibold text-gray-800">
                    The following section details the agricultural subsidy guidelines. Keep this section hidden on the live public site until final administrative approval is cleared.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                      <div className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-black text-[9px] uppercase tracking-wider w-fit">PDMC Scheme</div>
                      <h5 className="font-bold text-gray-900 text-sm">PMKSY - Per Drop More Crop (PDMC)</h5>
                      <p className="leading-relaxed text-justify text-slate-600">
                        Provides substantial micro-irrigation subsidies (drip and sprinkler) directly to farmers in West Bengal to optimize water consumption. Small and marginal farmers receive up to 55% financial assistance, while other farmers receive up to 45% based on standard costing benchmarks.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                      <div className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-black text-[9px] uppercase tracking-wider w-fit">KUSUM Scheme</div>
                      <h5 className="font-bold text-gray-900 text-sm">PM-KUSUM (Component-B)</h5>
                      <p className="leading-relaxed text-justify text-slate-600">
                        Enables independent solar water pumping for farmlands lacking electrical grids. The scheme offers a central financial assistance subsidy of 30%, state subsidy of 30%, with the farmer contributing 40% (which can be financed through bank loans).
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                      <div className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-black text-[9px] uppercase tracking-wider w-fit">SMAM Scheme</div>
                      <h5 className="font-bold text-gray-900 text-sm">Sub-Mission on Agricultural Mechanization (SMAM)</h5>
                      <p className="leading-relaxed text-justify text-slate-600">
                        Focuses on providing machinery and modern high-end implements to promote agricultural productivity on smallholdings. Offers up to 40% to 50% subsidy for procurement.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                      <div className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded font-black text-[9px] uppercase tracking-wider w-fit">MIDH / NHM</div>
                      <h5 className="font-bold text-gray-900 text-sm">Mission for Integrated Development of Horticulture</h5>
                      <p className="leading-relaxed text-justify text-slate-600">
                        Offers up to 50% capital subsidy on greenhouse and polyhouse construction projects, specialized shade nets, and nursery structures to cultivate high-value horticultural yields.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-600 font-bold uppercase tracking-widest text-xs bg-green-50 px-4 py-1.5 rounded-full inline-block mb-4">Integrity First</span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Honesty", desc: "Honesty in what we recommend", icon: CheckCircle2, bg: "bg-green-100", text: "text-green-700" },
              { title: "Quality", desc: "Quality in what we install", icon: Award, bg: "bg-blue-100", text: "text-blue-700" },
              { title: "Commitment", desc: "Commitment to finishing what we start", icon: Shield, bg: "bg-amber-100", text: "text-amber-700" },
              { title: "Respect", desc: "Respect for the farmer's investment", icon: Heart, bg: "bg-red-100", text: "text-red-700" }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-150 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
              >
                <div className={`${value.bg} ${value.text} p-4 rounded-2xl mb-6`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-extrabold text-gray-950 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

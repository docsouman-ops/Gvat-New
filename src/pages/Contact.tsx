import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, 
  HelpCircle, ChevronDown, ChevronUp, Check 
} from "lucide-react";

const faqQuestions = [
  {
    q: "Do you only supply equipment or do you also install it?",
    a: "We do both — supply and full on-ground installation. We don't hand you equipment and leave. Our in-house experienced crew surveys your land, designs the hydraulic system, constructs physical stands, installs the lines, and tests everything fully before handing over."
  },
  {
    q: "Can I get a subsidy on irrigation or solar pump installation?",
    a: "Yes, many farmers can. We'll check your eligibility honestly based on your landholding records, category type, and district location. Call us and we will tell you straight exactly what schemes or PDMC/KUSUM support is active."
  },
  {
    q: "What brands do you use?",
    a: "We are authorized dealers of Premier Irrigation Adritec Pvt. Ltd. and Jain Irrigation Systems Ltd. We also source Netafim systems and other reputed ISI-certified components depending on the needs of the farmland."
  },
  {
    q: "Do you build polyhouses outside West Bengal?",
    a: "Yes, we construct turnkey greenhouse structures across West Bengal and regularly extend into neighbouring states. Get in touch with your specific location block and we can confirm direct service coverage."
  },
  {
    q: "How long does installation take?",
    a: "It depends entirely on the scope. A standard drip irrigation layout on 1–2 acres typically takes a few working days. A complete turnkey polyhouse structure with internal fogger lines can take a few weeks. We provide a clear commitment schedule before any on-ground excavation starts."
  },
  {
    q: "What is the maintenance like for drip or sprinkler systems?",
    a: "These systems mainly need regular flushing of screen/disc filters and checking individual emitter nozzle lines for calcium clog blocks. We guide you through simple maintenance basics after installation, and our technicians are always reachable if a line needs attention."
  },
  {
    q: "Do you handle the government paperwork for subsidies?",
    a: "We assist with all drawings, technical layouts, and estimation sheets required for submissions. We cannot guarantee government approval — that resides with the verifying state officer — but we make sure your documentation is correct and complete."
  },
  {
    q: "What solar pump capacity do you install?",
    a: "We supply and install submersibles and surface solar pumps ranging from 2 HP to 7.5 HP depending on your target acreage, irrigation crop, and seasonal borewell water levels."
  }
];

export default function Contact() {
  const customPhone = "+91 90518 78901";
  const customWhatsApp = "+91 90518 78901";
  const customEmail = "contact@greenviewagrotech.com";
  const officeAddress = "Green View Agro Tech, NH-34, Near Agri-Market, Barasat, Kolkata, West Bengal 700125";
  const workHours = "Monday – Saturday, 9:00 AM to 6:00 PM";

  // Key Operation Districts
  const districts = ["Nadia", "Hooghly", "Murshidabad", "Bankura", "Purulia", "Bardhaman", "South 24 Parganas", "North 24 Parganas"];

  // Form states
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [loc, setLoc] = useState("");
  const [interest, setInterest] = useState("Drip Irrigation");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Accordion faq tracker
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // In a real app we would submit via API, but let's persist local state
    }, 100);
  };

  const handleWhatsAppClick = () => {
    const customText = `Hello Green View Agro Tech! I am reaching out from your contact form.\n- Name: ${name || "Farmer"}\n- Mobile: ${mobile || "N/A"}\n- District: ${loc || "West Bengal"}\n- Interest: ${interest}\n- Message: ${msg || "Looking for details"}`;
    const url = `https://wa.me/${customWhatsApp.replace(/[+\s]/g, '')}?text=${encodeURIComponent(customText)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-20 bg-[#fafbfa]">
      {/* 🔷 PAGE HEADER */}
      <section className="bg-gradient-to-r from-green-950 to-emerald-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=1500" 
            alt="Field irrigation connection" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-green-400 font-extrabold uppercase tracking-[0.2em] text-xs">Reach Out</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-none text-white text-shadow animate-fade-in">
            Let's Talk About <span className="text-green-400">Your Farm.</span>
          </h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mt-4 font-semibold">
            Whether you have a clear project in mind or just want to understand your options, we are happy to talk.
          </p>
        </div>
      </section>

      {/* 🔷 CONTACT BLOCK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-4 space-y-10">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-black text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">Direct Contact</span>
                <h2 className="text-3xl font-black text-gray-950 tracking-tight">On-Ground Details</h2>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Speak directly to our technicians. We don't employ automated speech bots, you get a real installer who knows the terrain.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="bg-green-100 p-3.5 rounded-2xl text-green-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-950 text-sm uppercase tracking-wide">Call us:</h4>
                    <p className="text-gray-700 text-base font-semibold mt-1">{customPhone}</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 items-start">
                  <div className="bg-[#25D366]/10 p-3.5 rounded-2xl text-[#25D366] shrink-0">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-950 text-sm uppercase tracking-wide">WhatsApp:</h4>
                    <p className="text-gray-700 text-base font-semibold mt-1">{customWhatsApp}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-50 text-blue-600 p-3.5 rounded-2xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-950 text-sm uppercase tracking-wide">Email:</h4>
                    <p className="text-gray-700 text-base font-semibold mt-1">{customEmail}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-50 text-amber-600 p-3.5 rounded-2xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-950 text-sm uppercase tracking-wide">Office Address:</h4>
                    <p className="text-gray-700 text-sm font-semibold mt-1 leading-relaxed">{officeAddress}</p>
                  </div>
                </div>

                {/* Care Hours */}
                <div className="flex gap-4 items-start">
                  <div className="bg-indigo-50 text-indigo-600 p-3.5 rounded-2xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-950 text-sm uppercase tracking-wide">Working Hours:</h4>
                    <p className="text-gray-750 text-sm font-semibold mt-1">{workHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8 bg-gray-50 border border-gray-150 rounded-3.5xl p-8 sm:p-12 shadow-sm">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight mb-2">Request an Estimate</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-8">We will review your land plan details and get back within 24 hours.</p>

              {submitted ? (
                <div className="bg-green-150/50 border border-green-250 p-6 rounded-2xl text-center space-y-4">
                  <div className="bg-green-600 text-white p-3 rounded-full w-fit mx-auto shadow">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900">Inquiry Received Successfully!</h4>
                  <p className="text-gray-700 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Our local installation team has queued your details for {loc || "West Bengal"}. 
                  </p>
                  <div className="pt-2">
                    <button 
                      onClick={handleWhatsAppClick}
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm inline-flex items-center gap-2 shadow"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" /> Immediately Chase on WhatsApp
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Somnath Roy"
                        className="w-full bg-white border border-gray-200 py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                        required
                      />
                    </div>

                    {/* Mobile */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Mobile Number</label>
                      <input 
                        type="tel" 
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="e.g. +91 98765 01234"
                        className="w-full bg-white border border-gray-200 py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* District */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">District / Location</label>
                      <input 
                        type="text" 
                        value={loc}
                        onChange={(e) => setLoc(e.target.value)}
                        placeholder="e.g. Nadia, West Bengal"
                        className="w-full bg-white border border-gray-200 py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                        required
                      />
                    </div>

                    {/* Interest Dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">What are you interested in?</label>
                      <select 
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full bg-white border border-gray-200 py-3.5 px-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                      >
                        <option>Drip Irrigation</option>
                        <option>Sprinkler Irrigation</option>
                        <option>Polyhouse</option>
                        <option>Solar Pump</option>
                        <option>Government Subsidy Help</option>
                        <option>Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Messaging */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Brief Message (Optional)</label>
                    <textarea 
                      rows={3}
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      placeholder="Discuss crop types, pump depth, or timeline requests..."
                      className="w-full bg-white border border-gray-200 py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all shadow shadow-green-600/10 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                  >
                    Submit Request Form <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 🔷 SERVICE OPERATIONS DISTRICTS */}
      <section className="py-16 bg-[#fafbfa] border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-gray-950">Active Operational Districts</h3>
            <p className="text-gray-600 text-sm mt-1">We primarily serve West Bengal and extend into neighbouring states. Districts we regularly work on-site in include:</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {districts.map((d) => (
              <span key={d} className="bg-white border border-gray-150 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-gray-800 shadow-xs">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 FAQ PAGE (Page 10) Accordion Widget */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-green-600 font-bold uppercase tracking-widest text-xs bg-green-50 px-4 py-1.5 rounded-full inline-block mb-4">Straight Answers</span>
            <h2 className="text-3xl sm:text-4.5xl font-black text-gray-900 tracking-tight">Questions We Hear All the Time</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Get direct, honest operational guidance regarding our services and subsidy claims.</p>
          </div>

          <div className="space-y-4">
            {faqQuestions.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 border border-gray-150 rounded-2xl overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 font-bold text-left text-gray-950 flex justify-between items-center gap-4 hover:bg-gray-100 transition-colors text-sm sm:text-base"
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-green-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-200 bg-white"
                    >
                      <p className="py-5 px-6 text-gray-700 text-xs sm:text-sm leading-relaxed text-justify">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

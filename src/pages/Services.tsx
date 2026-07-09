import { useState, useEffect, FormEvent } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Droplets, Sun, CloudRain, Shield, CheckCircle2, 
  ArrowRight, Calculator, FileText, Check, Phone, HelpCircle, Briefcase, Play,
  FileCheck, ShieldAlert, Landmark, Sparkles, ChevronRight, AlertTriangle
} from "lucide-react";

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "pmsuryaghar";
  
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && ["pmsuryaghar", "irrigation", "polyhouse", "solar"].includes(tabParam)) {
      setActiveTab(tabParam);
    } else if (tabParam === "subsidies") {
      setActiveTab("pmsuryaghar");
    }
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // State for Surya Ghar Solar Calculator
  const [bill, setBill] = useState<number>(1500);
  const [calculatedSize, setCalculatedSize] = useState<any>({
    size: "3 kW",
    cost: "₹1,65,000 - ₹1,90,000",
    subsidy: "₹78,000",
    netPayable: "₹87,000 - ₹1,12,000",
    generation: "300 - 400",
    savings: "₹24,000 - ₹36,000",
    area: "300 sq ft"
  });

  const handleBillCalculate = (monthlyBill: number) => {
    setBill(monthlyBill);
    if (monthlyBill < 800) {
      setCalculatedSize({
        size: "1 kW",
        cost: "₹65,000 - ₹75,000",
        subsidy: "₹30,000",
        netPayable: "₹35,000 - ₹45,000",
        generation: "100 - 130",
        savings: "₹8,000 - ₹12,000",
        area: "100 sq ft"
      });
    } else if (monthlyBill >= 800 && monthlyBill < 1500) {
      setCalculatedSize({
        size: "2 kW",
        cost: "₹1,20,000 - ₹1,40,000",
        subsidy: "₹60,000",
        netPayable: "₹60,000 - ₹80,000",
        generation: "200 - 260",
        savings: "₹16,000 - ₹22,000",
        area: "200 sq ft"
      });
    } else if (monthlyBill >= 1500 && monthlyBill < 2500) {
      setCalculatedSize({
        size: "3 kW",
        cost: "₹1,65,000 - ₹1,90,000",
        subsidy: "₹78,000",
        netPayable: "₹87,000 - ₹1,12,000",
        generation: "300 - 400",
        savings: "₹24,000 - ₹36,000",
        area: "300 sq ft"
      });
    } else if (monthlyBill >= 2500 && monthlyBill < 3500) {
      setCalculatedSize({
        size: "4 kW",
        cost: "₹2,20,000 - ₹2,50,000",
        subsidy: "₹78,000",
        netPayable: "₹1,42,000 - ₹1,72,000",
        generation: "400 - 520",
        savings: "₹32,000 - ₹48,000",
        area: "400 sq ft"
      });
    } else {
      setCalculatedSize({
        size: "5 kW",
        cost: "₹2,75,000 - ₹3,10,000",
        subsidy: "₹78,000",
        netPayable: "₹1,97,000 - ₹2,32,000",
        generation: "500 - 650",
        savings: "₹40,000 - ₹60,000",
        area: "500 sq ft"
      });
    }
  };

  // Core Numbers
  const phoneNo = "+91 90518 78901";
  const whatsappMsgSolar = `Hello Green View, I am interested in checking my PM Surya Ghar Rooftop Solar eligibility. My monthly bill is around ₹${bill}. Please guide me!`;

  return (
    <div className="bg-[#fafbfa]">
      {/* Dynamic Jumbotron (Fixed top gap and white line issue by removing wrapper padding and increasing top padding) */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-950 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1500" 
            alt="Water resource management" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-green-400 font-extrabold uppercase tracking-[0.2em] text-xs">Our Services</span>
          <h1 className="text-4xl sm:text-5.5xl font-black tracking-tight text-white drop-shadow-md">
            Complete Solutions for Your Farm & Home.
          </h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto font-medium">
            From precision irrigation on your fields to ₹78,000 government-subsidised rooftop solar on your roof — we design, install, and stand behind everything.
          </p>
        </div>
      </section>

      {/* Tabs Menu Navigation */}
      <section className="bg-white border-b border-gray-150 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex md:justify-center overflow-x-auto gap-2 md:gap-4 py-3 scrollbar-none">
            {[
              { id: "pmsuryaghar", label: "PM Surya Ghar (₹78K Subsidy)", icon: Sparkles, isSpecial: true },
              { id: "irrigation", label: "Irrigation Systems", icon: Droplets },
              { id: "polyhouse", label: "Polyhouse Construction", icon: Sun },
              { id: "solar", label: "Solar Pumping", icon: CloudRain }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm shrink-0 transition-all ${
                  activeTab === tab.id 
                    ? tab.isSpecial 
                      ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20" 
                      : "bg-green-600 text-white shadow-lg shadow-green-600/10" 
                    : tab.isSpecial
                      ? "bg-amber-50/70 text-amber-800 hover:bg-amber-100/80 border border-amber-200/50"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-150"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            
            {/* 🔷 1. PM SURYA GHAR TAB (PDF 2 details) */}
            {activeTab === "pmsuryaghar" && (
              <motion.div
                key="tab-pmsuryaghar"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {/* Intro section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full">
                      Official PM Surya Ghar Registered Vendor — West Bengal
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
                      Get Rooftop Solar. <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                        Get ₹78,000 Back
                      </span> <br />
                      From the Government.
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      The government is giving homeowners up to ₹78,000 in direct subsidy to install solar panels — plus up to 300 units of free electricity every month. We are officially registered under PM Surya Ghar for both WBSEDCL and CESC areas. We handle everything: registration, installation, net metering, and your subsidy — until the money is in your bank account.
                    </p>
                    
                    {/* Big stats row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                      <div className="bg-white p-4 rounded-2xl border border-gray-150 shadow-sm text-center">
                        <span className="text-2xl font-black text-amber-600 block">₹78K</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block mt-1">Max Govt. Subsidy</span>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-gray-150 shadow-sm text-center">
                        <span className="text-2xl font-black text-amber-600 block">300</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block mt-1">Free Units/Month</span>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-gray-150 shadow-sm text-center">
                        <span className="text-2xl font-black text-amber-600 block">~7%</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block mt-1">Bank Loan p.a.</span>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-gray-150 shadow-sm text-center">
                        <span className="text-2xl font-black text-amber-600 block">30 Days</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block mt-1">Subsidy in Account</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a 
                        href={`tel:${phoneNo.replace(/\s+/g, '')}`}
                        className="bg-amber-500 hover:bg-amber-400 text-white font-extrabold py-4 px-8 rounded-2xl text-sm transition-all text-center"
                      >
                        Book Free Home Visit
                      </a>
                      <a 
                        href="#solar-calculator"
                        className="bg-white hover:bg-gray-50 text-gray-800 font-bold border border-gray-300 py-4 px-8 rounded-2xl text-sm transition-all text-center"
                      >
                        Calculate My Subsidy →
                      </a>
                    </div>
                  </div>

                  {/* Illustration/Image card (from PDF 2 Page 9) */}
                  <div className="bg-gradient-to-br from-emerald-900 to-green-950 p-8 sm:p-12 rounded-3.5xl text-white shadow-xl space-y-6 relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      CESC Registered
                    </div>
                    <div className="absolute bottom-4 left-4 bg-emerald-800/80 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      WBSEDCL Empanelled
                    </div>
                    <div className="space-y-2">
                      <span className="text-green-300 text-xs font-bold uppercase tracking-widest block">Clean Power</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Rooftop Solar Built for West Bengal Homes</h3>
                      <p className="text-green-100 text-xs sm:text-sm leading-relaxed">
                        We install heavy-duty monocrystalline solar panels with certified smart micro/string inverters that withstand local summer storms and deliver high performance.
                      </p>
                    </div>

                    {/* Cute illustrative house with solar panels */}
                    <div className="bg-white/10 rounded-2xl p-6 border border-white/20 flex flex-col items-center justify-center text-center space-y-3">
                      <Sun className="w-12 h-12 text-yellow-400 animate-pulse" />
                      <span className="text-sm font-bold">100% Empanelled & Approved Setup</span>
                      <p className="text-xs text-green-200">Our team manages your whole pipeline on the official portal start to finish.</p>
                    </div>
                  </div>
                </div>

                {/* Core Stats Banner */}
                <div className="bg-[#0f172a] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-black text-amber-500 block">₹78,000</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">MAX GOVT. SUBSIDY DIRECT TO YOUR BANK</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-black text-amber-500 block">300 Units</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">FREE ELECTRICITY EVERY MONTH</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-black text-amber-500 block">₹17,000+</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">ANNUAL EARNING FROM SURPLUS POWER</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-black text-amber-500 block">25 Years</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">SOLAR PANEL LIFESPAN</span>
                  </div>
                </div>

                {/* "1 kW to 5 kW — Every Detail Explained" Section */}
                <div className="space-y-8 pt-8">
                  <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full inline-block">System Sizes & Pricing</span>
                    <h3 className="text-3xl sm:text-4.5xl font-black text-gray-900 tracking-tight">1 kW to 5 kW — Every Detail Explained.</h3>
                    <p className="text-gray-650 text-sm sm:text-base">
                      Tentative cost, government subsidy, what you actually pay, electricity generation, rooftop space, and payback — for every system size. Pick yours.
                    </p>
                  </div>

                  {/* Subsidy cap warning banner */}
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start max-w-4xl mx-auto">
                    <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-amber-900 text-sm">Government Subsidy is Capped at 3 kW — This Matters for Your Decision</h4>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        The maximum subsidy under PM Surya Ghar is <strong>₹78,000</strong> — whether you install 3 kW, 4 kW, or 5 kW. For 4 kW and 5 kW, you receive the same ₹78,000 subsidy as a 3 kW system, but your cost is significantly higher. Choose a system size based on your actual electricity consumption, not just the subsidy amount.
                      </p>
                    </div>
                  </div>

                  {/* 5 columns table grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {[
                      {
                        kw: "1 kW",
                        subsidy: "₹30,000",
                        subText: "60% of benchmark cost. Credited directly to bank.",
                        total: "₹65,000 - ₹75,000",
                        pay: "₹35,000 - ₹45,000",
                        genDaily: "3.5 - 4.5 units/day",
                        genDailySub: "Avg 4 units/day in West Bengal",
                        genMonthly: "100 - 130 units/month",
                        genAnnual: "1,200 - 1,500 units/year",
                        savings: "₹8,000 - ₹12,000/year",
                        space: "~100 sq ft (10 sq m)",
                        suited: "Very small home, 1-2 rooms, basic appliances. Monthly electricity bill ₹400-₹800. Limited rooftop space.",
                        payback: "4-5 years",
                        isPopular: false
                      },
                      {
                        kw: "2 kW",
                        subsidy: "₹60,000",
                        subText: "60% of benchmark cost for 2 kW. Direct bank transfer.",
                        total: "₹1,20,000 - ₹1,40,000",
                        pay: "₹60,000 - ₹80,000",
                        genDaily: "7 - 9 units/day",
                        genDailySub: "Avg 8 units/day in West Bengal",
                        genMonthly: "200 - 260 units/month",
                        genAnnual: "2,400 - 3,000 units/year",
                        savings: "₹16,000 - ₹22,000/year",
                        space: "~200 sq ft (20 sq m)",
                        suited: "Small to medium home, 2-3 rooms, 1 fan + 1 small AC. Monthly bill ₹800-₹1,500.",
                        payback: "3-4 years",
                        isPopular: false
                      },
                      {
                        kw: "3 kW",
                        subsidy: "₹78,000",
                        subText: "₹78,000 MAXIMUM: ₹60,000 for first 2 kW + ₹18,000 for 3rd kW.",
                        total: "₹1,65,000 - ₹1,90,000",
                        pay: "₹87,000 - ₹1,12,000",
                        genDaily: "10.5 - 13.5 units/day",
                        genDailySub: "Avg 12 units/day in West Bengal",
                        genMonthly: "300 - 400 units/month",
                        genAnnual: "3,600 - 4,800 units/year",
                        savings: "₹24,000 - ₹36,000/year",
                        space: "~300 sq ft (30 sq m)",
                        suited: "Standard WB family home, 3-4 rooms, 1-2 ACs, refrigerator, washing machine. Monthly bill ₹1,500-₹2,500. This is the sweet spot — maximum subsidy, covers most homes fully.",
                        payback: "3-4 years",
                        isPopular: true
                      },
                      {
                        kw: "4 kW",
                        subsidy: "₹78,000",
                        subText: "No additional subsidy beyond 3 kW. Capped at ₹78,000.",
                        total: "₹2,20,000 - ₹2,50,000",
                        pay: "₹1,42,000 - ₹1,72,000",
                        genDaily: "14 - 18 units/day",
                        genDailySub: "Avg 16 units/day in West Bengal",
                        genMonthly: "400 - 520 units/month",
                        genAnnual: "4,800 - 6,200 units/year",
                        savings: "₹32,000 - ₹48,000/year",
                        space: "~400 sq ft (40 sq m)",
                        suited: "Larger home, 4-5 rooms, 2 ACs, heavy usage. Monthly bill ₹2,500-₹3,500. Choose only if your consumption genuinely exceeds 3 kW output.",
                        payback: "4-5 years",
                        isPopular: false
                      },
                      {
                        kw: "5 kW",
                        subsidy: "₹78,000",
                        subText: "No additional subsidy beyond 3 kW. Capped at ₹78,000.",
                        total: "₹2,75,000 - ₹3,10,000",
                        pay: "₹1,97,000 - ₹2,32,000",
                        genDaily: "17.5 - 22.5 units/day",
                        genDailySub: "Avg 20 units/day in West Bengal",
                        genMonthly: "500 - 650 units/month",
                        genAnnual: "6,000 - 7,800 units/year",
                        savings: "₹40,000 - ₹60,000/year",
                        space: "~500 sq ft (50 sq m)",
                        suited: "Large bungalow, multiple floors, small shop or home office. Monthly bill ₹3,500+. Significant surplus electricity sold back to grid annually.",
                        payback: "4-5 years",
                        isPopular: false
                      }
                    ].map((col) => (
                      <div 
                        key={col.kw}
                        className={`bg-white rounded-2xl border flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all ${
                          col.isPopular 
                            ? "border-amber-500 ring-2 ring-amber-500/15" 
                            : "border-gray-150"
                        }`}
                      >
                        {col.isPopular && (
                          <div className="bg-amber-400 text-amber-950 text-center text-[10px] font-black uppercase tracking-widest py-1.5 block leading-none">
                            Most Popular & Best Value
                          </div>
                        )}
                        
                        {/* Solid colored header block matching user requested screenshot */}
                        <div className={`text-white p-6 text-center flex flex-col items-center justify-center border-b ${
                          col.isPopular 
                            ? "bg-orange-600 border-orange-700" 
                            : col.kw === "4 kW" || col.kw === "5 kW"
                              ? "bg-slate-700 border-slate-800"
                              : "bg-[#14532d] border-green-800"
                        }`}>
                          <span className="text-4xl font-black tracking-tight block leading-none">{col.kw}</span>
                          <span className="text-[10px] text-white/70 uppercase font-bold tracking-widest mt-2 block leading-none">SYSTEM SIZE</span>
                          <div className={`px-4.5 py-1.5 rounded-full text-xs font-black text-white inline-flex items-center justify-center mt-3.5 border shadow-sm leading-none ${
                            col.isPopular 
                              ? "bg-white/20 border-white/20" 
                              : col.kw === "4 kW" || col.kw === "5 kW"
                                ? "bg-white/10 border-white/10"
                                : "bg-white/15 border-white/10"
                          }`}>
                            {col.subsidy} {col.isPopular ? "Max Subsidy" : col.kw === "4 kW" || col.kw === "5 kW" ? "Subsidy (Same as 3kW)" : "Subsidy"}
                          </div>
                        </div>

                        <div className="p-5 space-y-4 flex-grow">
                          <div className="space-y-3.5 text-xs">
                            <div>
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Subsidy Details:</span>
                              <p className="text-[10px] text-gray-600 leading-relaxed mt-0.5">{col.subText}</p>
                            </div>

                            <div>
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Tentative Total Cost:</span>
                              <span className="font-extrabold text-gray-700 block mt-0.5">{col.total}</span>
                            </div>

                            <div className="bg-amber-50/50 p-2.5 rounded-lg border border-amber-100">
                              <span className="text-amber-800 block font-extrabold uppercase text-[9px]">You Pay (After Subsidy):</span>
                              <span className="font-black text-amber-700 block text-sm mt-0.5">{col.pay}</span>
                            </div>

                            <div className="border-t border-gray-100 pt-3 space-y-1.5">
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Daily Generation:</span>
                              <span className="font-bold text-gray-800 block">{col.genDaily}</span>
                              <span className="text-[9px] text-gray-400 block">{col.genDailySub}</span>
                            </div>

                            <div>
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Monthly Generation:</span>
                              <span className="font-bold text-gray-800 block">{col.genMonthly}</span>
                            </div>

                            <div>
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Annual Savings (Est):</span>
                              <span className="font-bold text-green-600 block">{col.savings}</span>
                            </div>

                            <div>
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Rooftop Area Needed:</span>
                              <span className="font-bold text-gray-800 block">{col.space}</span>
                            </div>

                            <div className="border-t border-gray-100 pt-3">
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Best Suited For:</span>
                              <p className="text-[10px] text-gray-600 leading-relaxed mt-1 text-justify">{col.suited}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 border-t border-gray-100 p-4 text-center">
                          <span className="text-[10px] text-gray-400 font-bold block">Payback Period:</span>
                          <span className="text-xs font-black text-gray-700 block mt-0.5">~{col.payback}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center text-xs text-gray-400 leading-relaxed max-w-3xl mx-auto pt-2">
                    <strong>Important Note:</strong> All costs shown above are tentative estimates for West Bengal market rates as of 2025-2026. Actual costs may vary based on rooftop type, site conditions, solar panel technology chosen, and inverter brand. We provide a firm written quote during our free home visit before any commitment is made.
                  </div>
                </div>

                {/* Instant Subsidy Estimator Tool Integrated directly! */}
                <div id="solar-calculator" className="bg-white rounded-3.5xl p-8 sm:p-12 border border-gray-150 shadow-md grid grid-cols-1 lg:grid-cols-2 gap-12 scroll-mt-24">
                  <div className="space-y-6">
                    <span className="text-green-600 font-bold bg-green-50 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest inline-block">Quick Reference Tool</span>
                    <h3 className="text-2xl sm:text-4.5xl font-black text-gray-950 tracking-tight leading-none">Which System Size is Right for You?</h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Enter your current monthly electricity bill or drag the slider, and our calculator will instantly recommend the ideal solar system size, show your government subsidy, and outline your net savings.
                    </p>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Monthly Electricity Bill</label>
                        <span className="text-xl font-black text-amber-600 bg-amber-50 px-3.5 py-1 rounded-xl">₹{bill}</span>
                      </div>
                      <input 
                        type="range" 
                        min="300" 
                        max="5000" 
                        step="100"
                        value={bill}
                        onChange={(e) => handleBillCalculate(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                      />
                      <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase">
                        <span>Below ₹800</span>
                        <span>₹800 - ₹1,500</span>
                        <span>₹1,500 - ₹2,500</span>
                        <span>Above ₹2,500</span>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl space-y-2 text-xs">
                      <h4 className="font-bold text-amber-900 uppercase tracking-wider text-[11px]">Recommended Size: {calculatedSize.size}</h4>
                      <p className="text-amber-800 leading-relaxed text-justify">
                        Based on your bill, a <strong>{calculatedSize.size}</strong> system is recommended. It will generate around <strong>{calculatedSize.generation} units/month</strong>, which completely offsets your bill, giving you free power.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-150 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-extrabold text-gray-950 pb-4 border-b border-gray-200">Your Solar Estimates:</h4>
                      <div className="grid grid-cols-2 gap-6 pt-4 text-xs">
                        <div>
                          <span className="text-gray-400 block font-bold uppercase text-[9px]">Government Subsidy:</span>
                          <span className="text-base font-black text-green-600 block leading-none mt-0.5">{calculatedSize.subsidy}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-bold uppercase text-[9px]">Tentative Cost:</span>
                          <span className="font-bold text-gray-800 block mt-0.5">{calculatedSize.cost}</span>
                        </div>
                        <div className="bg-amber-100/50 p-2.5 rounded-lg col-span-2">
                          <span className="text-amber-900 block font-extrabold uppercase text-[9px]">You Pay (After Subsidy):</span>
                          <span className="font-black text-amber-700 block text-base mt-0.5">{calculatedSize.netPayable}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-bold uppercase text-[9px]">Rooftop Space Needed:</span>
                          <span className="font-semibold text-gray-800 block mt-0.5">{calculatedSize.area}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-bold uppercase text-[9px]">Estimated Savings:</span>
                          <span className="font-bold text-green-600 block mt-0.5">{calculatedSize.savings}</span>
                        </div>
                      </div>
                    </div>

                    <a 
                      href={`https://wa.me/${phoneNo.replace(/[+\s]/g, '')}?text=${encodeURIComponent(whatsappMsgSolar)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-6 rounded-xl text-sm w-full text-center block transition-colors shadow-sm"
                    >
                      Book Free Assessment via WhatsApp
                    </a>
                  </div>
                </div>

                {/* 7 Documents Section (PDF 2 Page 2) */}
                <div className="space-y-8 pt-8">
                  <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full inline-block">Documents Required</span>
                    <h3 className="text-3xl sm:text-4.5xl font-black text-gray-900 tracking-tight leading-none">7 Documents. That's All You Need to Arrange.</h3>
                    <p className="text-gray-650 text-sm sm:text-base leading-relaxed">
                      We handle every other form, application, and follow-up. Just keep these ready.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { title: "Aadhaar Card", desc: "Identity & address verification. Name must match electricity bill & PAN exactly." },
                      { title: "Electricity Bill", desc: "Latest WBSEDCL or CESC bill showing consumer number and applicant name." },
                      { title: "Property Ownership Proof", desc: "Sale deed, mutation cert, property tax receipt, or Khata/Porcha (WB). You must own the property." },
                      { title: "Bank Account Details", desc: "Passbook copy or cancelled cheque. Subsidy is credited directly here via DBT." },
                      { title: "PAN Card", desc: "Required for DBT subsidy verification. PAN name must match Aadhaar exactly." },
                      { title: "Passport Photo", desc: "Recent passport-size photograph of the applicant for formal portal submissions." },
                      { title: "Rooftop Photos", desc: "We take these during the free home visit. You don't need to arrange this yourself." }
                    ].map((doc) => (
                      <div key={doc.title} className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm space-y-3">
                        <div className="bg-amber-50 text-amber-600 p-2.5 rounded-xl w-fit">
                          <FileCheck className="w-5 h-5" />
                        </div>
                        <h4 className="font-extrabold text-gray-950 text-base leading-tight">{doc.title}</h4>
                        <p className="text-gray-600 text-xs leading-relaxed text-justify">{doc.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Property ownership warning */}
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start max-w-4xl mx-auto">
                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-amber-900 text-sm">Property Ownership is Mandatory</h4>
                      <p className="text-xs text-amber-800 leading-relaxed text-justify">
                        Tenants without property ownership cannot receive the subsidy. Accepted property proof in West Bengal: Sale deed, Conveyance deed, Mutation certificate, Property tax receipt, or Porcha/Khata. If you're unsure which document to use, we'll guide you during the home visit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solar Bank Loans (PDF 2 Page 2 & 3) */}
                <div className="space-y-8 pt-8">
                  <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full inline-block">Bank Financing</span>
                    <h3 className="text-3xl sm:text-4.5xl font-black text-gray-900 tracking-tight leading-none">Can't Pay Upfront? The Govt. Has Arranged That Too.</h3>
                    <p className="text-gray-650 text-sm sm:text-base leading-relaxed">
                      12 Public Sector Banks offer collateral-free solar loans under PM Surya Ghar. We guide you through the JanSamarth Portal application — free of charge.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Loan Table */}
                    <div className="bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-sm">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-gray-100 text-gray-700 font-extrabold uppercase border-b border-gray-200">
                            <th className="p-4 sm:p-5">Loan Amount</th>
                            <th className="p-4 sm:p-5">Tenure</th>
                            <th className="p-4 sm:p-5">Approx. EMI</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-600 font-semibold">
                          <tr className="hover:bg-gray-50/50">
                            <td className="p-4 sm:p-5">₹40,000</td>
                            <td className="p-4 sm:p-5">5 Years</td>
                            <td className="p-4 sm:p-5 font-bold text-gray-900">~₹790/month</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50">
                            <td className="p-4 sm:p-5">₹60,000</td>
                            <td className="p-4 sm:p-5">7 Years</td>
                            <td className="p-4 sm:p-5 font-bold text-gray-900">~₹920/month</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50">
                            <td className="p-4 sm:p-5">₹87,000</td>
                            <td className="p-4 sm:p-5">7 Years</td>
                            <td className="p-4 sm:p-5 font-bold text-gray-900">~₹1,350/month</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50">
                            <td className="p-4 sm:p-5">₹1,20,000</td>
                            <td className="p-4 sm:p-5">10 Years</td>
                            <td className="p-4 sm:p-5 font-bold text-gray-900">~₹1,400/month</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="bg-amber-50 p-5 border-t border-gray-200 text-xs text-amber-800 leading-relaxed text-justify">
                        <strong>Smart Tip:</strong> Once the ₹78,000 subsidy reaches your account (30–45 days post-installation), prepay it against your loan principal — zero penalty. This cuts your remaining tenure significantly.
                      </div>
                    </div>

                    {/* Loan highlights and banks */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 border border-gray-150 space-y-4 shadow-sm">
                        <h4 className="font-extrabold text-gray-950 text-base uppercase tracking-wider pb-3 border-b border-gray-100">Loan Highlights</h4>
                        <ul className="space-y-3.5 text-xs text-gray-600">
                          <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Interest rate ~7% p.a. (Repo Rate + 0.5%)</li>
                          <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Collateral-free up to ₹2 lakh</li>
                          <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Up to ₹6 lakh with solar system as security</li>
                          <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Tenure: Up to 10-15 years</li>
                          <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Fully digital application via jansamarth.in</li>
                          <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Zero prepayment penalty</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-2xl p-6 border border-gray-150 space-y-4 shadow-sm">
                        <h4 className="font-extrabold text-gray-950 text-base uppercase tracking-wider pb-3 border-b border-gray-100">Banks Available under the scheme</h4>
                        <div className="flex flex-wrap gap-2 pt-1 text-[10px] font-bold text-gray-500 uppercase">
                          {["SBI", "Canara Bank", "Union Bank", "Indian Bank", "Bank of Baroda", "PNB", "Bank of India", "UCO Bank", "Central Bank", "IOB", "+ 2 more"].map((b) => (
                            <span key={b} className="bg-gray-100 border border-gray-200 py-1.5 px-3 rounded-lg">{b}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7 Steps Process (PDF 2 Page 8) */}
                <div className="bg-white rounded-3.5xl p-8 sm:p-12 border border-gray-150">
                  <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full inline-block">How It Works</span>
                    <h3 className="text-3xl sm:text-4.5xl font-black text-gray-900 tracking-tight leading-none">From Your First Call to Free Electricity. <br />7 Steps. We Handle 6 of Them.</h3>
                    <p className="text-gray-650 text-sm sm:text-base leading-relaxed">
                      Every step explained. No surprises, no hidden stages. This is exactly what happens when you work with us.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { step: "1", days: "Day 1-2", title: "Free Rooftop Assessment", desc: "We visit your home, assess your rooftop space, check your electricity bill, and give you the exact system size, subsidy amount, and net cost. No commitment needed." },
                      { step: "2", days: "Day 3-7", title: "Portal Registration", desc: "We sit with you and register on pmsuryaghar.gov.in. You need Aadhaar + electricity bill. Takes 15 minutes. We do it together." },
                      { step: "3", days: "Day 7-10", title: "DISCOM Feasibility", desc: "Application sent to WBSEDCL or CESC for technical approval. We track the status, follow up, and update you — you don't need to call anyone." },
                      { step: "4", days: "Day 10-35", title: "Vendor Selection", desc: "Once approved, you select Green View Agro Tech on the portal as your official vendor. We finalize system specs and you confirm payment to begin." },
                      { step: "5", days: "Day 15-40", title: "MNRE-Grade Install", desc: "Our certified team installs solar panels, inverter, and wiring to MNRE standards. A 2–3 kW system is fully installed and tested in 1–2 days." },
                      { step: "6", days: "Day 40-65", title: "Net Meter & Inspection", desc: "We apply for net meter from DISCOM, handle the inspection, and complete commissioning — so your surplus electricity earns you credits automatically." },
                      { step: "7", days: "Day 70-100", title: "Subsidy in Your Account", desc: "We submit your bank details on the portal. The government transfers ₹78,000 directly to your account within 30 days. Your electricity bill is now near zero — forever." }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-50 border border-gray-150 rounded-2xl p-6 relative flex flex-col justify-between shadow-sm">
                        <div>
                          <span className="absolute top-4 right-4 text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">{item.days}</span>
                          <div className="text-3xl font-black text-amber-200">{item.step}</div>
                          <h4 className="font-extrabold text-gray-950 text-sm sm:text-base mb-2 mt-3">{item.title}</h4>
                          <p className="text-gray-600 text-xs leading-relaxed text-justify">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* "Why Choose Us" / "Most Installers Stop..." (PDF 2 Page 6) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
                  <div className="lg:col-span-3 text-center max-w-3xl mx-auto space-y-3 mb-6">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full inline-block">Why Green View</span>
                    <h3 className="text-2xl sm:text-4.5xl font-black text-gray-900 tracking-tight leading-none">Most Installers Stop at Installation. <br />We Stop at Subsidy.</h3>
                    <p className="text-gray-650 text-sm sm:text-base leading-relaxed">
                      The scheme is real. The ₹78,000 is real. But only registered vendors with the right process get you there. Here's what makes us different.
                    </p>
                  </div>

                  {[
                    { title: "Officially Registered — Not Just Anyone", desc: "We are an officially empanelled vendor on the PM Surya Ghar portal for both WBSEDCL and CESC areas. Only registered vendors can process your government subsidy. Installing through an unregistered installer means zero subsidy. Verify us directly on pmsuryaghar.gov.in before you commit." },
                    { title: "Complete D2C — We Never Pass You On", desc: "From your first phone call to the subsidy in your bank account — one team, one contact number, complete responsibility. We don't hand you a portal link and wish you luck. We sit with you, file for you, install for you, and follow up for you until the job is fully done." },
                    { title: "Unlimited Capacity — All of West Bengal", desc: "We cover both WBSEDCL and CESC areas with installation teams placed across the entire state — from Kolkata to Cooch Behar, Howrah to Haldia. We never say \"we'll come next month.\" We work as demand grows." }
                  ].map((card, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-150 shadow-sm space-y-4">
                      <div className="bg-amber-50 text-amber-600 p-3.5 rounded-2xl w-fit">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-950 tracking-tight leading-tight">{card.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">{card.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Eligibility Check (PDF 2 Page 6) */}
                <div className="bg-white rounded-3.5xl p-8 sm:p-12 border border-gray-150">
                  <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full inline-block">Eligibility</span>
                    <h3 className="text-3xl sm:text-4.5xl font-black text-gray-900 tracking-tight leading-none">Are You Eligible? Check in 30 Seconds.</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Qualify */}
                    <div className="bg-green-50/50 border border-green-200 rounded-2xl p-6 sm:p-8 space-y-4">
                      <h4 className="font-extrabold text-green-900 text-sm sm:text-base flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> You Qualify If:
                      </h4>
                      <ul className="space-y-3 text-xs text-green-800 font-semibold">
                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-green-600 shrink-0" /> You are an Indian citizen owning a home in West Bengal</li>
                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-green-600 shrink-0" /> You have an active domestic electricity connection (WBSEDCL or CESC) in your name</li>
                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-green-600 shrink-0" /> Your rooftop has enough space for solar panels</li>
                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-green-600 shrink-0" /> You have not previously received a rooftop solar subsidy</li>
                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-green-600 shrink-0" /> You own the property where panels will be installed</li>
                      </ul>
                    </div>

                    {/* Won't Qualify */}
                    <div className="bg-red-50/50 border border-red-200 rounded-2xl p-6 sm:p-8 space-y-4">
                      <h4 className="font-extrabold text-red-900 text-sm sm:text-base flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" /> You Won't Qualify If:
                      </h4>
                      <ul className="space-y-3 text-xs text-red-800 font-semibold">
                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-red-600 shrink-0" /> Your electricity connection is commercial, not residential</li>
                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-red-600 shrink-0" /> The meter is in someone else's name (tenant with no ownership)</li>
                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-red-600 shrink-0" /> You have already received a rooftop solar subsidy before</li>
                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-red-600 shrink-0" /> The property is not in your name or joint ownership</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-250 text-center text-xs text-gray-500 max-w-2xl mx-auto mt-8 font-semibold">
                    Not sure? We check your eligibility during your free home visit — no paperwork needed from you right now.
                  </div>
                </div>

                {/* Final bottom banner */}
                <div className="bg-gradient-to-r from-emerald-900 to-green-950 p-8 sm:p-12 rounded-3.5xl text-white text-center shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1500')] bg-cover pointer-events-none" />
                  <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                    <span className="text-amber-400 font-black text-2xl uppercase tracking-[0.2em] block leading-none">Don't Wait — Applications Are Open</span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">₹78,000 Is on the Table. Don't Let Your Neighbours Claim It First.</h3>
                    <p className="text-green-100 text-xs sm:text-sm leading-relaxed">
                      Free home visit. No commitment. We check your roof, calculate your subsidy, and tell you exactly what you'll pay. Takes 45 minutes. Could save you ₹78,000.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                      <a 
                        href={`tel:${phoneNo.replace(/\s+/g, '')}`}
                        className="bg-amber-500 hover:bg-amber-400 text-white font-extrabold py-4 px-8 rounded-2xl text-xs sm:text-sm shrink-0"
                      >
                        Book Free Home Visit
                      </a>
                      <a 
                        href={`https://wa.me/${phoneNo.replace(/[+\s]/g, '')}?text=${encodeURIComponent("Hello Green View, I am interested in checking my PM Surya Ghar Rooftop Solar eligibility.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold py-4 px-8 rounded-2xl text-xs sm:text-sm shrink-0 flex items-center justify-center gap-2"
                      >
                        WhatsApp Us Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/*  2. IRRIGATION TAB */}
            {activeTab === "irrigation" && (
              <motion.div
                key="tab-irrigation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {/* Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4.5xl font-extrabold text-gray-950 tracking-tight">
                      Irrigation Solutions That Actually Fit Your Farm
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Water is the most valuable thing on your farm, and losing it to inefficient systems means losing money season after season. We design and install irrigation systems that deliver water exactly where it's needed — no wastage, no guesswork. Whether you're a small farmer with a half-acre vegetable plot or a larger operation looking to cover many acres efficiently, we've done it before.
                    </p>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-md border border-gray-150">
                    <img 
                      src="https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_cudxto.jpg" 
                      alt="Drip line irrigation setup" 
                      className="w-full h-80 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Sub-categories (What We Do Section) */}
                <div className="space-y-8 pt-8">
                  <h3 className="text-2.5xl font-bold text-gray-900 border-b border-gray-200 pb-3">What We Do</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Drip Irrigation */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-sm space-y-4">
                      <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl w-fit">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-950">Drip Irrigation</h4>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        Drip irrigation delivers water directly to the root zone of each plant through a network of pipes, tubes, and emitters. It's proven to save 30–50% more water compared to flood irrigation and significantly improves crop yield and quality.
                      </p>
                       <p className="text-sm text-gray-500">
                        <strong>What we do::</strong> We design the layout based on your crop type, row spacing, soil type, and water source. We use equipment from Premier Irrigation Adritec, Jain Irrigation, and Netafim — all of which are field-tested and long-lasting. Our team does the full installation, from the main line to the last emitte.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Best for:</strong> Vegetables, fruits, cash crops, orchards, plantation crops
                      </p>
                    </div>

                    {/* Sprinkler Irrigation */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-sm space-y-4">
                      <div className="bg-blue-50 text-blue-500 p-3 rounded-2xl w-fit">
                        <CloudRain className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-950">Sprinkler Irrigation</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Sprinkler systems mimic rainfall — water is sprayed over the crop through a network of pipes and rotating or fixed sprinkler heads. It suits crops that benefit from uniform water coverage across the surface.
                      </p>
                       <p className="text-sm text-gray-500">
                        <strong>What we do::</strong> We assess your field size, water pressure availability, and crop type, and design a sprinkler system that covers your land evenly without overlapping zones or dry patches. Installation is clean, functional, and built to last.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Best for:</strong> Wheat, groundnuts, vegetables, lawns, large open fields.
                      </p>
                    </div>

                    {/* Mini & Micro */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-sm space-y-4">
                      <div className="bg-blue-50 text-teal-600 p-3 rounded-2xl w-fit">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-950">Mini & Micro Irrigation</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Mini and micro systems sit between drip and sprinkler — they're ideal for closely spaced crops, nurseries, and high-value cultivation where precision and coverage both matter.
                      </p>
                       <p className="text-sm text-gray-500">
                        <strong>What we do::</strong> We supply and install mini sprinklers and micro jets that can serve specific zones of your farm with the right application rate. These are popular in fruit orchards and protected cultivation setups.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Best for:</strong>  Orchards, nurseries, coconut, banana, arecanut farms.
                      </p>
                    </div>

                    {/* Pop-up Irrigation */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-sm space-y-4">
                      <div className="bg-gray-50 text-blue-600 p-3 rounded-2xl w-fit">
                        <Sun className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-950">Pop-Up Irrigation</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Pop-up sprinkler systems are designed mainly for private projects — gardens, lawns, landscapes, and institutional premises. The heads retract into the ground when not in use, keeping the area clean and the system protected.
                      </p>
                       <p className="text-sm text-gray-500">
                        <strong>What we do::</strong> We design and install pop-up systems for private clients including farmhouses, resorts, institutional campuses, and gardens. Full design-to-installation service..
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Best for:</strong> Private gardens, landscapes, golf courses, institutional premises.
                      </p>
                    </div>

                    {/* Foggers / Misting */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-sm space-y-4">
                      <div className="bg-teal-50 text-teal-600 p-3 rounded-2xl w-fit">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-950">Foggers / Misting Systems</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Foggers release ultra-fine water droplets that cool the air temperature and raise humidity. They're widely used inside polyhouses, nurseries, and in horticulture setups where temperature control matters.
                      </p>
                       <p className="text-sm text-gray-500">
                        <strong>What we do::</strong> We install fogging systems as standalone setups or as part of larger polyhouse or irrigation projects. We source quality fogger nozzles and fittings and install them with proper pressure lines.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Best for:</strong>  Polyhouses, nurseries, cooling in poultry or livestock sheds.
                      </p>
                    </div>

                     {/* GOVERNMENT SUBSIDY SUPPORT */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-sm space-y-4">
                      <div className="bg-teal-50 text-teal-600 p-3 rounded-2xl w-fit">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-950"> GOVERNMENT SUBSIDY SUPPORT </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We help eligible farmers apply for and receive government subsidies under schemes like PDMC (Pradhan Mantri Krishi Sinchayee Yojana related components) and state-level programs. We handle the documentation support and make the process as smooth as possible so you're not stuck in paperwork when you should be on your farm.
                      </p>
                    
                      <p className="text-sm text-gray-500">
                        <a 
                          href="tel:+919051878901" 
                          className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-700 font-bold hover:underline transition-all duration-200"
                        >
                          <Phone className="w-4.5 h-4.5" />
                          <strong>Talk to us about your eligibility: +91 90518 78901</strong>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 🔷 "Authorized Supply Point" text moved to a separate clean section below the grid for better layout as requested (PDF 3 Page 12) */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 sm:p-12 rounded-3.5xl border border-green-150 shadow-sm space-y-4 max-w-4xl mx-auto">
                  <span className="text-green-600 font-extrabold uppercase text-[10px] tracking-widest block mb-1">Our Brands & Quality Sourcing</span>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-950">Authorized Supply Point</h4>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    We use certified drip tubes and sprinkler parts from trusted Indian and global giants: <strong>Premier Irrigation Adritec</strong>, <strong>Jain Irrigation</strong>, and <strong>Netafim</strong>. Every component we install is certified, holding official warranties to guarantee durability and compliance under harsh field climates.
                  </p>
                  <div className="pt-2">
                    <Link 
                      to="/partners"
                      className="text-green-600 text-sm font-bold flex items-center gap-1.5 hover:text-green-700 transition-colors"
                    >
                      View Sourcing Partners & Certification <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Ground support strip (Government Subsidy Support (PDMC) section removed as requested for now) */}
              </motion.div>
            )}

            {/* 🔷 3. POLYHOUSE TAB */}
            {activeTab === "polyhouse" && (
              <motion.div
                key="tab-polyhouse"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {/* Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4.5xl font-extrabold text-gray-950 tracking-tight">
                      Polyhouses Built to Last — Because Your Crops Can't Afford Anything Less
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      A polyhouse extends your growing season, protects your crops from unpredictable weather, and helps you grow high-value produce that simply can't be done in open fields. We've been building polyhouses in West Bengal and neighbouring states, and we know how to design structures that hold up in our regional climate — the humidity, the monsoon winds, the heat.
                    </p>
                    
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-md border border-gray-150">
                    <img 
                      src="https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_4_q2f4uz.jpg" 
                      alt="Greenhouse construction" 
                      className="w-full h-80 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Material breakdown */}
                <div className="space-y-8 pt-6">
                  <h3 className="text-2.5xl font-bold text-gray-900 border-b border-gray-200 pb-3"> WHAT WE BUILD</h3>
                  <div className="space-y-3">
        
                  <p className="text-gray-600 text-sm leading-relaxed">
                        We handle the complete polyhouse project — from foundation to the last nut and bolt inside. Here's what goes into every structure we build:
                      </p>
                    </div>
                  
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Item 1 */}
                    <div className="space-y-3">
                      <span className="text-green-600 font-extrabold text-lg">01. Structural Framework</span>
                    { /* <h4 className="text-xl font-bold text-gray-950">Heavy-Duty Skeleton</h4> */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {/*Foundation pipes, columns, arches, purlins, and gutters form the backbone. We outsource these components from top manufacturers and assemble them on-site. Designed to handle crop load, wind, and trellis.*/}
                                                The skeleton of the polyhouse — foundation pipes, columns, arches, purlins, and gutters — forms the backbone of the entire structure. We outsource these components from quality manufacturers and assemble them on-site with our expert construction team. Every structure is designed to handle crop load, wind load, and the weight of internal systems.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="space-y-3">
                      <span className="text-green-600 font-extrabold text-lg">02. Covering Material (Polyethylene Film)</span>
                      {/* <h4 className="text-xl font-bold text-gray-950">UV-Stabilized Polyethylene Film</h4> */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                       {/* We install heavy duty, UV-stabilized poly sheets to filter sunlight and protect capsicum or flowers from pests. Secured tightly using high-grade aluminium profiles and spring grippers.*/}
We use UV-stabilized polyethylene sheets that protect your crops from harsh sunlight, pests, and heavy rain while still allowing the right amount of light transmission. The material we use is sourced from reliable suppliers and installed with aluminium profile grippers that hold it securely without tearing.
                      </p>
                    </div>

                    {/* Item 3 */}
                    <div className="space-y-3">
                      <span className="text-green-600 font-extrabold text-lg">03. Ventilation Systems</span>
                      {/* <h4 className="text-xl font-bold text-gray-950">Sufficient Air Exchange</h4> */}
                      <p className="text-gray-600 text-sm leading-relaxed">
Heat buildup inside a polyhouse can kill crops. We install properly designed ventilation — side vents, roof vents, or automated systems depending on the scale and crop requirement — to keep air moving and temperatures in check.
                        {/*Heat accumulation inside is toxic. We build optimized manual or automated side and roof roll-up vents to allow natural breeze to vent warm air during afternoons.*/}
                      </p>
                    </div>

                    {/* Item 4 */}
                    <div className="space-y-3">
                      <span className="text-green-600 font-extrabold text-lg">04. Foggers and Misting Inside</span>
                       {/* <h4 className="text-xl font-bold text-gray-950">Climate Regulation</h4> */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                       {/* For humidity management and heat drop, we install reliable mist and fogger arrays inside the polyhouse. */}
                        For crops that need humidity control or temperature reduction, we install fogging and misting systems within the polyhouse as part of the complete setup.
                      </p>
                    </div>

                    {/* Item 5 */}
                    <div className="space-y-3">
                      <span className="text-green-600 font-extrabold text-lg">05. Internal Drip Irrigation</span>
                     {/* <h4 className="text-xl font-bold text-gray-950">Integrated Drip Lines</h4> */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                       {/* Every polyhouse is preconfigured with customized drip systems inside, making watering and soluble fertigation clean, fully automatic, and completely precise. */}
                        Every polyhouse we build can be fitted with a drip irrigation system inside so water and fertigation are handled efficiently without manual labor inside the structure.
                      </p>
                    </div>

                    {/* Item 6 */}
                    <div className="space-y-3">
                      <span className="text-green-600 font-extrabold text-lg">06. Fan and Pad Cooling System</span>
                    {/*  <h4 className="text-xl font-bold text-gray-950">Evaporative Cooling Systems</h4> */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                       {/* For delicate seeds or high-end summer harvests, we build standard cellulose cooling wet pads and industrial exhaust fans to drop interiors by up to 10°C. */}
                        For summer-critical crops or larger polyhouses, we install fan and pad evaporative cooling systems that dramatically reduce internal temperature and protect yield quality
                      </p>
                    </div>
                  </div>
                </div>

                {/* Our Process  */}
                <div className="bg-gray-50 rounded-3.5xl p-8 sm:p-12 border border-gray-150">
                  <h3 className="text-2.5xl font-bold text-gray-950 text-center mb-12">Our 6-Step Polyhouse Process</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { step: "1", title: "Site Visit & Consultation", desc: " We visit your land, understand your crop plan, and discuss the size and type of structure that makes sense." },
                      { step: "2", title: "Design & Estimation", desc: "We give you a clear layout and cost estimate with no hidden additions." },
                      { step: "3", title: "Material Procurement", desc: "We source all components from trusted suppliers and manufacturers." },
                      { step: "4", title: "On-site Construction", desc: "Our own team builds the structure. We don't subcontract the core work." },
                      { step: "5", title: "Systems Integration", desc: "Ventilation, irrigation, cooling, foggers — installed and tested." },
                      { step: "6", title: "System Handover", desc: "We walk you through the system before we leave." }
                    ].map((step, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-150 relative shadow-sm">
                        <span className="absolute top-4 right-4 text-3xl font-black text-green-100 flex items-center justify-center bg-green-50 w-10 h-10 rounded-full">{step.step}</span>
                        <h4 className="font-extrabold text-gray-950 text-base sm:text-lg mb-2 pr-12">{step.title}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Geographical Coverage */}
                <div className="text-center bg-green-50 border border-green-100 p-8 rounded-3xl max-w-4xl mx-auto space-y-3">
                  <h4 className="text-xl font-bold text-gray-900">Where We Work</h4>
                  <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
                  We operate across <strong> West Bengal </strong> and in neighbouring states. If you're unsure whether we cover your area, just call us and we'll tell you directly.
                   {/* We construct turnkey agricultural structures across <strong>West Bengal</strong> and extend into neighbouring states. Not sure if we cover your area? Give us a call and we'll tell you directly!*/}
                  </p>
                  <div className="pt-2">
                    <Link to="/contact" className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-2xl text-sm inline-block">
                      Get a Free Site Consultation
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 🔷 4. SOLAR PUMPING TAB */}
            {activeTab === "solar" && (
              <motion.div
                key="tab-solar"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {/* Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4.5xl font-extrabold text-gray-950 tracking-tight">
                      Solar Pumps That Work as Hard as You Do — Without the Electricity Bill
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Diesel costs keep rising. Grid electricity isn't always reliable. And if you're farming in a location where power supply is irregular, you already know how much a dead pump can cost you in a dry spell. Solar pumping systems solve all of this in one shot — and thanks to government subsidies, many farmers can access them at a fraction of the actual cost.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg">
                    We supply and install solar surface pumps and solar submersible pumps, and we take care of the complete setup from the panel mounting structure down to the pump in the borewell or water body.
                     {/* We supply and install solar surface pumps and solar submersible pumps, taking care of the complete setup from the heavy galvanized mounting structures down to the pump motors.*/}
                    </p>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-md border border-gray-150">
                    <img 
                      src="https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_1_pqhs5k.jpg" 
                      alt="Solar panels on farm structure" 
                      className="w-full h-80 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Sub-categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                  {/* Surface Pumps */}
                  <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="h-48 overflow-hidden border-b border-gray-100">
                        <img 
                          src="https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_cudxto.jpg" 
                          alt="Surface pumping pool" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 space-y-4">
                        <div className="bg-amber-50 text-amber-600 p-2.5 rounded-xl w-fit">
                          <Sun className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-950">Solar Surface Pumps</h4>
                        <p className="text-gray-650 text-sm leading-relaxed text-justify">
                        Surface pumps sit above ground and draw water from open water sources — ponds, rivers, canals, or shallow wells. They're ideal for fields with accessible surface water nearby.
                         {/* Surface pump setups sit above the water level and draw cleanly from open sources like rivers, ponds, storage canals, or shallow surface rings. Sourced entirely from reputed brands.*/}
                        </p>
                      </div>
                    </div>
                    <div className="px-8 pb-8">
                      <p className="text-xs text-gray-500 font-bold bg-gray-50 border border-gray-150 p-2.5 rounded-lg text-center">
                        <strong className="font-extrabold text-[#090a0a]">What we supply and install:</strong>
                        Solar panels, pump controller, surface pump unit, piping, and module mounting structure. Every component is sourced from reputed manufacturers. Our team does the civil work, mounting, wiring, and commissioning..
                      </p>
                    </div>
                  </div>

                  {/* Submersible Pumps */}
                  <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="h-48 overflow-hidden border-b border-gray-100">
                        <img 
                          src="https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_1_pqhs5k.jpg" 
                          alt="Solar field" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 space-y-4">
                        <div className="bg-amber-50 text-yellow-600 p-2.5 rounded-xl w-fit">
                          <CloudRain className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-950">Solar Submersible Pumps</h4>
                        <p className="text-gray-650 text-sm leading-relaxed text-justify">
                                               Submersible pumps go down into a borewell or deep well and push water up to the surface. They're more powerful and suited for areas where the water table is deep.

                         
                        </p>
                      </div>
                    </div>
                    <div className="px-8 pb-8">
                      <p className="text-xs text-gray-500 font-bold bg-gray-50 border border-gray-150 p-2.5 rounded-lg text-center">
                        <strong className="font-extrabold text-[#090a0a]">What we supply and install : </strong>
                        Solar panels, MPPT pump controller, submersible pump, rising main pipes, panel mounting structure, and all necessary accessories. Fully installed and tested by our technicians.
                      </p>
                    </div>
                  </div>

                  {/* Mounting structure */}
                  <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="h-48 overflow-hidden border-b border-gray-100">
                        <img 
                          src="https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_4_q2f4uz.jpg" 
                          alt="Structure MMS panels" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 space-y-4">
                        <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl w-fit">
                          <Shield className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-950">Module Mounting Structures (MMS)</h4>
                        <p className="text-gray-650 text-sm leading-relaxed text-justify">
                        The panel mounting structure is often underestimated — but a poor structure means panels shifting angle, corroding, or collapsing in high winds. We fabricate our own module mounting structures using quality galvanized iron or aluminium profiles, sourcing the raw material and cutting/assembling it ourselves. This gives us full control over quality and lets us optimize the tilt angle for maximum sunlight capture at your location.
                          {/*The PV panel stand is crucial. A weak structure shifts, rusts, or collapses under regional storm winds. We fabricate our own custom MMS using quality galvanized iron, cutting it carefully to lock in optimal solar tilt angles.*/}
                        </p>
                      </div>
                    </div>
                    <div className="px-8 pb-8">
                     {/* <p className="text-xs text-gray-500 font-bold bg-gray-50 border border-gray-150 p-2.5 rounded-lg">
                        <strong>Features:</strong> High wind rating, zero rust corrosion, direct factory GI sizing.
                      </p>*/}
                    </div>
                  </div>

                  {/* NEW ADD ON */}

                   {/* GOVERNMENT SUBSIDY SCHEMES */}

                  <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="h-48 overflow-hidden border-b border-gray-100">
                        <img 
                          src="https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_4_q2f4uz.jpg" 
                          alt="Structure MMS panels" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 space-y-4">
                        <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl w-fit">
                          <Shield className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-950"> GOVERNMENT SUBSIDY SCHEMES </h4>
                        <div className="space-y-3 text-sm text-gray-650 leading-relaxed text-justify">
                          <p>
                            Eligible farmers and farmer groups can access substantial subsidies on solar pump installations under schemes like <strong> PM-KUSUM (Component B) </strong> and state-level programs. We assist with:
                          </p>
                          <ul className="list-disc pl-5 space-y-1.5 text-gray-750 font-medium">
                            <li>Checking eligibility</li>
                            <li>Documentation support</li>
                            <li>Coordination with relevant government departments</li>
                            <li>Ensuring the installation meets subsidy compliance requirements</li>
                          </ul>
                          <p>
                            If you're not sure whether you qualify, just{" "}
                            <a 
                              href={`https://wa.me/${phoneNo.replace(/[+\s]/g, '')}?text=${encodeURIComponent("Hello Green View, I am interested in checking my eligibility for PM-KUSUM / Govt Subsidy solar pump installations. Please guide me!")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-600 hover:text-emerald-700 font-extrabold underline transition-colors"
                            >
                              message us on WhatsApp
                            </a>{" "}
                            or{" "}
                            <a 
                              href={`tel:${phoneNo.replace(/\s/g, '')}`}
                              className="text-emerald-600 hover:text-emerald-700 font-extrabold underline transition-colors"
                            >
                              call us
                            </a>{" "}
                            — we'll find out for you.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-8 pb-8">
                     {/* <p className="text-xs text-gray-500 font-bold bg-gray-50 border border-gray-150 p-2.5 rounded-lg">
                        <strong>Features:</strong> High wind rating, zero rust corrosion, direct factory GI sizing.
                      </p>*/}
                    </div>
                  </div>

                   {/* PRIVATE INSTALLATIONS */}
                  <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="h-48 overflow-hidden border-b border-gray-100">
                        <img 
                          src="https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_4_q2f4uz.jpg" 
                          alt="Structure MMS panels" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 space-y-4">
                        <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl w-fit">
                          <Shield className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-950"> PRIVATE INSTALLATIONS </h4>
                        <div className="space-y-3 text-sm text-gray-650 leading-relaxed text-justify">
                          <p>
                            For farmers or businesses that don't fall under subsidy criteria or simply want a faster installation without waiting for government processes, we also do private solar pump installations at competitive pricing. Same quality, same team, faster timeline.
                          </p>
                          <p>
                            <a 
                              href={`https://wa.me/${phoneNo.replace(/[+\s]/g, '')}?text=${encodeURIComponent("Hello Green View, I want to find out what solar pump subsidy I am eligible for. Please guide me!")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-600 hover:text-emerald-700 font-extrabold underline transition-colors"
                            >
                              Message us on WhatsApp
                            </a>{" "}
                            or{" "}
                            <a 
                              href={`tel:${phoneNo.replace(/\s/g, '')}`}
                              className="text-emerald-600 hover:text-emerald-700 font-extrabold underline transition-colors"
                            >
                              call us
                            </a>{" "}
                            to find out what subsidy you're eligible for.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-8 pb-8">
                     {/* <p className="text-xs text-gray-500 font-bold bg-gray-50 border border-gray-150 p-2.5 rounded-lg">
                        <strong>Features:</strong> High wind rating, zero rust corrosion, direct factory GI sizing.
                      </p>*/}
                    </div>
                  </div>

  

                  

                </div>
                {/* Option A & Option B subsidy support omitted for now as requested (PDF 3 Page 15) */}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

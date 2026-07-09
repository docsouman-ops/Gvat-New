import { motion } from "motion/react";
import { CheckCircle2, Award, Zap, ShieldAlert, Heart, Activity, Globe, ShieldCheck } from "lucide-react";

const brandPartners = [
  {
     logoText: "Premier Irrigation Adritec Pvt. Ltd",
    status: "Authorised Dealer",
    desc: "We are authorized dealers of Premier Irrigation Adritec, one of India's leading manufacturers of drip irrigation, sprinkler irrigation, and micro irrigation products. Their equipment is specifically designed for Indian field conditions and has a strong track record across the country.",
    
  },
  {
    logoText: "Jain Irrigation Systems Ltd.",
    status: "Authorised Dealer",
    desc: "Jain Irrigation is one of the largest irrigation companies in the world and a household name in Indian agriculture. As authorized dealers, we supply their full range of drip and sprinkler systems and have access to their technical support when needed.",
  },
  {
   logoText: "Netafim",
    status: "Sourced Systems Partner",
    desc: "Netafim is an Israeli company and the world's pioneer in drip irrigation. Their products set the benchmark for precision water release and extreme durability under pressure. We source Netafim systems for projects demanding top performance.",
  },
  {
    logoText: "Captain Polyplast Ltd",
    status: "Authorised Dealer",
    desc: "A highly trusted brand in Indian agriculture, Captain Polyplast is a pioneer in premium quality micro-irrigation systems, polymer pipes, and durable drip line accessories.",
    
  },
  {
    name: "Greaves Cotton Limited",
    status: "Authorised Dealer",
    desc: "One of India's oldest and most prestigious engineering companies, manufacturing robust diesel engines, agricultural water pumps, and heavy tillers.",
    logoText: "Greaves Cotton"
  },
  {
    name: "VST Tillers Tractors Ltd",
    status: "Authorised Partner",
    desc: "Pioneers in high-efficiency farm machinery, power tillers, and compact tractors designed to streamline ground work for Indian smallholder farmers.",
    logoText: "VST Tillers"
  },
  {
    name: "C.R.I. Pumps",
    status: "Authorised Dealer",
    desc: "A global leader in water pumping systems. C.R.I. manufactures durable, energy-efficient agricultural motors, borewell submersibles, and solar solutions.",
    logoText: "C.R.I. Pumps"
  },
  {
    name: "Shakti Pumps",
    status: "Authorised Solar Partner",
    desc: "Shakti Pumps is an international leader in solar pump manufacturing, producing highly efficient stainless steel solar submersibles and smart controllers.",
    logoText: "Shakti Pumps"
  },
  {
    name: "Lubi Pumps",
    status: "Authorised Dealer",
    desc: "An engineering giant with over 50 years of experience, supplying trusted submersible, surface, and solar water pumps for various field sizes.",
    logoText: "Lubi Pumps"
  },
  {
    name: "Pahal-Solar",
    status: "Authorized Solar Dealer",
    desc: "Pahal-Solar manufactures top-tier solar photovoltaic panels using state-of-the-art technology to ensure high efficiency and durability.",
    logoText: "Pahal-Solar"
  },
  {
    name: "SOVA SOLAR",
    status: "Empanelled Solar Partner",
    desc: "A leading solar PV module manufacturer based in West Bengal, providing high-reliability certified panels for PM Surya Ghar and PM-KUSUM installations.",
    logoText: "SOVA SOLAR"
  },
  {
    name: "Latteys Industries Ltd",
    status: "Authorised Dealer",
    desc: "Latteys manufactures highly durable, power-saving water pumps, borewell submersibles, and solar agricultural motors engineered for consistent performance.",
    logoText: "Latteys Industries"
  },
  {
    name: "Agriplast Tech India Pvt. Ltd.",
    status: "Premium Sourcing Partner",
    desc: "Agriplast is a leading name in protected agriculture, supplying superior greenhouse cladding films, multi-span structures, and polyhouse shading materials.",
    logoText: "Agriplast"
  },
  {
    name: "GreenPro",
    status: "Sourced Systems Partner",
    desc: "Specialized in advanced agricultural textiles, providing high-quality weed mats, insect screens, and shade nets to protect crops from severe weather.",
    logoText: "GreenPro"
  }
];

const hardwareProducts = [
  {
    name: "Premium Drip Lateral Pipes",
    brand: "Premier Adritec / Jain / Captain",
    desc: "UV-stabilized linear low-density polyethylene tubes with built-in path drippers to resist clogging.",
    spec: "Sizes: 12mm, 16mm, 20mm | Spacing: 30cm to 60cm",
    category: "Irrigation Components"
  },
  {
    name: "Overhead Micro Sprinkler Heads",
    brand: "Jain Irrigation / Premier",
    desc: "Rotating nozzles designed to emulate uniform local rain. Best for orchard crop coverage.",
    spec: "Flow: 35 to 105 LPH | Radius: 1.5m to 4.5m",
    category: "Irrigation Components"
  },
  {
    name: "High-Pressure Fogger Array",
    brand: "Netafim",
    desc: "Anti-drip misting nozzles that suspend ultra-fine micro drops to lower greenhouse temperatures instantly.",
    spec: "Nozzle: 4-Way Cross | Operating pressure: 4.0 Bar",
    category: "Polyhouse Controls"
  },
  {
    name: "UV-Stabilized Polyethylene Cladding Film",
    brand: "Agriplast / GreenPro",
    desc: "200 Micron thick diffused polymer plastic film to resist scorching West Bengal afternoon sun and block pests.",
    spec: "Width: Up to 12m | Warranty: 5-Year UV Stability",
    category: "Polyhouse Controls"
  },
  {
    name: "Solar Submersible Bore Pump Set",
    brand: "Shakti / CRI / Lubi / Latteys",
    desc: "High-performance brushless DC submersible pumps rated to push deep water feeds smoothly up.",
    spec: "Rating: 2 HP to 7.5 HP | Flow rate: High Discharge",
    category: "Solar Pump Hardware"
  },
  {
    name: "Galvanized module stands (MMS)",
    brand: "Green View (In-House Fabrication)",
    desc: "Heavy structural panels fabricated by our own technicians to withstand severe cyclonic wind loads.",
    spec: "GI specs: Hot-dip Galvanized | Rated winds: 150 km/h",
    category: "Solar Pump Hardware"
  }
];

export default function Partners() {
  return (
    <div className="bg-[#fafbfa]">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-950 to-emerald-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780322531/ChatGPT_Image_Jun_1_2026_07_30_30_PM_iurca8.png" 
            alt="Agri warehouse background" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/*<span className="text-green-400 font-extrabold uppercase tracking-[0.2em] text-xs">Authentic Sourcing</span>*/}

          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-none text-white text-shadow">
            We Work With Names You Can Trust. <br />

           {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              Equipment We Stand Behind.
            </span> */}
          </h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mt-4 font-semibold">
           {/* We don't compromise on where we source our equipment. Every brand has been selected because it performs in real, rugged West Bengal soil. */}
           We don't compromise on where we source our equipment. Every brand we work with has been chosen because it performs in real field conditions — not just on paper. 
          </p>
        </div>
      </section>

      {/* 🔷 BRANDS / PARTNERS  */}
      <section className="py-24 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
           {/* <span className="text-green-600 font-bold uppercase tracking-widest text-xs bg-green-50 px-4 py-1.5 rounded-full inline-block mb-4">Authorized Dealers</span>*/}
            <h2 className="text-3xl sm:text-4.5xl font-black text-gray-900 tracking-tight leading-tight"> Here's who we partner with: </h2>
           {/* <p className="text-gray-600 mt-2 text-base sm:text-lg">Direct technical support and complete manufacturer warranty guarantee.</p>*/}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandPartners.map((brand, idx) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-150 flex flex-col justify-between hover:border-green-300 hover:shadow-md transition-all"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-xl font-extrabold text-gray-950 block tracking-tight leading-none">{brand.logoText}</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0">
                      {brand.status}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-gray-800 tracking-tight">{brand.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{brand.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 HARDWARE EQUIPMENT SHOWCASE */}
      <section className="py-24 bg-[#fafbfa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs bg-emerald-50 px-4 py-1.5 rounded-full inline-block mb-4">Core Components</span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">Materials & Inputs We Supply</h2>
            <p className="text-gray-650 mt-2 text-base sm:text-lg">The heavy-duty, field-rugged parts that assemble your farms securely.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareProducts.map((p, idx) => (
              <div 
                key={p.name} 
                className="bg-white border border-gray-150 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:border-emerald-300 transition-all hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-150">{p.category}</span>
                    <span className="text-[10px] uppercase font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-md">{p.brand}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-950 tracking-tight leading-tight">{p.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-6">
                  <span className="text-[11px] font-mono text-gray-500 block">Technical Specification:</span>
                  <span className="text-sm font-semibold text-gray-800 block mt-1">{p.spec}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sourcing Promise info box */}
          <div className="bg-gradient-to-r from-green-900 to-emerald-950 p-8 sm:p-12 rounded-3.5xl text-white mt-16 shadow-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <h4 className="text-2xl sm:text-3.5xl font-extrabold tracking-tight">Our Quality Sourcing Promise</h4>
                <p className="text-green-100 text-sm sm:text-base leading-relaxed">
                  We also source specialized sub-components and fittings from other reputed Indian manufacturers as per project requirements — always prioritizing heavy walls, proper chemical testing, and long-term performance under local sun.
                </p>
              </div>
              <div className="text-center lg:text-right shrink-0">
                <a 
                  href="/contact"
                  className="bg-white text-green-950 font-extrabold py-4 px-8 rounded-2xl text-sm sm:text-base hover:bg-green-50 transition-colors inline-block"
                >
                  Contact Sourcing Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

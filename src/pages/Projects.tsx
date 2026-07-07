import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowRight, ShieldCheck, Sun, Grid, Droplets, CloudRain } from "lucide-react";

const projectGallery = [
  {
    id: 1,
    title: "Vegetables Drip Irrigation Setup",
    location: "Nadia District, West Bengal",
    crop: "Tomato, Chili & Cabbage",
    area: "2 Acres",
    subsidy: "Under PDMC Govt Subsidy",
    category: "Irrigation",
    img: " https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319994/2_qcv3is.jpg",
    desc: "Designed and laid a complete submaster/lateral pipeline network with on-line emitters. Successfully optimized agricultural yields and countered severe irrigation water loss."
  },
  {
    id: 2,
    title: "Turnkey Protected Polyhouse Construction",
    location: "Hooghly, West Bengal",
    crop: "Coloured Capsicum & Gerbera",
    area: "1000 Sq. meters",
    subsidy: "MIDH State Link Scheme",
    category: "Polyhouse",
    img: " https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_1_pqhs5k.jpg ",
    desc: "Erected a strong multi-span GI structure complete with UV-stabilized cladding polyethylene, automatic side roll-up ventilation, and fogger mist rings inside."
  },
  {
    id: 3,
    title: "Solar Submersible Bore Pump Set",
    location: "Purulia District, West Bengal",
    crop: "Wheat & Mustard Brood",
    area: "3 HP Submersible Set",
    subsidy: "Under PM-KUSUM Component-B",
    category: "Solar Pumps",
    img: "https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/1_odmnes.jpg ",
    desc: "Fitted a heavy DC submersible pump into a deep tube-well grid powered by hot-dip galvanized array columns. Cut daily operational fuel and engine electricity bills to nil."
  },
  {
    id: 4,
    title: "Large Overhead Sprinkler System Setup",
    location: "Bankura, West Bengal",
    crop: "Wheat & Groundnut Beds",
    area: "5 Acres Plot",
    subsidy: "PDMC Direct Subsidy Approved",
    category: "Irrigation",
    img: " https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_cudxto.jpg ",
    desc: "Assembled a robust network of quick-coupling sprinkler pipes and brass nozzles to provide uniform field rainfall emulation without dry spots."
  },
  {
    id: 5,
    title: "Automatic Protected Shade Net Green House",
    location: "Murshidabad, West Bengal",
    crop: "Premium Plant Seedlings",
    area: "800 Sq. meters",
    subsidy: "Private Installation",
    category: "Polyhouse",
    img: "https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_2_djboir.jpg ",
    desc: "Created a protected shade structure using heavy green insect netting profiles to keep seedlings safe from severe pest vectors and direct midday sun baking."
  },
  {
    id: 6,
    title: "Solar Surface-Pond Pump Station",
    location: "South 24 Parganas, West Bengal",
    crop: "Paddy & Mixed Vegetables",
    area: "2 HP Surface Set",
    subsidy: "PM-KUSUM Component-B",
    category: "Solar Pumps",
    img: " https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_3_tegjdf.jpg ",
    desc: "Mounted a surface solar pumping array adjacent to a community harvesting canal, making irrigation fully reliable during erratic seasonal rain grids."
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Irrigation", "Polyhouse", "Solar Pumps"];

  const filteredProjects = filter === "All" 
    ? projectGallery 
    : projectGallery.filter((p) => p.category === filter);

  return (
    <div className="pt-20 bg-[#fafbfa]">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1500" 
            alt="Farmland background" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-green-400 font-extrabold uppercase tracking-[0.2em] text-xs">Our Portfolio</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-none text-white text-shadow">
            Work We've Done. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Farms We've Changed.
            </span>
          </h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mt-4 font-semibold">
            Every project here started with a farmer who had a problem — too much water loss, crop failure from weather, unreliable electricity, or no way to grow off-season.
          </p>
        </div>
      </section>

      {/* Interactivity Filters Menu */}
      <section className="py-12 bg-white border-b border-gray-150 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-2 sm:gap-4 overflow-x-auto py-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex items-center gap-2 py-2.5 px-6 rounded-full font-bold text-sm shrink-0 transition-all ${
                  filter === cat 
                    ? "bg-green-600 text-white shadow-lg" 
                    : "bg-gray-150 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat === "All" && <Grid className="w-4 h-4" />}
                {cat === "Irrigation" && <Droplets className="w-4 h-4" />}
                {cat === "Polyhouse" && <Sun className="w-4 h-4" />}
                {cat === "Solar Pumps" && <CloudRain className="w-4 h-4" />}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Display */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3.5xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-350 flex flex-col h-full"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600/90 text-white backdrop-blur-sm shadow px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider block">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-green-700 text-xs font-extrabold uppercase tracking-wider">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight leading-snug">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-650 text-xs sm:text-sm leading-relaxed text-justify">
                        {project.desc}
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-5 space-y-2.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400 font-bold uppercase">Crop Type:</span>
                        <span className="font-extrabold text-gray-800">{project.crop}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400 font-bold uppercase">Size Metric:</span>
                        <span className="font-extrabold text-gray-800">{project.area}</span>
                      </div>
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-gray-400 font-bold uppercase">Subsidy note:</span>
                        <span className="font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-lg border border-green-150 text-[11px]">
                          {project.subsidy}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Sourcing Promise info box */}
      <section className="py-16 bg-[#fafbfa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white border border-gray-150 p-8 sm:p-12 rounded-3.5xl space-y-4">
          <h4 className="text-xl font-bold text-gray-950">Need more proof of results?</h4>
          <p className="text-gray-650 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We hold extensive lists of completed project references across nearly all West Bengal blocks and districts. Reach our local coordination team on WhatsApp to see live videos or local site permissions!
          </p>
          <div className="pt-2">
            <a 
              href="https://wa.me/919051878901" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-extrabold py-3.5 px-8 rounded-2xl text-sm transition-colors inline-block"
            >
              Request Custom Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

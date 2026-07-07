import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Footer() {
  const customPhone = "+91 90518 78901";
  const customEmail = "contact@greenviewagrotech.com";
  const shortAddress = "Barasat, Kolkata, West Bengal 700125";

  return (
    <footer className="bg-gradient-to-b from-[#111827] to-[#040812] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-green-600 p-2 rounded-xl">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight leading-none text-white">Green View</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] leading-none mt-1 text-green-400">Agro Tech</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-justify text-gray-400">
              Leading sustainable agriculture and water resource management dealer specializing in modern irrigation technologies, greenhouse installations, and solar pump solutions across West Bengal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-6 border-l-2 border-green-500 pl-3">Quick Navigation</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/about" className="hover:text-green-400 transition-colors">About Our Story</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Irrigation, Polyhouse & Solar</Link></li>
              <li><Link to="/partners" className="hover:text-green-400 transition-colors">Equipment & Partners</Link></li>
              <li><Link to="/projects" className="hover:text-green-400 transition-colors">Projects Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact Operational Team</Link></li>
            </ul>
          </div>

          {/* Core Solutions */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-6 border-l-2 border-green-500 pl-3">Core Solutions</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/services?tab=irrigation" className="hover:text-green-400 transition-colors">Drip & Sprinkler Systems</Link></li>
              <li><Link to="/services?tab=polyhouse" className="hover:text-green-400 transition-colors">Protected Polyhouse Building</Link></li>
              <li><Link to="/services?tab=solar" className="hover:text-green-400 transition-colors">Solar Agriculture Pumps</Link></li>
              <li><Link to="/services?tab=pmsuryaghar" className="hover:text-green-400 transition-colors">PM Surya Ghar Solar Subsidy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-6 border-l-2 border-green-500 pl-3">Contact West Bengal</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{shortAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <span>{customPhone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 shrink-0" />
                <span className="break-all">{customEmail}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-green-500 shrink-0" />
                <a 
                  href={`https://wa.me/${customPhone.replace(/[+\s]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-extrabold"
                >
                  Direct WhatsApp Help
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Green View Agro Tech. All on-ground rights reserved. Authorized Dealer.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-400">West Bengal Registration</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Partners", href: "/partners" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#14532d] text-white text-center py-2 px-4 text-[11px] sm:text-xs font-semibold tracking-wide shadow-sm">
        🌟 Green View Agro Tech is an <span className="text-yellow-400 font-extrabold">Officially Registered PM Surya Ghar Vendor</span> — Serving All of West Bengal · WBSEDCL & CESC Areas Covered
      </div>
      <nav
        className="bg-white border-b border-gray-150 shadow-md py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center group">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src="/GREEN_VIEW_LOGO_WITH_FRONT.png" 
                alt="Green View Agro Tech" 
                className="h-14 sm:h-16 w-auto object-contain transition-transform"
                referrerPolicy="no-referrer"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-bold transition-all duration-300 hover:text-green-500 relative group py-2",
                    location.pathname === link.href 
                      ? "text-green-500" 
                      : "text-gray-700"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full",
                    location.pathname === link.href ? "w-full" : "w-0"
                  )} />
                </Link>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-green-600 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-green-500 transition-all shadow-xl shadow-green-600/30"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg transition-colors text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "block text-lg font-medium py-2",
                      location.pathname === link.href ? "text-green-600" : "text-gray-600"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block w-full bg-green-600 text-white text-center px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

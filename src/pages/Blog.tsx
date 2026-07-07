import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Smart Farming Techniques for 2026",
    excerpt: "Discover the latest trends in precision agriculture and how they can benefit small-scale farmers in India.",
    date: "March 25, 2026",
    author: "Dr. A.K. Sharma",
    img: " https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319992/1_2_pqveki.jpg "
  },
  {
    id: 2,
    title: "Water Conservation in Drip Irrigation",
    excerpt: "Learn how to optimize your drip irrigation system to save every drop of water while maximizing yield.",
    date: "March 18, 2026",
    author: "S. Mukherjee",
    img: " https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/1_1_oqfmru.jpg "
  },
  {
    id: 3,
    title: "Government Schemes for Farmers",
    excerpt: "A comprehensive guide to the latest subsidies and financial support available for modernizing your farm.",
    date: "March 10, 2026",
    author: "P. Roy",
    img: " https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_4_q2f4uz.jpg "
  },
  {
    id: 4,
    title: "Modern Agriculture Tips",
    excerpt: "Simple yet effective tips to transition from traditional to modern farming methods without high initial costs.",
    date: "March 02, 2026",
    author: "Dr. A.K. Sharma",
    img: " https://res.cloudinary.com/dj3n3w4ka/image/upload/v1780319993/Pi7_image_tool_3_tegjdf.jpg "
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      <section className="bg-green-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Insights, tips, and news from the world of modern agriculture.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-green-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Read More <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-green-100 mb-8 max-w-xl mx-auto">
              Get the latest agri-tech news and tips delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
